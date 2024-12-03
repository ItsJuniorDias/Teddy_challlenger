import axios from "axios";
import React, { useRef, useState } from "react";
import { Alert, Animated } from "react-native";

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
  const [edit, setEdit] = useState(false);

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
      name: item ?? "",
    }));
  };

  const onChangeCurrency = (item: number) => {
    setValue((prevState) => ({
      ...prevState,
      currency: item ?? 0,
    }));
  };

  const onChangeCompany = (item: number) => {
    setValue((prevState) => ({
      ...prevState,
      companyValue: item ?? 0,
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
    if (name !== "" && currency !== 0 && companyValue !== 0) {
      setValue((prevState) => ({
        ...prevState,
        id: id,
      }));

      onChangeName(name);
      onChangeCompany(companyValue);
      onChangeCurrency(currency);
    }

    const finalValue = expanded ? 0 : 502;

    Animated.timing(animation, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false,
    }).start();

    setExpanded(!expanded);
  };

  const createUser = async () => {
    console.log(value, "CREATE USER");

    try {
      await axios.post(`${baseURL}/users`, {
        name: value.name,
        salary: Number(value.currency),
        companyValuation: Number(value.companyValue),
      });
    } catch (error) {
      console.log(error);
    }

    toggleExpand({});

    fetch();
  };

  const removeItem = async (id: number) => {
    try {
      await axios.delete(`${baseURL}/users/${id}`);
    } catch (error) {
      console.log(error);
    }

    fetch();
  };

  const updateItem = async (id: number) => {
    console.log(
      {
        id,
        name: value.name,
        salary: value.currency,
        companyValuation: value.companyValue,
      },
      "PROPS"
    );

    try {
      const response = await axios.patch(`${baseURL}/users/${id}`, {
        name: value.name,
        salary: value.currency,
        companyValuation: value.companyValue,
      });

      console.log(response, "RESPONSE");
    } catch (error) {
      console.log(error, "ERRR");
    }

    toggleExpand({});

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
    updateItem,
    edit,
    setEdit,
  };
};
