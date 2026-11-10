import { chromium } from 'playwright';

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
const errors = [];
page.on('pageerror', (err) => errors.push(err.message));
page.on('console', (msg) => {
  if (msg.type() === 'error') errors.push(`console: ${msg.text()}`);
});

await page.goto('http://127.0.0.1:6006/iframe.html?id=feedback-modal--docs&viewMode=docs', { waitUntil: 'networkidle' });
await page.waitForTimeout(1500);

const result = await page.evaluate(() => {
  const text = document.body.innerText;
  return {
    errorDisplay: document.querySelectorAll('.sb-errordisplay, .sb-show-errordisplay').length,
    headings: Array.from(document.querySelectorAll('h1, h2, h3')).map((h) => h.textContent?.trim()),
    hasUsage: text.includes('How to use it in your project'),
    hasChecklist: text.includes('Implementation checklist'),
    hasBrowserSupport: text.includes('Browser support'),
    hasA11y: text.includes('Accessibility'),
    hasCodeBlocks: document.querySelectorAll('pre code').length,
    iframes: Array.from(document.querySelectorAll('iframe')).map((f) => f.getAttribute('src')),
  };
});

console.log(JSON.stringify(result, null, 2));

const storyErrors = {};
for (const id of ['default', 'small', 'large', 'scrollable', 'fullscreen', 'animated']) {
  const p = await browser.newPage({ viewport: { width: 900, height: 600 } });
  const errs = [];
  p.on('pageerror', (e) => errs.push(e.message));
  await p.goto(`http://127.0.0.1:6006/iframe.html?id=feedback-modal--${id}&viewMode=story`, { waitUntil: 'networkidle' });
  await p.waitForTimeout(300);
  const trigger = p.locator('button[command="show-modal"]').first();
  const box = await trigger.boundingBox();
  await p.mouse.click(box.x + box.width / 2, box.y + box.height / 2);
  await p.waitForTimeout(400);
  const dialog = p.locator('dialog').first();
  const state = await dialog.evaluate((el) => ({
    open: el.open,
    width: Math.round(el.getBoundingClientRect().width),
    display: getComputedStyle(el).display,
  }));
  await p.keyboard.press('Escape');
  await p.waitForTimeout(250);
  state.closedByEsc = !(await dialog.evaluate((el) => el.open));
  storyErrors[id] = { ...state, errors: errs };
  await p.close();
}

console.log(JSON.stringify(storyErrors, null, 2));
console.log('DOCS PAGE ERRORS:', errors.length ? errors : 'none');

await browser.close();
