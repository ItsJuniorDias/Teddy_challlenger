import React, { useEffect, useState } from "react";
import { Alert, FlatList, StatusBar, TouchableOpacity } from "react-native";
import { IconBurger } from "../../assets/icons";
import { Card } from "../../components";
import api from "../../services/api";

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
import { theme } from "../../theme/theme";
import axios from "axios";

const baseURL = "https://boasorte.teddybackoffice.com.br";

export const HomeScreen = () => {
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/users`);

      setData(data.clients);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  const removeItem = async (id: number) => {
    await axios.delete(`${baseURL}/users/${id}`);

    fetch();
  };

  const alertItem = (id: number) => {
    Alert.alert(
      "Excluir cliente:",
      "Tem certeza que deseja excluir o cliente Eduardo?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Excluir cliente", onPress: () => removeItem(id) },
      ]
    );
  };

  return (
    <>
      <StatusBar
        animated={true}
        backgroundColor={theme.colors.white}
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
            testID="flatlist_id"
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
                id={item.id}
                name={item.name}
                enterprises={item.companyValuation}
                salary={item.salary}
                onPressAdd={() => {}}
                onPressDelete={(id) => alertItem(id)}
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
