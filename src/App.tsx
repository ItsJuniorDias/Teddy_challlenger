import React from "react";
import { View } from "react-native";
import { WelcomeScreen } from "./screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <WelcomeScreen />
    </ThemeProvider>
  );
}

export default App;
