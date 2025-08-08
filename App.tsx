import "@/global.css";
import { Text, View } from "react-native";

import { ThemeProvider, ThemeToggle } from "@/lib/theme";

export default function App() {
  return (
    <ThemeProvider>
      <View className="flex-1 items-center justify-center bg-background">
        <Text className="text-text text-2xl font-bold mb-4">Hello Toggle</Text>
        <Text className="text-xl font-bold text-blue-500">
          Welcome to Nativewind!
        </Text>
        <ThemeToggle />
      </View>
    </ThemeProvider>
  );
}
