import type { Meta, StoryObj } from '@storybook/react';
import Component from './component';
import { ComponentProps } from './component.types';
import { MemoryRouter } from 'react-router-dom';

const meta: Meta<ComponentProps> = {
  title: 'Pages/Landing',
  component: Component,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={['/']}>
        <Story />
      </MemoryRouter>
    ),
  ],
  args: {
    navbarItems: [
      { label: 'Home', value: '/' },
      { label: 'About', value: '/about' },
    ],
    navbarSubItems: [
      { label: 'Sub 1', value: '/sub1', icon: '🔗' },
      { label: 'Sub 2', value: '/sub2', icon: '🔗' },
    ],
    logo: 'https://via.placeholder.com/150',
    decorationBody: 'https://via.placeholder.com/300',
  },
};

export default meta;
type Story = StoryObj<ComponentProps>;

export const Default: Story = {};
