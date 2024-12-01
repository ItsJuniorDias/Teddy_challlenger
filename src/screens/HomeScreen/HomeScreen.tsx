import React, { useEffect } from "react";
import {
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

import { useHomeScreen } from "../../hooks";

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

export const HomeScreen = () => {
  const {
    data,
    value,
    alertItem,
    createUser,
    animation,
    fetch,
    onChangeCompany,
    onChangeCurrency,
    onChangeName,
    toggleExpand,
    updateItem,
    edit,
    setEdit,
  } = useHomeScreen();

  useEffect(() => {
    fetch();
  }, []);

  console.log(value, "VALUE");

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
                  setEdit(false);

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
                <ButtonOutline
                  onPress={() => {
                    setEdit(true);
                    toggleExpand({});
                  }}
                >
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
              console.log(edit, "EDIT");

              if (edit) {
                createUser();
              } else {
                updateItem(value.id);
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
