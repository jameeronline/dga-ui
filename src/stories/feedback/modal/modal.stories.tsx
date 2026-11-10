import type { Meta, StoryObj } from '@storybook/html-vite';

import type { ModalProps } from './modal';
import { createModal } from './modal';

const longContent = Array.from(
  { length: 8 },
  (_, index) =>
    `Paragraph ${index + 1}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Donec ullamcorper nulla non metus auctor fringilla.`,
).join(' ');

const meta: Meta<ModalProps> = {
  title: 'Feedback / Modal',
  tags: ['autodocs'],
  parameters: {
    // Center the story in the canvas
    layout: 'centered',
    docs: {
      // Keep the decorator wrapper out of the code panel snippet
      source: { excludeDecorators: true },
      description: {
        component:
          'A modal dialog built on the native HTML `dialog` element. Opening, closing, focus management, Esc handling and light dismiss are provided by the browser, so the component ships without any JavaScript. Use it to interrupt the user for a short, focused task or a decision that must be made before continuing.',
      },
      guidelines: (
        <>
          <p>
            A modal interrupts the current flow to focus attention on a short task or a decision. Keep the content short and action-oriented: if users need to
            read or edit a lot, prefer a page, a drawer, or a scrollable modal.
          </p>

          <h3>How to use it in your project</h3>
          <p>
            The component returns plain HTML, so it works with any framework or server-side renderer. Every modal needs its own unique dialog id, and the
            trigger, title and close actions have to point at that id:
          </p>
          <pre>
            <code>{`<!-- Trigger -->
<button type="button" commandfor="delete-account" command="show-modal">Delete account</button>

<!-- Dialog -->
<dialog id="delete-account" closedby="any" aria-labelledby="delete-account-title">
  <header>
    <h2 id="delete-account-title">Delete account</h2>
    <button type="button" commandfor="delete-account" command="close" aria-label="Close modal">&times;</button>
  </header>

  <div>
    <p>This action cannot be undone.</p>
  </div>

  <footer>
    <button type="button" commandfor="delete-account" command="close">Delete</button>
    <button type="button" commandfor="delete-account" command="close">Cancel</button>
  </footer>
</dialog>`}</code>
          </pre>
          <p>
            The complete markup, including the Tailwind classes that style the dialog, is available in the Code panel of every story. If you consume this
            package's factories, you can generate the same markup instead:
          </p>
          <pre>
            <code>{`import { createModal } from 'dga-ui';

const markup = createModal({
  title: 'Delete account',
  content: 'This action cannot be undone.',
  primaryButtonText: 'Delete',
  footerButtonText: 'Cancel',
  size: 'sm',
});

document.querySelector('#modal-root').innerHTML = markup;`}</code>
          </pre>

          <h3>Implementation checklist</h3>
          <ul>
            <li>
              Give each dialog a unique <code>id</code> and point every <code>commandfor</code>, as well as the title's <code>aria-labelledby</code>, at it.
            </li>
            <li>
              Open with <code>command="show-modal"</code> and close with <code>command="close"</code>. Never ship the <code>open</code> attribute — the browser
              adds and removes it.
            </li>
            <li>
              Keep <code>closedby="any"</code> for the default light-dismiss behavior, use <code>closedby="closerequest"</code> to allow only Esc and explicit
              close actions, or <code>closedby="none"</code> to require an explicit action.
            </li>
            <li>
              Load the stylesheet that contains the Tailwind classes. Animated modals also need the <code>modal-in</code> and <code>modal-fade-in</code>{' '}
              keyframes from <code>src/styles/input.css</code>.
            </li>
            <li>
              If you need to open a dialog from code, call <code>dialog.showModal()</code>. Do not set <code>open</code> manually, otherwise the dialog is not
              promoted to the top layer and the backdrop is not shown.
            </li>
          </ul>

          <h3>Browser support</h3>
          <p>
            The native <code>dialog</code> element is Baseline (Chrome 37+, Firefox 98+, Safari 15.4+). Invoker commands <code>command</code>/
            <code>commandfor</code> need Chrome/Edge 135+, Firefox 144+ or Safari 26.2+, and <code>closedby</code> is available in Chrome/Edge 134+ and Firefox
            141+ (Safari support is still pending).
          </p>
          <p>
            On browsers without invoker-command support the trigger does nothing, so add a small fallback. The dialog and its close buttons already work
            natively:
          </p>
          <pre>
            <code>{`if (!('commandForElement' in HTMLButtonElement.prototype)) {
  document.querySelectorAll('button[commandfor]').forEach((button) => {
    button.addEventListener('click', () => {
      const dialog = document.getElementById(button.getAttribute('commandfor') ?? '');
      if (button.getAttribute('command') === 'show-modal') dialog?.showModal();
      else dialog?.close();
    });
  });
}`}</code>
          </pre>
          <p>
            Where <code>closedby</code> is not supported, the dialog falls back to the default close-request behavior: Esc and the close buttons work, but
            clicking outside the dialog does not close it.
          </p>

          <h3>Do</h3>
          <ul>
            <li>Use a modal for destructive confirmations, short forms and decisions that block the current task.</li>
            <li>Write a title that states the decision, for example “Delete account?”.</li>
            <li>Keep footer actions to one primary and one secondary action.</li>
            <li>Use the small size for confirmations, the default size for forms and the large size for content-heavy dialogs.</li>
            <li>Use the scrollable or fullscreen variant when the content cannot fit in the default dialog height.</li>
          </ul>

          <h3>Don't</h3>
          <ul>
            <li>Don't open a modal from another modal; close the first one or use a separate flow.</li>
            <li>Don't use a modal for non-blocking messages such as success or error feedback — use an alert or a toast instead.</li>
            <li>Don't put long, multi-step flows in a modal; use a page or a drawer.</li>
            <li>Don't remove the close affordance or use closedby="none" without an explicit escape action.</li>
          </ul>
        </>
      ),
      accessibility: (
        <>
          <p>
            Because this is a native modal dialog, the browser handles the hardest parts: it moves focus into the dialog, keeps Tab inside it, makes the rest of
            the page inert, and returns focus to the trigger when the dialog closes.
          </p>
          <ul>
            <li>
              Keep <code>aria-labelledby</code> on the dialog and point it at the visible title so screen readers announce the dialog name.
            </li>
            <li>
              Give the icon-only close button an <code>aria-label</code>, for example “Close modal”.
            </li>
            <li>
              Esc closes the dialog unless you set <code>closedby="none"</code>. Only use that value when a decision is mandatory, and always keep an explicit
              close action.
            </li>
            <li>
              Do not add <code>role="dialog"</code>, <code>aria-modal="true"</code> or <code>aria-hidden</code> to the native dialog; the browser already
              exposes the correct modal semantics.
            </li>
            <li>Keep at least one focusable control inside the dialog so keyboard users can always leave it.</li>
            <li>
              Animations are skipped when the user prefers reduced motion because the component includes <code>motion-reduce:animate-none</code>.
            </li>
          </ul>
        </>
      ),
      iframeHeight: '500px',
    },
  },
  decorators: [
    // Give the canvas a predefined minimum height so the trigger stays centered
    (Story) => `<div style="display: flex; align-items: center; justify-content: center; width: 100%; min-height: 400px;">${Story()}</div>`,
  ],
  render: (args) => createModal(args),
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'Heading shown at the top of the dialog. It also labels the dialog for assistive technology.',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Modal Title' },
      },
    },
    content: {
      name: 'Content',
      control: 'text',
      description: 'Body copy rendered inside the dialog when no form is configured. Plain text is escaped, so paste content without HTML.',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'This is the modal content...' },
      },
    },
    triggerLabel: {
      name: 'Trigger label',
      control: 'text',
      description: 'Label of the button that opens the dialog.',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Open Modal' },
      },
    },
    form: {
      name: 'Form',
      control: false,
      description: 'Renders the dialog body as a native form. When a form is configured, the primary footer action submits it instead of closing the dialog.',
      table: {
        category: 'Content',
        type: { summary: 'ModalFormConfig' },
      },
    },
    showFooter: {
      name: 'Show footer',
      control: 'boolean',
      description: 'Renders the footer action buttons when true.',
      table: {
        category: 'Content',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' },
      },
    },
    primaryButtonText: {
      name: 'Primary button text',
      control: 'text',
      description: 'Label of the primary footer button. It closes the dialog by default, or submits the form when a form is configured.',
      if: { arg: 'showFooter' },
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Continue' },
      },
    },
    footerButtonText: {
      name: 'Footer button text',
      control: 'text',
      description: 'Label of the secondary footer button.',
      if: { arg: 'showFooter' },
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Close' },
      },
    },
    size: {
      name: 'Size',
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
      description: 'Maximum dialog width: 300px (sm), 500px (md) or 800px (lg).',
      table: {
        category: 'Appearance',
        type: { summary: "'sm' | 'md' | 'lg'" },
        defaultValue: { summary: 'md' },
      },
    },
    animated: {
      name: 'Animated',
      control: 'boolean',
      description: 'Adds a short fade and scale animation when the dialog opens. Respects prefers-reduced-motion.',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    scrollable: {
      name: 'Scrollable',
      control: 'boolean',
      description: 'Keeps the header and footer fixed while the dialog body scrolls.',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    fullscreen: {
      name: 'Fullscreen',
      control: 'boolean',
      description: 'Covers the entire viewport and ignores the configured size.',
      table: {
        category: 'Behavior',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  args: {
    title: 'Modal Title',
    content: 'This is the modal content. You can add any HTML content here.',
    showFooter: true,
    primaryButtonText: 'Continue',
    footerButtonText: 'Close',
    triggerLabel: 'Open Modal',
    size: 'md',
    scrollable: false,
    fullscreen: false,
    animated: false,
  },
};

export default meta;

type Story = StoryObj<ModalProps>;

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default `md` dialog is 500px wide and centred in the viewport. It closes with Esc, the close buttons, or a click outside.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    title: 'Small modal',
    size: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the 300px small size for short confirmations and single-question dialogs.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    title: 'Large modal',
    size: 'lg',
  },
  parameters: {
    docs: {
      description: {
        story: 'Use the 800px large size for forms or dialogs with more than a few lines of content.',
      },
    },
  },
};

export const Scrollable: Story = {
  args: {
    title: 'Scrollable modal',
    content: longContent,
    scrollable: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'The header and footer stay visible while the body scrolls. Prefer this over a very tall dialog when the content cannot be trimmed.',
      },
    },
  },
};

