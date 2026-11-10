//types
import type { Meta, StoryObj } from '@storybook/html-vite';
import type { TooltipProps } from './Tooltip';

//element
import { createTooltip } from './Tooltip';

//utils
import * as OptionsObj from '@/utils/index';

const VARIANT_OPTIONS = ['light', 'dark'];

// Meta configuration
const meta: Meta<TooltipProps> = {
  title: 'Components/Tooltip',
  tags: ['autodocs'],
  parameters: {
    // Center the story in the canvas
    layout: 'centered',
    docs: {
      // Keep the decorator wrapper out of the code panel snippet
      source: { excludeDecorators: true },
      description: {
        component:
          'The Tooltip component displays contextual information on hover or keyboard focus. It is triggered by an accessible native button and supports multiple positions, sizes, and color variants.',
      },
      guidelines: (
        <>
          <p>
            Use a tooltip to provide supplementary, non-essential information that appears when the user hovers over or focuses the trigger. Keep the text short
            — tooltips are for quick context, not critical content.
          </p>

          <h3>How to use it in your project</h3>
          <p>
            The component returns plain HTML, so it works with any framework or server-side renderer. Each trigger is a<code>&lt;button type="button"&gt;</code>{' '}
            labelled with its purpose, and the tooltip content is associated through <code>aria-describedby</code>:
          </p>
          <pre>
            <code>{`<!-- Trigger with a text label -->
<button type="button" aria-describedby="tooltip-copy">
  Copy item
  <span role="tooltip" id="tooltip-copy" class="...">Copied to clipboard</span>
</button>

<!-- Icon-only trigger -->
<button type="button" aria-describedby="tooltip-info">
  <i class="ri-information-line" aria-hidden="true"></i>
  <span role="tooltip" id="tooltip-info" class="...">More information</span>
</button>`}</code>
          </pre>
          <p>
            The complete markup, including the Tailwind classes that style the tooltip and its arrow, is available in the Code panel of every story. If you
            consume this package's factories, you can generate the same markup instead:
          </p>
          <pre>
            <code>{`import { createTooltip } from 'dga-ui';

const markup = createTooltip({
  label: 'Copy item',
  tooltipText: 'Copied to clipboard',
  position: 'top',
  variant: 'primary',
  size: 'default',
});

document.querySelector('#tooltip-root').innerHTML = markup;`}</code>
          </pre>

          <h3>Implementation checklist</h3>
          <ul>
            <li>
              Keep the tooltip text short and concise. If users need to read a lot, use a{' '}
              <a href="#" rel="noopener noreferrer" target="_blank">
                popover or dialog
              </a>
              instead.
            </li>
            <li>Ensure the trigger has a clear, descriptive label. For icon-only triggers, the label must still convey the purpose to assistive technology.</li>
            <li>
              Pair the trigger <code>aria-describedby</code> with the tooltip's unique <code>id</code>, and give the tooltip <code>role="tooltip"</code>.
            </li>
            <li>Never place critical or required actions inside a tooltip — they are not discoverable on touch devices or for keyboard-only users.</li>
            <li>Load the stylesheet that contains the Tailwind classes so the tooltip arrow, positioning, and fade appear correctly.</li>
          </ul>

          <h3>Browser support</h3>
          <p>
            The tooltip uses CSS Anchor Positioning (<code>anchor-name</code>,<code>position-anchor</code>, <code>position-area</code>,
            <code>position-try-options</code>) to place itself relative to its trigger, with automatic flipping when there is not enough space. It also relies
            on CSS <code>:hover</code> and <code>:focus-within</code>
            to reveal its content. No JavaScript is required.
          </p>
          <p>
            CSS Anchor Positioning is supported in Chrome 125+, Firefox 136+, and Safari 18+. In older browsers the tooltip may not render, so consider a
            fallback if you need to support them.
          </p>

          <h3>Do</h3>
          <ul>
            <li>Keep tooltip text short and concise.</li>
            <li>Use tooltips for supplementary details, not critical information.</li>
            <li>Ensure the trigger has a clear, descriptive label.</li>
            <li>Pair icon-only triggers with an accessible label.</li>
          </ul>

          <h3>Don't</h3>
          <ul>
            <li>Place critical or required actions inside a tooltip.</li>
            <li>Use tooltips as a substitute for clear UI labels.</li>
            <li>Rely on hover alone; tooltips must also appear on keyboard focus.</li>
          </ul>
        </>
      ),
      accessibility: (
        <>
          <p>
            The tooltip trigger is a native <code>&lt;button type="button"&gt;</code>, so it is keyboard focusable and activatable without any JavaScript. The
            tooltip appears on both hover and keyboard focus.
          </p>
          <ul>
            <li>
              The trigger uses <code>aria-describedby</code> to associate it with its tooltip, and each tooltip gets a unique <code>id</code>.
            </li>
            <li>
              The tooltip uses <code>role="tooltip"</code> so screen readers announce it as a tooltip.
            </li>
            <li>
              The tooltip appears on both hover and keyboard focus (<code>group-focus-within</code>), so keyboard users are not left out.
            </li>
            <li>
              Icons inside icon-only triggers are hidden from assistive technology with <code>aria-hidden="true"</code>, since the trigger's label already
              conveys the purpose.
            </li>
            <li>Trigger and tooltip text are escaped to prevent HTML injection.</li>
          </ul>
        </>
      ),
      backgrounds: {
        default: 'light',
        values: [
          { name: 'light', value: '#ffffff' },
          { name: 'dark', value: '#000000' },
        ],
      },
    },
  },
  decorators: [
    // Give the canvas a predefined minimum height so tooltips are not clipped and the trigger stays centered
    (Story) => `<div style="display: flex; align-items: center; justify-content: center; width: 100%; min-height: 400px;">${Story()}</div>`,
  ],
  render: createTooltip,
  argTypes: {
    variant: {
      name: 'Variant',
      control: { type: 'select', labels: OptionsObj.neutralColorLabels },
      options: OptionsObj.neutralColorOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'light' },
      },
      defaultValue: 'light',
      description: 'Color variant of the tooltip.',
    },
    position: {
      name: 'Position',
      control: { type: 'select', labels: OptionsObj.tooltipPositionLabels },
      options: OptionsObj.tooltipPositionOptions,
      table: {
        category: 'Appearance',
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
      defaultValue: 'top',
      description: 'Position of the tooltip relative to the trigger.',
    },
    onlyIcon: {
      name: 'Icon Only',
      control: 'boolean',
      table: {
        category: 'Appearance',
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
      defaultValue: false,
      description: 'Show only an icon as the trigger.',
    },
    label: {
      name: 'Label',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Hover me' },
      },
      defaultValue: 'Hover me',
      description: 'The trigger label text.',
      if: { arg: 'onlyIcon', neq: true },
    },
    tooltipText: {
      name: 'Tooltip Text',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: "I'm a tooltip" },
      },
      defaultValue: "I'm a tooltip",
      description: 'The text content of the tooltip.',
    },
    tooltipDescription: {
      name: 'Tooltip Description',
      control: 'text',
      table: {
        category: 'Content',
        type: { summary: 'string' },
        defaultValue: { summary: 'Max width of tooltips is 240px - text will wrap automatically' },
      },
      defaultValue: 'Max width of tooltips is 240px - text will wrap automatically',
      description: 'Description text for the tooltip.',
    },
  },
  args: {
    variant: 'light',
    position: 'top',
    onlyIcon: false,
    label: 'Hover me',
    tooltipText: "I'm a tooltip",
    tooltipDescription: 'Max width of tooltips is 240px - text will wrap automatically',
  },
};

