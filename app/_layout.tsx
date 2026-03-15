import { globalStyles } from "@/styles/global-styles";
import { useFonts } from "expo-font";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { useEffect } from "react";
import * as SystemUI from "expo-system-ui";
import { SafeAreaProvider } from "react-native-safe-area-context";

const RootLayout = () => {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    SystemUI.setBackgroundColorAsync("black");
  }, []);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <View style={globalStyles.background}>
        <Slot />
        <StatusBar style="dark" />
      </View>
    </SafeAreaProvider>
  );
};

export default RootLayout;