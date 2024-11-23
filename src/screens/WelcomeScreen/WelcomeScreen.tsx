import React from "react";
import { View } from "react-native";

import { Input, Button } from "../../components";

import { Container, Title } from "./styles";

export const WelcomeScreen = () => {
  const [text, onChange] = React.useState("");

  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>

      <Input value={text} onChange={onChange} />

      <Button onPress={() => {}} />
    </Container>
  );
};
