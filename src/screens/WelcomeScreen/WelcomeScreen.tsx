import React, { useEffect } from "react";
import { Alert, View } from "react-native";
import { Input, Button } from "../../components";

import { useNavigation } from "@react-navigation/native";

import firebase from "@react-native-firebase/app";
import messaging from "@react-native-firebase/messaging";

import { Container, Title } from "./styles";

export const WelcomeScreen = () => {
  const [text, onChange] = React.useState("");

  const navigation = useNavigation();

  const requestPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    if (enabled) {
      console.log("Notification permission granted.");
      return true;
    } else {
      Alert.alert(
        "Notification Permission Required",
        "Please enable notifications in settings."
      );
      return false;
    }
  };

  async function onMessageReceived(message) {
    console.log(message);
  }

  const setupFCM = async () => {
    const permissionGranted = await requestPermission();

    if (!permissionGranted) {
      return;
    }

    try {
      messaging()
        .registerDeviceForRemoteMessages()
        .then((response) => {
          console.log(response, "RESPONSE");
        })
        .catch((error) => {
          console.log(error);
        });

      const token = await messaging().getToken();

      console.log("FCM Token:", token);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setupFCM();

    console.log("ESTOU AQUI");
  }, []);

  return (
    <Container>
      <Title testID="title_id">Olá, seja bem-vindo!</Title>

      <Input value={text} onChange={onChange} />

      <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
    </Container>
  );
};
