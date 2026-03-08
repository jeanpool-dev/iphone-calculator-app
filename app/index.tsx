import { globalStyles } from "@/styles/global-styles";
import { Text, View } from "react-native";

const IPhoneCalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      <Text style={globalStyles.mainResult} numberOfLines={1} adjustsFontSizeToFit>50 x 50000000000000000000</Text>
      <Text style={globalStyles.subResult}>2500</Text>
    </View>
  );
};

export default IPhoneCalculatorApp;
