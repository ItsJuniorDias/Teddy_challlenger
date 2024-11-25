import React, { useEffect, useRef, useState } from "react";
import {
  Alert,
  Animated,
  FlatList,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { IconBurger } from "../../assets/icons";
import { Card } from "../../components";
import Icon from "react-native-vector-icons/MaterialIcons";

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
  HeaderBottomSheet,
  ContentModal,
  TitleBottomSheet,
} from "./styles";
import { theme } from "../../theme/theme";
import axios from "axios";

const baseURL = "https://boasorte.teddybackoffice.com.br";

export const HomeScreen = () => {
  const [data, setData] = useState([]);

  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const toggleExpand = () => {
    const finalValue = expanded ? 0 : 502; // Final height (collapse or expand)

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300, // Animation duration
      useNativeDriver: false, // Height animations require `useNativeDriver: false`
    }).start();

    setExpanded(!expanded);
  };

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
                <Button onPress={() => toggleExpand()}>
                  <TextButton>Criar cliente</TextButton>
                </Button>
              </ContentButton>
            }
            keyExtractor={(item) => item.id}
          />
        </Content>
      </Container>

      <FakeView />

      <Animated.View style={[styles.animatedView, { height: animation }]}>
        <HeaderBottomSheet>
          <View />

          <TouchableOpacity onPress={() => toggleExpand()}>
            <Icon name="close" size={24} color={theme.colors.white} />
          </TouchableOpacity>
        </HeaderBottomSheet>

        <ContentModal>
          <TitleBottomSheet>Criar cliente</TitleBottomSheet>
        </ContentModal>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  animatedView: {
    width: "100%",
    backgroundColor: theme.colors.grayBottom,
    overflow: "hidden",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
