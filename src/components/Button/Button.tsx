import React from "react";
import { View } from "react-native";

import { Touchable, Title } from "./styles";

interface ButtonProps {
  onPress: () => void;
}

export const Button = ({ onPress }: ButtonProps) => {
  return (
    <Touchable testID="touchable_id" onPress={onPress} activeOpacity={0.7}>
      <Title>Entrar</Title>
    </Touchable>
  );
};
