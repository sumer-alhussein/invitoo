import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { extendTheme, NativeBaseProvider } from "native-base";

import useCachedResources from "./src/hooks/useCachedResources";
import useColorScheme from "./src/hooks/useColorScheme";
import Navigation from "./src/screens/navigation";

// Screen
import Welcome from "./src/screens/welcome/welcomeScreen";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}
export default function App() {
  const isLoadingComplete = useCachedResources();
  // const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NativeBaseProvider>
        {/* <Navigation colorScheme={colorScheme} /> */}
        <Welcome />
        <StatusBar />
      </NativeBaseProvider>
    );
  }
}
