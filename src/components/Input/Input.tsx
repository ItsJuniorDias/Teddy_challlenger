import React from "react";
import { View } from "react-native";

import { TextInput } from "./styles";
interface InputProps {
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const Input = ({ value, onChange }: InputProps) => {
  return (
    <TextInput
      testID="input_id"
      onChangeText={onChange}
      value={value}
      placeholder="Digite o seu nome"
    />
  );
};
