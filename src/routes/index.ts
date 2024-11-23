import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { WelcomeScreen } from "../screens";

const RootStack = createNativeStackNavigator({
  initialRouteName: "Welcome",
  screenOptions: {
    headerShown: false,
  },
  screens: {
    Home: HomeScreen,
    Welcome: WelcomeScreen,
  },
});

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export const Navigation = createStaticNavigation(RootStack);
