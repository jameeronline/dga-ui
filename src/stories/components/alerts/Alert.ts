import { tv } from 'tailwind-variants';

import type { BaseAlertVariant } from '@/types/global';
import { formatHtml } from '@/utils/code-format';

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
    base: 'relative flex items-center gap-4 rounded-lg p-4 border border-l-8 text-sm',
    icon: 'text-2xl shrink-0',
    content: 'flex-1',
    title: 'font-semibold mb-1',
    message: '',
    actions: 'mt-3 flex gap-2',
    dismiss: 'cursor-pointer text-lg',
  },
  variants: {
    type: {
      success: {
        base: 'bg-success-50/60 border-success-200 text-success-600',
        icon: 'text-success-300',
      },
      danger: {
        base: 'bg-danger-50/60 border-danger-200 text-danger-600',
        icon: 'text-danger-300',
      },
      info: {
        base: 'bg-info-50/60 border-info-200 text-info-600',
        icon: 'text-info-300',
      },
      warning: {
        base: 'bg-warning-50/60 border-warning-200 text-warning-600',
        icon: 'text-warning-300',
      },
    },
    leadingIcon: {
      true: {
        icon: 'items-self-start',
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
  const escapedPrimaryLabel = escapeHtml(primaryButtonLabel);
  const escapedLinkLabel = escapeHtml(linkButtonLabel);

  const iconHtml = leadingIcon ? `<span class="${icon()}"><i class="${alertIcons[type]}"></i></span>` : '';
  const titleHtml = title ? `<div class="${titleClass()}">${escapedTitle}</div>` : '';
  const actionsHtml = actionButtons
    ? `<div class="${actions()}">
        <button class="btn btn-primary">${escapedPrimaryLabel}</button>
        <button class="btn btn-link">${escapedLinkLabel}</button>
      </div>`
    : '';
  const dismissHtml = dismissIcon ? `<span class="${dismiss()}" aria-label="Dismiss"><i class="ri-close-large-line"></i></span>` : '';

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
