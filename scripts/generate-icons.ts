import * as fs from 'fs';
import * as path from 'path';

const ICONS_DIR = path.join(process.cwd(), 'node_modules', 'remixicon', 'icons');
const OUTPUT_FILE = path.join(process.cwd(), 'src', 'icons', 'icons.generated.ts');

interface IconConfig {
  name: string;
  category: string;
}

function getIconList(): IconConfig[] {
  return [
    { name: 'home-line', category: 'System' },
    { name: 'home-fill', category: 'System' },
    { name: 'settings-4-line', category: 'System' },
    { name: 'settings-4-fill', category: 'System' },
    { name: 'check-line', category: 'System' },
    { name: 'check-fill', category: 'System' },
    { name: 'close-line', category: 'System' },
    { name: 'close-fill', category: 'System' },
    { name: 'add-line', category: 'System' },
    { name: 'add-fill', category: 'System' },
    { name: 'delete-bin-line', category: 'System' },
    { name: 'delete-bin-fill', category: 'System' },
    { name: 'edit-line', category: 'System' },
    { name: 'edit-fill', category: 'System' },
    { name: 'search-line', category: 'System' },
    { name: 'search-fill', category: 'System' },
    { name: 'filter-line', category: 'System' },
    { name: 'filter-fill', category: 'System' },
    { name: 'arrow-left-line', category: 'Arrows' },
    { name: 'arrow-right-line', category: 'Arrows' },
    { name: 'arrow-up-line', category: 'Arrows' },
    { name: 'arrow-down-line', category: 'Arrows' },
    { name: 'arrow-left-s-line', category: 'Arrows' },
    { name: 'arrow-right-s-line', category: 'Arrows' },
    { name: 'arrow-up-s-line', category: 'Arrows' },
    { name: 'arrow-down-s-line', category: 'Arrows' },
    { name: 'user-line', category: 'User & Faces' },
    { name: 'user-fill', category: 'User & Faces' },
    { name: 'user-smile-line', category: 'User & Faces' },
    { name: 'user-smile-fill', category: 'User & Faces' },
    { name: 'user-3-line', category: 'User & Faces' },
    { name: 'user-3-fill', category: 'User & Faces' },
    { name: 'group-line', category: 'User & Faces' },
    { name: 'group-fill', category: 'User & Faces' },
    { name: 'menu-line', category: 'System' },
    { name: 'menu-fill', category: 'System' },
    { name: 'more-line', category: 'System' },
    { name: 'more-fill', category: 'System' },
    { name: 'ellipsis-line', category: 'System' },
    { name: 'ellipsis-fill', category: 'System' },
    { name: 'loader-4-line', category: 'System' },
    { name: 'spinner-line', category: 'System' },
    { name: 'check-double-line', category: 'System' },
    { name: 'checkbox-blank-circle-line', category: 'System' },
    { name: 'checkbox-blank-circle-fill', category: 'System' },
    { name: 'checkbox-multiple-blank-line', category: 'System' },
    { name: 'checkbox-multiple-blank-fill', category: 'System' },
    { name: 'radio-button-line', category: 'System' },
    { name: 'radio-button-fill', category: 'System' },
    { name: 'toggle-line', category: 'System' },
    { name: 'toggle-fill', category: 'System' },
    { name: 'information-line', category: 'System' },
    { name: 'information-fill', category: 'System' },
    { name: 'alert-line', category: 'System' },
    { name: 'alert-fill', category: 'System' },
    { name: 'error-warning-line', category: 'System' },
    { name: 'error-warning-fill', category: 'System' },
    { name: 'question-line', category: 'System' },
    { name: 'question-fill', category: 'System' },
    { name: 'eye-line', category: 'System' },
    { name: 'eye-fill', category: 'System' },
    { name: 'eye-off-line', category: 'System' },
    { name: 'eye-off-fill', category: 'System' },
    { name: 'lock-line', category: 'System' },
    { name: 'lock-fill', category: 'System' },
    { name: 'lock-unlock-line', category: 'System' },
    { name: 'lock-unlock-fill', category: 'System' },
    { name: 'key-line', category: 'System' },
    { name: 'key-fill', category: 'System' },
    { name: 'time-line', category: 'System' },
    { name: 'time-fill', category: 'System' },
    { name: 'calendar-line', category: 'System' },
    { name: 'calendar-fill', category: 'System' },
    { name: 'clock-line', category: 'System' },
    { name: 'clock-fill', category: 'System' },
    { name: 'notification-line', category: 'System' },
    { name: 'notification-fill', category: 'System' },
    { name: 'notification-3-line', category: 'System' },
    { name: 'notification-3-fill', category: 'System' },
    { name: 'bell-line', category: 'System' },
    { name: 'bell-fill', category: 'System' },
    { name: 'bookmark-line', category: 'System' },
    { name: 'bookmark-fill', category: 'System' },
    { name: 'star-line', category: 'System' },
    { name: 'star-fill', category: 'System' },
    { name: 'heart-line', category: 'System' },
    { name: 'heart-fill', category: 'System' },
    { name: 'share-line', category: 'System' },
    { name: 'share-fill', category: 'System' },
    { name: 'download-line', category: 'System' },
    { name: 'download-fill', category: 'System' },
    { name: 'upload-line', category: 'System' },
    { name: 'upload-fill', category: 'System' },
    { name: 'link', category: 'System' },
    { name: 'link-unlink', category: 'System' },
    { name: 'external-link-line', category: 'System' },
    { name: 'attach-file', category: 'System' },
    { name: 'attachment', category: 'System' },
    { name: 'clipboard-line', category: 'Document' },
    { name: 'clipboard-fill', category: 'Document' },
    { name: 'file-list-line', category: 'Document' },
    { name: 'file-list-fill', category: 'Document' },
    { name: 'file-text-line', category: 'Document' },
    { name: 'file-text-fill', category: 'Document' },
    { name: 'folder-line', category: 'Document' },
    { name: 'folder-fill', category: 'Document' },
    { name: 'folder-open-line', category: 'Document' },
    { name: 'folder-open-fill', category: 'Document' },
  ];
}

