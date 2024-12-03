import axios from "axios";
import React, { useRef, useState } from "react";
import { Alert, Animated, View } from "react-native";

const baseURL = "https://boasorte.teddybackoffice.com.br";

interface ValueProps {
  id?: number;
  name?: string;
  currency?: number;
  companyValue?: number;
}

export const useHomeScreen = () => {
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

  const fetch = async () => {
    try {
      const { data } = await axios.get(`${baseURL}/users`);

      setData(data.clients);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleExpand = ({ id, name, currency, companyValue }: ValueProps) => {
    const finalValue = expanded ? 0 : 502;

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const createUser = async () => {
    try {
      await axios.post(`${baseURL}/users`, {
        name: value.name,
        salary: value.currency,
        companyValuation: value.companyValue,
      });
    } catch (error) {
      console.log(error);
    }

    toggleExpand({});

    fetch();
  };

  const removeItem = async (id: number) => {
    await axios.delete(`${baseURL}/users/${id}`);

    fetch();
  };

  console.log(data, "data");

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

  return {
    createUser,
    fetch,
    data,
    animation,
    value,
    onChangeName,
    onChangeCompany,
    onChangeCurrency,
    alertItem,
    toggleExpand,
  };
};
