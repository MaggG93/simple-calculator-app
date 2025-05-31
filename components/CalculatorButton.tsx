import { Colors } from "@/constants/Colors";
import { globalStyles } from "@/styles/global-styles";
import * as Haptics from "expo-haptics";
import { Pressable, Text } from "react-native";

interface Props {
  label: string;
  color?: string;
  blackText?: boolean;
  doubleSize?: boolean;
  onPress: () => void;
}

const CalculatorButton = ({
  label,
  color = Colors.darkGray,
  blackText = false,
  doubleSize = false,
  onPress,
}: Props) => {
  return (
    <Pressable
      style={({ pressed }) => ({
        ...globalStyles.button,
        backgroundColor: color,
        opacity: pressed ? 0.7 : 1,
        width: doubleSize ? 160 : 70,
      })}
      onPress={() => {
        Haptics.selectionAsync();
        onPress();
      }}
    >
      <Text
        style={{
          ...globalStyles.buttonText,
          color: blackText ? "black" : "white",
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default CalculatorButton;
