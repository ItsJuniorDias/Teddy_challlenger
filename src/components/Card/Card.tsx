import React from "react";
import { TouchableOpacity } from "react-native";
import { IconAdd } from "../../assets/icons";

import { Container, TitleBold, Text, Row, Image } from "./styles";

export interface CardProps {
  id: number;
  onPressAdd: () => void;
  onPressPlus: () => void;
  onPressDelete: (id: number) => void;
  salary: number;
  enterprises: number;
  name: string;
}

export const Card = ({
  id,
  enterprises,
  name,
  salary,
  onPressAdd,
  onPressDelete,
  onPressPlus,
}: CardProps) => {
  return (
    <Container>
      <TitleBold>{name}</TitleBold>
      <Text>Salário: R${salary}</Text>

      <Text>Empresa: R${enterprises}</Text>

      <Row>
        <TouchableOpacity testID="touchable_add_id" onPress={onPressAdd}>
          <IconAdd />
        </TouchableOpacity>

        <TouchableOpacity testID="touchable_plus_id" onPress={onPressPlus}>
          <Image source={require("../../assets/image/plus.png")} />
        </TouchableOpacity>

        <TouchableOpacity
          testID="touchable_delete_id"
          onPress={() => onPressDelete(id)}
        >
          <Image source={require("../../assets/image/delete.png")} />
        </TouchableOpacity>
      </Row>
    </Container>
  );
};
