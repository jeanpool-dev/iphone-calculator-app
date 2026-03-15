import CalculatorButton from "@/components/CalculatorButton";
import ThemeText from "@/components/ThemeText";
import { Colors } from "@/constants/theme";
import { globalStyles } from "@/styles/global-styles";
import { View } from "react-native";

const IPhoneCalculatorApp = () => {
  return (
    <View style={globalStyles.calculatorContainer}>
      {/* Resultados */}
      <View style={globalStyles.resultContainer}>
        <ThemeText variant="h1">50 x 50</ThemeText>
        <ThemeText variant="h2">2500</ThemeText>
      </View>

      {/* Filas de botones */}
      <View style={globalStyles.row}>
        <CalculatorButton
          blackText
          onPress={() => console.log("C")}
          label="C"
          color={Colors.lightGray}
        />
        <CalculatorButton
          blackText
          onPress={() => console.log("+/-")}
          label="+/-"
          color={Colors.lightGray}
        />
        <CalculatorButton
          blackText
          onPress={() => console.log("del")}
          label="del"
          color={Colors.lightGray}
        />
        <CalculatorButton
          onPress={() => console.log("÷")}
          label="÷"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log("7")}
          label="7"
        />
        <CalculatorButton
          onPress={() => console.log("8")}
          label="8"
        />
        <CalculatorButton
          onPress={() => console.log("9")}
          label="9"
        />
        <CalculatorButton
          onPress={() => console.log("x")}
          label="x"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log("4")}
          label="4"
        />
        <CalculatorButton
          onPress={() => console.log("5")}
          label="5"
        />
        <CalculatorButton
          onPress={() => console.log("6")}
          label="6"
        />
        <CalculatorButton
          onPress={() => console.log("-")}
          label="-"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          onPress={() => console.log("1")}
          label="1"
        />
        <CalculatorButton
          onPress={() => console.log("2")}
          label="2"
        />
        <CalculatorButton
          onPress={() => console.log("3")}
          label="3"
        />
        <CalculatorButton
          onPress={() => console.log("+")}
          label="+"
          color={Colors.orange}
        />
      </View>

      <View style={globalStyles.row}>
        <CalculatorButton
          doubleSize
          onPress={() => console.log("0")}
          label="0"
        />
        <CalculatorButton
          onPress={() => console.log(".")}
          label="."
        />
        <CalculatorButton
          onPress={() => console.log("=")}
          label="="
          color={Colors.orange}
        />
      </View>
    </View>
  );
};

export default IPhoneCalculatorApp;
