"use client";

import type { ConditionalValue, IconButtonProps } from "@chakra-ui/react";
import { ClientOnly, IconButton, Skeleton } from "@chakra-ui/react";
import { ThemeProvider, useTheme } from "next-themes";
import type { ThemeProviderProps } from "next-themes";
import { forwardRef } from "react";
import { HiSun, HiMoon } from "react-icons/hi2";
import { LuMoon, LuSun } from "react-icons/lu";
import { Tabs } from "@chakra-ui/react"

// Interfaccia che estende le proprietà di ThemeProvider
export interface ColorModeProviderProps extends ThemeProviderProps { }

// Componente per fornire il contesto del tema a tutta l'applicazione
export function ColorModeProvider(props: ColorModeProviderProps) {
  return <ThemeProvider attribute="class" disableTransitionOnChange {...props} />;
}

// Hook personalizzato per ottenere e gestire la modalità colore (chiaro/scuro)
export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme();

  // Funzione per alternare la modalità colore
  const toggleColorMode = () => {
    setTheme(resolvedTheme === "light" ? "dark" : "light");
  };

  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  };
}

// Hook per ottenere un valore diverso in base alla modalità colore
export function useColorModeValue<T>(light: T, dark: T): T {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? light : dark;
}

// Componente icona che mostra un'icona diversa in base alla modalità colore
export function ColorModeIcon() {
  const { colorMode } = useColorMode();
  return colorMode === "light" ? <LuSun /> : <LuMoon />;
}

// Proprietà per il bottone di cambio modalità colore esteso
interface ColorModeButtonProps extends Omit<IconButtonProps, "aria-label"> { }


interface ColorModeButtonExtendedProps {
  variant: ConditionalValue<"outline" | "line" | "subtle" | "plain" | "enclosed" | undefined>;
  size: ConditionalValue<'sm' | 'md' | 'lg'>;
}

// Componente esteso di bottone per il cambio della modalità colore con controllo segmentato
export const ColorModeButtonExtended = function ColorModeButtonExtended(props: ColorModeButtonExtendedProps) {
  const { toggleColorMode, colorMode } = useColorMode();
  const { variant, size } = props;

  return (
    // Usa ClientOnly per assicurarsi che il componente venga renderizzato solo sul client
    <ClientOnly fallback={<Skeleton boxSize="8" />}>

      <Tabs.Root key={crypto.randomUUID()} defaultValue={colorMode} variant={variant} size={size} onValueChange={toggleColorMode}
      // 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' | 'purple' | 'pink' | 'accent'
      // colorPalette={'red'}
      >
        <Tabs.List>
          <Tabs.Trigger value="light">
            <HiSun />
          </Tabs.Trigger>
          <Tabs.Trigger value="dark">
            <HiMoon />
          </Tabs.Trigger>
        </Tabs.List>
      </ Tabs.Root>
    </ClientOnly>
  );
};

// Bottone per il cambio di modalità colore con IconButton
export const ColorModeButton = forwardRef<HTMLButtonElement, ColorModeButtonProps>(function ColorModeButton(props, ref) {
  const { toggleColorMode } = useColorMode();

  return (
    // Usa ClientOnly per garantire che il bottone venga renderizzato solo sul client
    <ClientOnly fallback={<Skeleton boxSize="8" />}>
      <IconButton
        onClick={toggleColorMode}
        variant="ghost"
        aria-label="Toggle color mode"
        size="sm"
        ref={ref}
        {...props}
        // Stile personalizzato per l'icona del bottone
        css={{ _icon: { width: "5", height: "5" } }}
      >
        <ColorModeIcon />
      </IconButton>
    </ClientOnly>
  );
});