export const Fullscreen: Story = {
  args: {
    title: 'Fullscreen modal',
    content: longContent,
    fullscreen: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Covers the whole viewport and ignores the size setting. Because there is no visible backdrop, users close it with Esc or the close actions.',
      },
    },
  },
};

export const Animated: Story = {
  args: {
    title: 'Animated modal',
    animated: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Adds a short fade and scale entrance animation. It can be combined with any size, scrollable, or fullscreen variant.',
      },
    },
  },
};

export const LoginForm: Story = {
  args: {
    title: 'Sign in',
    triggerLabel: 'Sign in',
    size: 'sm',
    primaryButtonText: 'Sign in',
    footerButtonText: 'Cancel',
    form: {
      method: 'dialog',
      fields: [
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'you@example.com',
          autoComplete: 'email',
          required: true,
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
          autoComplete: 'current-password',
          required: true,
        },
        {
          name: 'remember',
          label: 'Remember me',
          type: 'checkbox',
        },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'A compact login dialog using the `sm` size. The body is a native form, so Enter submits it and the primary footer action is a submit button associated with the form. `method="dialog"` closes the modal without reloading the page.',
      },
    },
  },
};

export const RegistrationForm: Story = {
  args: {
    title: 'Create account',
    triggerLabel: 'Create account',
    primaryButtonText: 'Create account',
    footerButtonText: 'Cancel',
    form: {
      method: 'dialog',
      fields: [
        {
          name: 'fullName',
          label: 'Full name',
          type: 'text',
          placeholder: 'Jane Doe',
          autoComplete: 'name',
          required: true,
        },
        {
          name: 'email',
          label: 'Email',
          type: 'email',
          placeholder: 'you@example.com',
          autoComplete: 'email',
          required: true,
        },
        {
          name: 'password',
          label: 'Password',
          type: 'password',
          placeholder: 'Create a password',
          autoComplete: 'new-password',
          required: true,
          helpText: 'Use at least 8 characters.',
        },
        {
          name: 'terms',
          label: 'I agree to the Terms of Service and Privacy Policy',
          type: 'checkbox',
          required: true,
        },
      ],
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'A short registration form using the default `md` size. Keep form modals to a few fields; for longer or multi-step registration flows, use a page or a drawer instead.',
      },
    },
  },
};
