import { StatusBar } from "expo-status-bar";
import { colorScheme } from "nativewind";
import * as React from "react";
import { View } from "react-native";

import { themes } from "./color-theme";
import { ThemeContext } from "./context";

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = React.useState<"light" | "dark">("light");

  // eslint-disable-next-line no-console
  console.log("ThemeProvider - currentTheme:", currentTheme);

  const toggleTheme = React.useCallback(() => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    setCurrentTheme(newTheme);
    colorScheme.set(newTheme);
  }, [currentTheme]);

  const value = React.useMemo(() => ({
    theme: currentTheme,
    toggleTheme,
  }), [currentTheme, toggleTheme]);

  return (
    <ThemeContext.Provider value={value}>
      <StatusBar style={currentTheme === "dark" ? "light" : "dark"} />
      <View style={themes[currentTheme]} className="flex-1">
        {children}
      </View>
    </ThemeContext.Provider>
  );
}
