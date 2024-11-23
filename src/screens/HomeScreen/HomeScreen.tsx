import React from "react";
import { StatusBar, View } from "react-native";

// import Icon from "../../assets/icons/icon_burger.svg";

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
          {/* <Image source={require("../../assets/image/logo.png")} /> */}

          {/* <Icon width="32px" height="32px" /> */}
        </Header>
      </Container>
    </>
  );
};
