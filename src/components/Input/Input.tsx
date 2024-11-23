import React from "react";
import { View } from "react-native";

import { TextInput } from "./styles";

export const Input = () => {
  const [text, onChange] = React.useState("");

  return (
    <TextInput
      onChangeText={onChange}
      value={text}
      placeholder="Digite o seu nome"
    />
  );
};
