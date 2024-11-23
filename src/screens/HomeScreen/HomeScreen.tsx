import React from "react";
import { StatusBar, TouchableOpacity } from "react-native";

import { IconBurger } from "../../assets/icons/IconBurger";

import { Container, Header, Image } from "./styles";

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
      </Container>
    </>
  );
};