export default meta;

type Story = StoryObj<typeof createTooltip>;

export const Top: Story = {
  args: {
    position: 'top',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned above the trigger.',
      },
    },
  },
};

export const Right: Story = {
  args: {
    position: 'right',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned to the right of the trigger.',
      },
    },
  },
};

export const Bottom: Story = {
  args: {
    position: 'bottom',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned below the trigger.',
      },
    },
  },
};

export const Left: Story = {
  args: {
    position: 'left',
  },
  parameters: {
    docs: {
      description: {
        story: 'Tooltip positioned to the left of the trigger.',
      },
    },
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Small tooltip message.',
      },
    },
  },
};

export const Default: Story = {
  args: {
    size: 'default',
  },
  parameters: {
    docs: {
      description: {
        story: 'Default sized tooltip message.',
      },
    },
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large tooltip message.',
      },
    },
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Primary colored tooltip.',
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
  parameters: {
    docs: {
      description: {
        story: 'Secondary colored tooltip.',
      },
    },
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Success colored tooltip.',
      },
    },
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
  parameters: {
    docs: {
      description: {
        story: 'Danger colored tooltip.',
      },
    },
  },
};

export const Info: Story = {
  args: {
    variant: 'info',
  },
  parameters: {
    docs: {
      description: {
        story: 'Info colored tooltip.',
      },
    },
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Warning colored tooltip.',
      },
    },
  },
};

export const IconOnly: Story = {
  args: {
    onlyIcon: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Icon-only trigger; the icon is hidden from assistive technology.',
      },
    },
  },
};

export const KeyboardAccessible: Story = {
  args: {
    position: 'bottom',
    label: 'Focus me with Tab',
    tooltipText: 'This tooltip appears on keyboard focus too.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates that the tooltip appears on keyboard focus, not just hover. Tab to the trigger to see it.',
      },
    },
  },
};

export const AllVariants: Story = {
  render: () => {
    const positions = ['top', 'right', 'bottom', 'left'] as const;
    const variants = ['primary', 'secondary', 'success', 'danger', 'info', 'warning'] as const;

    let html = '<div style="display: flex; flex-direction: column; gap: 24px;">';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Positions</strong>';
    for (const p of positions) {
      html += createTooltip({ position: p });
    }
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Variants</strong>';
    for (const v of variants) {
      html += createTooltip({ variant: v });
    }
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Sizes</strong>';
    html += createTooltip({ size: 'small' });
    html += createTooltip({ size: 'default' });
    html += createTooltip({ size: 'large' });
    html += '</div>';

    html += '<div style="display: flex; gap: 16px; align-items: flex-start;"><strong>Icon Only</strong>';
    html += createTooltip({ onlyIcon: true });
    html += '</div>';

    html += '</div>';
    return html;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all tooltip variants: positions, sizes, colors, and icon only.',
      },
    },
  },
};
