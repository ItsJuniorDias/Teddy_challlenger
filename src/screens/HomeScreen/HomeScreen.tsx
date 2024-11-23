import React, { useEffect, useState } from "react";
import { FlatList, StatusBar, TouchableOpacity } from "react-native";
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
  ContentHeader,
  FakeView,
} from "./styles";
import api from "../../services/api";
import { CardProps } from "../../components/Card/Card";

export const HomeScreen = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const response = await api.get("/users");

      setData(response.data.clients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  console.log(data, "DATA");

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
          <FlatList
            data={data}
            ListHeaderComponent={
              <ContentHeader>
                <Title>
                  <TitleBold>{data.length}</TitleBold> clientes encontrados:
                </Title>
              </ContentHeader>
            }
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Card
                name={item.name}
                enterprises={item.companyValuation}
                salary={item.salary}
                onPressAdd={() => {}}
                onPressDelete={() => {}}
                onPressPlus={() => {}}
              />
            )}
            ListFooterComponent={
              <ContentButton>
                <Button>
                  <TextButton>Criar cliente</TextButton>
                </Button>
              </ContentButton>
            }
            keyExtractor={(item) => item.id}
          />
        </Content>
      </Container>

      <FakeView />
    </>
  );
};
