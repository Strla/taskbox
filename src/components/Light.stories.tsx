import type { Meta, StoryObj } from '@storybook/react';
import Light from './Light';

const meta: Meta<typeof Light> = {
  component: Light,
  title: 'Light',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: {
        type: 'radio',
      },
      options: ['green', 'yellow', 'red'],
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Base: Story = {};

export const Yellow: Story = {
  args: {
    variant: 'yellow',
  },
};

export const Red: Story = {
  args: {
    variant: 'red',
  },
};
