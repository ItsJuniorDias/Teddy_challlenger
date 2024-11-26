import React from "react";
import { render } from "@testing-library/react-native";

import { HomeScreen } from "../HomeScreen/HomeScreen";

import { Alert } from "react-native";

jest.mock("react-native-vector-icons/MaterialIcons", () => "Icon");

jest.mock("axios", () => ({
  create: jest.fn(),
  delete: jest.fn(),
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
});
