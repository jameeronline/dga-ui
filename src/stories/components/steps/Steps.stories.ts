import type { Meta, StoryObj } from '@storybook/html-vite';
import type { StepsProps } from './Steps';
import { createStepProgressBar } from './Steps';

const meta: Meta<StepsProps> = {
  title: 'Components/Steps',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'The Steps component displays a progress indicator showing completion status of multi-step processes.',
      },
    },
  },
  render: createStepProgressBar,
  argTypes: {
    steps: {
      name: 'Steps',
      control: 'object',
      table: {
        category: 'Content',
        type: { summary: 'object' },
      },
      description: 'Array of step objects with label, completed, and current properties.',
    },
  },
  args: {
    steps: [
      { label: 'Enter Details', completed: true },
      { label: 'Confirmation', completed: true },
      { label: 'Payment', current: true },
      { label: 'Success' },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof createStepProgressBar>;

export const Default: Story = {
  args: {},
};

export const AllCompleted: Story = {
  args: {
    steps: [
      { label: 'Step 1', completed: true },
      { label: 'Step 2', completed: true },
      { label: 'Step 3', completed: true },
      { label: 'Step 4', completed: true },
    ],
  },
};

export const FirstStep: Story = {
  args: {
    steps: [
      { label: 'Step 1', current: true },
      { label: 'Step 2' },
      { label: 'Step 3' },
      { label: 'Step 4' },
    ],
  },
};

export const ThreeSteps: Story = {
  args: {
    steps: [
      { label: 'Start', completed: true },
      { label: 'Continue', current: true },
      { label: 'Finish' },
    ],
  },
};

export const AllVariants: Story = {
  render: () => {
    return `
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h4 style="margin-bottom: 12px;">Default Progress</h4>
          ${createStepProgressBar({})}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">All Completed</h4>
          ${createStepProgressBar({
            steps: [
              { label: 'Step 1', completed: true },
              { label: 'Step 2', completed: true },
              { label: 'Step 3', completed: true },
              { label: 'Step 4', completed: true },
            ],
          })}
        </div>
        <div>
          <h4 style="margin-bottom: 12px;">First Step</h4>
          ${createStepProgressBar({
            steps: [
              { label: 'Step 1', current: true },
              { label: 'Step 2' },
              { label: 'Step 3' },
            ],
          })}
        </div>
      </div>
    `;
  },
  parameters: {
    docs: {
      description: {
        story: 'Overview of all step variations: default, completed, and current states.',
      },
    },
  },
};