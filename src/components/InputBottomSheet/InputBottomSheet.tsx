import React from "react";
import { View } from "react-native";

import { Container, Input, TextInput } from "./styles";
import { theme } from "../../theme/theme";

interface InputProps {
  title: string;
  textPlaceHolder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const InputBottomSheet = ({
  title,
  textPlaceHolder,
  value,
  onChange,
}: InputProps) => {
  return (
    <Container>
      <TextInput>{title}</TextInput>
      <Input
        testID="input_id"
        value={value}
        onChangeText={onChange}
        placeholder={textPlaceHolder}
        placeholderTextColor={theme.colors.white}
      />
    </Container>
  );
};
