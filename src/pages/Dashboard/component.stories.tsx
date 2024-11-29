import type { Meta, StoryObj } from '@storybook/react';
import { HiBars3, HiHome, HiBookmark, HiMagnifyingGlass } from "react-icons/hi2";

import Dashboard from './component';

const meta = {
  title: 'Page/Dashboard',
  component: Dashboard,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof Dashboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigationHistory: [
      { label: 'Test-1', current: false },
      { label: 'Test-2', current: false },
      { label: 'Test-3', current: false },
      { label: 'Test-4', current: true },
    ],
    navbarItems: [
      { icon: <HiHome />, label: 'Newset', value: 'newset', default: true },
      { icon: <HiMagnifyingGlass />, label: 'Search', value: 'search', default: false },
      { icon: <HiBookmark />, label: 'My List', value: 'myList', default: false }
    ]
  },
};

// More on interaction testing: https://storybook.js.org/docs/writing-tests/interaction-testing
// export const LoggedIn: Story = {};
