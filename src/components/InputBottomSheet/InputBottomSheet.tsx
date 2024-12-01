import React from "react";
import { View } from "react-native";

import { Container, Input, TextInput } from "./styles";
import { theme } from "../../theme/theme";

interface InputProps {
  testID: string;
  title: string;
  textPlaceHolder: string;
  value: string | undefined;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const InputBottomSheet = ({
  testID,
  title,
  textPlaceHolder,
  value,
  onChange,
}: InputProps) => {
  console.log(value, "VALUE COMPONENTS");

  return (
    <Container>
      <TextInput>{title}</TextInput>
      <Input
        testID={testID}
        value={value}
        defaultValue={value}
        onChangeText={(item) => onChange(item)}
        placeholder={textPlaceHolder}
        placeholderTextColor={theme.colors.white}
      />
    </Container>
  );
};