function processSvg(svgContent: string): string {
  let svg = svgContent.replace(/<\?xml[^?]*\?>/gi, '').trim();

  svg = svg.replace(/\s*(width|height)=["'][^"']*["']/gi, '');

  svg = svg.replace(/class="[^"]*"/gi, '');

  if (!svg.includes('viewBox')) {
    const viewBoxMatch = svg.match(/viewBox="([^"]*)"/);
    if (viewBoxMatch) {
      svg = svg.replace('<svg', `<svg viewBox="${viewBoxMatch[1]}"`);
    }
  }

  if (!svg.match(/fill="[^"]*"/) && !svg.match(/stroke="[^"]*"/)) {
    svg = svg.replace('<svg', '<svg fill="currentColor"');
  }

  svg = svg.replace(/\s+/g, ' ').replace(/>\s+</g, '><');

  return svg;
}

function generateIcons() {
  const icons = getIconList();
  const generatedIcons: Array<{ name: string; svg: string; category: string }> = [];

  console.log(`Generating ${icons.length} icons...`);

  for (const icon of icons) {
    const filePath = path.join(ICONS_DIR, icon.category, `${icon.name}.svg`);

    if (!fs.existsSync(filePath)) {
      console.warn(`⚠️  Icon not found: ${icon.category}/${icon.name}.svg`);
      continue;
    }

    const svgContent = fs.readFileSync(filePath, 'utf8');
    const processedSvg = processSvg(svgContent);

    generatedIcons.push({
      name: icon.name,
      svg: processedSvg,
      category: icon.category,
    });
  }

  const outputContent = `/**
 * Auto-generated file - DO NOT EDIT
 * To regenerate, run: npm run generate:icons
 */
import type { IconData } from './icons.types';

export const icons: IconData[] = ${JSON.stringify(generatedIcons, null, 2)};

export const iconsMap: Record<string, string> = icons.reduce((acc, icon) => {
  acc[icon.name] = icon.svg;
  return acc;
}, {} as Record<string, string>);

export const iconCategories: string[] = [...new Set(icons.map(i => i.category))];
`;

  const dir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, outputContent);
  console.log(`✅ Generated ${generatedIcons.length} icons to ${OUTPUT_FILE}`);
}

generateIcons();