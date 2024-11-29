"use client"

import { ChakraProvider, defaultConfig, defineConfig, createSystem } from "@chakra-ui/react"

import { ColorModeProvider, type ColorModeProviderProps } from "@/components/Chakra/color-mode"


export default function Provider(props: ColorModeProviderProps) {

  const _config = defineConfig({
    theme: {
      // semanticTokens: {
      //   colors: {
      //     bg: {
      //       DEFAULT: { value: "{colors.red.900}" },
      //       primary: { value: "{colors.teal.100}" },
      //       secondary: { value: "{colors.red.900}" },
      //     },
      //     fg: {
      //       DEFAULT: { value: "{colors.red.900}" },
      //       primary: { value: "{colors.teal.100}" },
      //       secondary: { value: "{colors.red.900}" },
      //     },
      //   },
      // },
    }
  })

  return <ChakraProvider value={createSystem(defaultConfig, _config)} >
    <ColorModeProvider {...props} />
  </ChakraProvider>
}
