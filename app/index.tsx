import ThemeText from "@/components/ThemeText";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const IPhoneCalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <ThemeText variant="h1">50 x 50000000000000000000</ThemeText>
      <ThemeText variant="h2">2500</ThemeText>
    </View>
  );
};

export default IPhoneCalculatorApp;
