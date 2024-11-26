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
import { Button, Card, InputBottomSheet } from "../../components";
import Icon from "react-native-vector-icons/MaterialIcons";
import { theme } from "../../theme/theme";
import axios from "axios";

import {
  Container,
  Header,
  Image,
  Title,
  Content,
  TitleBold,
  ButtonOutline,
  TextButton,
  ContentButton,
  ContentHeader,
  FakeView,
  HeaderBottomSheet,
  ContentModal,
  TitleBottomSheet,
} from "./styles";

const baseURL = "https://boasorte.teddybackoffice.com.br";

interface ValueProps {
  id?: number;
  name?: string;
  currency?: number;
  companyValue?: number;
}

export const HomeScreen = () => {
  const [data, setData] = useState([]);
  const [expanded, setExpanded] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  const [value, setValue] = useState<ValueProps>({
    id: 0,
    name: "",
    currency: 0,
    companyValue: 0,
  });

  const onChangeName = (item: string) => {
    setValue((prevState) => ({
      ...prevState,
      name: item,
    }));
  };

  const onChangeCurrency = (item: string) => {
    setValue((prevState) => ({
      ...prevState,
      currency: Number(item),
    }));
  };

  const onChangeCompany = (item: string) => {
    setValue((prevState) => ({
      ...prevState,
      companyValue: Number(item),
    }));
  };

  const updateUser = async (id: number) => {
    await axios.patch(`${baseURL}/users/${id}`, value);

    toggleExpand({});

    fetch();
  };

  const createUser = async () => {
    await axios.post(`${baseURL}/users`, value);

    toggleExpand({});

    fetch();
  };

  const toggleExpand = ({ id, name, currency, companyValue }: ValueProps) => {
    if (name !== "" && currency !== 0 && companyValue !== 0) {
      setValue(() => ({
        id: id,
        name: name,
        currency: currency,
        companyValue: companyValue,
      }));
    }

    const finalValue = expanded ? 0 : 502;

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
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
                onPressPlus={() => {
                  toggleExpand({
                    id: item.id,
                    name: item.name,
                    currency: item.salary,
                    companyValue: item.companyValuation,
                  });
                }}
              />
            )}
            ListFooterComponent={
              <ContentButton>
                <ButtonOutline onPress={() => toggleExpand({})}>
                  <TextButton>Criar cliente</TextButton>
                </ButtonOutline>
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

          <TouchableOpacity
            testID="button_close"
            onPress={() => toggleExpand({})}
          >
            <Icon name="close" size={24} color={theme.colors.white} />
          </TouchableOpacity>
        </HeaderBottomSheet>

        <ContentModal>
          <TitleBottomSheet>Criar cliente</TitleBottomSheet>

          <InputBottomSheet
            testID="input_name"
            title="Nome"
            textPlaceHolder="Digite o nome:"
            onChange={(item) => onChangeName(item)}
            value={value.name}
          />
          <InputBottomSheet
            testID="input_currency"
            title="Salário"
            textPlaceHolder="Digite o salário:"
            onChange={(item) => onChangeCurrency(item)}
            value={value.currency}
          />
          <InputBottomSheet
            testID="input_company"
            title="Valor da empresa"
            textPlaceHolder="Digite o valor da empresa:"
            onChange={(item) => onChangeCompany(item)}
            value={value.companyValue}
          />

          <Button
            title="Criar cliente"
            onPress={() => {
              if (value.name === "") {
                createUser();
              } else {
                updateUser(value.id);
              }
            }}
          />
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
