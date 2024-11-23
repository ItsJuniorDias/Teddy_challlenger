import React from "react";
import { View } from "react-native";
import { WelcomeScreen } from "./screens";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme/theme";
import { Navigation } from "./routes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigation />
    </ThemeProvider>
  );
}

export default App;
