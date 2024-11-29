import React from "react";
import type { Preview } from "@storybook/react"
import { withThemeByClassName } from "@storybook/addon-themes"

import ThemeProvider from "../src/providers/ThemeProvider"

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => <ThemeProvider>
      <Story />
    </ThemeProvider>,
    withThemeByClassName({
      defaultTheme: "light",
      themes: { light: "", dark: "dark" },
    }),
  ],
};

export default preview;
