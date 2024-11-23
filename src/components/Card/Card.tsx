import React from "react";
import { TouchableOpacity, View } from "react-native";
import { IconAdd } from "../../assets/icons";

import { Container, TitleBold, Text, Row, Image } from "./styles";

export const Card = () => {
  return (
    <Container>
      <TitleBold>Eduardo</TitleBold>
      <Text>Salário: R$3.500,00</Text>

      <Text>Empresa: R$120.000,00</Text>

      <Row>
        <TouchableOpacity onPress={() => {}}>
          <IconAdd />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image source={require("../../assets/image/plus.png")} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {}}>
          <Image source={require("../../assets/image/delete.png")} />
        </TouchableOpacity>
      </Row>
    </Container>
  );
};
