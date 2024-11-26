import React from "react";
import { View } from "react-native";

import { Container, Input, TextInput } from "./styles";
import { theme } from "../../theme/theme";

interface InputProps {
  testID: string;
  title: string;
  textPlaceHolder: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const InputBottomSheet = ({
  testID,
  title,
  textPlaceHolder,
  value,
  onChange,
}: InputProps) => {
  return (
    <Container>
      <TextInput>{title}</TextInput>
      <Input
        testID={testID}
        value={value}
        onChangeText={onChange}
        placeholder={textPlaceHolder}
        placeholderTextColor={theme.colors.white}
      />
    </Container>
  );
};
