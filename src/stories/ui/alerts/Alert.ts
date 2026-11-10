import { tv } from 'tailwind-variants';

import type { BaseAlertVariant } from '@/types/global';
import { formatHtml } from '@/utils/code-format';

//component
import { createButton } from '@/stories/components/button/Button';

export interface AlertProps {
  type?: BaseAlertVariant;
  title?: string;
  message?: string;
  leadingIcon?: boolean;
  dismissIcon?: boolean;
  actionButtons?: boolean;
  primaryButtonLabel?: string;
  linkButtonLabel?: string;
}

const alertIcons: Record<string, string> = {
  success: 'ri-checkbox-circle-line',
  danger: 'ri-question-line',
  info: 'ri-information-2-line',
  warning: 'ri-error-warning-line',
};

const alertClassNames = tv({
  slots: {
    base: 'relative flex items-center gap-4 rounded-lg p-4 border border-l-8 ',
    icon: 'text-2xl shrink-0',
    content: 'flex-1 text-sm',
    title: 'font-semibold mb-1 text-base',
    message: 'flex',
    actions: 'mt-4 flex gap-2',
    dismiss: 'cursor-pointer text-2xl',
  },
  variants: {
    type: {
      success: {
        base: 'bg-success-background-subtle border-success-border text-success-foreground',
      },
      danger: {
        base: 'bg-danger-background-subtle border-danger-border text-danger-foreground',
      },
      info: {
        base: 'bg-info-background-subtle border-info-border text-info-foreground',
      },
      warning: {
        base: 'bg-warning-background-subtle border-warning-border text-warning-foreground',
      },
    },
    leadingIcon: {
      true: {
        icon: 'self-start',
      },
    },
  },
});

function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

export const createAlert = ({
  type = 'success',
  title = '',
  message = '',
  leadingIcon = false,
  dismissIcon = false,
  actionButtons = false,
  primaryButtonLabel = 'Proceed',
  linkButtonLabel = 'Cancel',
}: AlertProps): string => {
  const { base, icon, content, title: titleClass, message: messageClass, actions, dismiss } = alertClassNames({ type, leadingIcon });

  const escapedTitle = escapeHtml(title);
  const escapedMessage = escapeHtml(message);
  const iconHtml = leadingIcon ? `<span class="${icon()}"><i class="${alertIcons[type]}"></i></span>` : '';
  const titleHtml = title ? `<div class="${titleClass()}">${escapedTitle}</div>` : '';
  const actionsHtml = actionButtons
    ? `<div class="${actions()}">
        ${createButton({ type: type, label: primaryButtonLabel, size: 'small' })}
        ${createButton({ type: type, label: linkButtonLabel, size: 'small', link: true })}
      </div>`
    : '';
  const dismissHtml = dismissIcon ? `<span class="${dismiss()}" aria-label="Dismiss"><i class="ri-close-line"></i></span>` : '';

  return formatHtml(`
<div class="${base()}">
  ${iconHtml}
  <div class="${content()}">
    ${titleHtml}
    <div class="${messageClass()}">${escapedMessage}</div>
    ${actionsHtml}
  </div>
  ${dismissHtml}
</div>
`);
};
