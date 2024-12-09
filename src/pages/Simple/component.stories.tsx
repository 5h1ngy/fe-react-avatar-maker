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
      { label: 'Contact', value: '/contact' }, // Aggiunto un esempio extra
    ],
    logo: 'https://via.placeholder.com/42', // Modificato per corrispondere al componente
    children: (
      <>
        <p>Welcome to the landing page!</p>
        <p>Explore our features and learn more about us.</p>
      </>
    ),
  },
};

export default meta;
type Story = StoryObj<ComponentProps>;

export const Default: Story = {};
