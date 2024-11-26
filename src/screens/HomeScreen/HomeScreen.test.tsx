import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { HomeScreen } from "../HomeScreen/HomeScreen";

import { Alert } from "react-native";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

jest.mock("axios", () => ({
  create: jest.fn(),
  delete: jest.fn(),
  post: jest.fn(),
  patch: jest.fn(),
  get: jest.fn(() => ({
    data: {
      clients: [
        {
          id: 1,
          name: "Agnaldo",
          salary: 7000,
          companyValuation: 500000,
          createdAt: "2024-11-24T14:11:48.823Z",
          updatedAt: "2024-11-24T14:11:48.823Z",
        },
        {
          id: 2,
          name: "Antonio",
          salary: 7000,
          companyValuation: 500000,
          createdAt: "2024-11-24T14:11:53.766Z",
          updatedAt: "2024-11-24T14:11:53.766Z",
        },
      ],
    },
  })),
}));

describe("Behavior HomeScreen", () => {
  const screenRender = <HomeScreen />;

  it("should call funtion delete user", () => {
    const { getByTestId, update } = render(screenRender);

    update(screenRender);

    const alertMock = jest.spyOn(Alert, "alert");

    const flatlist = getByTestId("flatlist_id");

    flatlist.props
      .renderItem({
        item: {
          id: 1,
          name: "Agnaldo",
          salary: 7000,
          companyValuation: 500000,
          createdAt: "2024-11-24T14:11:48.823Z",
          updatedAt: "2024-11-24T14:11:48.823Z",
        },
      })
      .props.onPressDelete();

    alertMock?.mock?.calls[0][2][1].onPress();

    expect(alertMock).toHaveBeenCalled();
  });

  it("should call funtion toggleExpand", () => {
    const { getByTestId, debug } = render(screenRender);

    const flatlist = getByTestId("flatlist_id");

    flatlist.props.ListFooterComponent.props.children.props.onPress();

    const input_name = getByTestId("input_name");

    fireEvent.changeText(input_name, "Alexandre Junior");

    const input_currency = getByTestId("input_currency");

    fireEvent.changeText(input_currency, "3000");

    const input_company = getByTestId("input_company");

    fireEvent.changeText(input_company, "5000");

    const button = getByTestId("touchable_id");

    fireEvent.press(button);

    const button_close = getByTestId("button_close");

    fireEvent.press(button_close);

    debug();

    expect(flatlist).toBeTruthy();
  });

  it("should call funtion update user", () => {
    const { getByTestId, update, debug } = render(screenRender);

    update(screenRender);

    const flatlist = getByTestId("flatlist_id");

    flatlist.props
      .renderItem({
        item: {
          id: 1,
          name: "",
          salary: 0,
          companyValuation: 0,
          createdAt: "2024-11-24T14:11:48.823Z",
          updatedAt: "2024-11-24T14:11:48.823Z",
        },
      })
      .props.onPressPlus();

    const button = getByTestId("touchable_id");

    fireEvent.press(button);

    expect(button).toBeTruthy();
  });
});
