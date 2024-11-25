import React from "react";
import { View } from "react-native";

import { Touchable, Title } from "./styles";

interface ButtonProps {
  title: string;
  onPress: () => void;
}

export const Button = ({ title, onPress }: ButtonProps) => {
  return (
    <Touchable testID="touchable_id" onPress={onPress} activeOpacity={0.7}>
      <Title>{title}</Title>
    </Touchable>
  );
};
