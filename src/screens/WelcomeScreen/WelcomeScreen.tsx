import React from "react";
import { View } from "react-native";

import { Input, Button } from "../../components";

import { Container, Title } from "./styles";
import { useNavigation } from "@react-navigation/native";

export const WelcomeScreen = () => {
  const [text, onChange] = React.useState("");

  const navigation = useNavigation();

  return (
    <Container>
      <Title testID="title_id">Olá, seja bem-vindo!</Title>

      <Input value={text} onChange={onChange} />

      <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
};
