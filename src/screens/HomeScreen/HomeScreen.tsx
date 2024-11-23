import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";
import { IconBurger } from "../../assets/icons";
import { Card } from "../../components";

import {
  Container,
  Header,
  Image,
  Title,
  Content,
  TitleBold,
  Button,
  TextButton,
  ContentButton,
} from "./styles";

export const HomeScreen = () => {
  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor="#FFFFFF"
        barStyle="dark-content"
      />
      <Container>
        <Header>
          <Image source={require("../../assets/image/logo.png")} />

          <TouchableOpacity activeOpacity={0.7} onPress={() => {}}>
            <IconBurger />
          </TouchableOpacity>
        </Header>

        <Content>
          <Title>
            <TitleBold>2</TitleBold> clientes encontrados:
          </Title>

          <Card />

          <Card />
        </Content>

        <ContentButton>
          <Button>
            <TextButton>Criar cliente</TextButton>
          </Button>
        </ContentButton>
      </Container>
    </>
  );
};
