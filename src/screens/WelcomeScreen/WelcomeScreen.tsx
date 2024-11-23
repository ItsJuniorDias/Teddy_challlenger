import React from "react";
import { View } from "react-native";

import { Input, Button } from "../../components";

import { Container, Title } from "./styles";

export const WelcomeScreen = () => {
  return (
    <Container>
      <Title>Olá, seja bem-vindo!</Title>

      <Input />

      <Button onPress={() => {}} />
    </Container>
  );
};
