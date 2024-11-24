import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { WelcomeScreen } from "../WelcomeScreen/WelcomeScreen";

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(() => ({
    navigate: jest.fn(),
  })),
}));

describe("Behavior WelcomeScreen", () => {
  const screenRender = <WelcomeScreen />;

  it("should render title", () => {
    const { getByTestId } = render(screenRender);

    const title = getByTestId("title_id");

    expect(title).toBeTruthy();
  });

  it("should render input", () => {
    const { getByTestId } = render(screenRender);

    const input = getByTestId("input_id");

    fireEvent.changeText(input, "Alexandre Junior");

    expect(input).toBeTruthy();
  });

  it("should render button", () => {
    const { getByTestId } = render(screenRender);

    const button = getByTestId("touchable_id");

    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
