import type { Meta, StoryObj } from '@storybook/react';
import Component from './index';

const meta: Meta<typeof Component> = {
  title: 'Components/Card',
  component: Component,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered', // Puoi cambiare il layout se necessario
  },
  args: {
    id: '1', // ID univoco per il componente
    thumbnail: 'https://via.placeholder.com/150', // Immagine placeholder
    yearStart: 2023,
    season: 'Spring',
    title: 'Sample Title',
    type: 'Sample Type',
    actions: undefined, // Azioni opzionali
  },
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

// Storie del componente
export const Default: Story = {};

export const Custom: Story = {
  args: {
    id: '2',
    thumbnail: 'https://via.placeholder.com/300',
    yearStart: 2024,
    season: 'Fall',
    title: 'Custom Title',
    type: 'Custom Type',
    actions: <button>Custom Action</button>,
  },
};

export const WithoutSeason: Story = {
  args: {
    id: '3',
    thumbnail: 'https://via.placeholder.com/200',
    yearStart: 2022,
    season: null, // Nessuna stagione specificata
    title: 'No Season Title',
    type: 'No Season Type',
    actions: undefined,
  },
};
