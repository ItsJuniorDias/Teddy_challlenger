import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { InputBottomSheet } from "../InputBottomSheet/InputBottomSheet";

describe("Behavior InputBottomSheet", () => {
  const onChange = jest.fn();

  const screenRender = (
    <InputBottomSheet
      title="Nome"
      textPlaceHolder="Digite o nome"
      value="Alexandre Junior"
      onChange={onChange}
    />
  );

  it("should render input", () => {
    const { getByTestId } = render(screenRender);

    const input = getByTestId("input_id");

    fireEvent.changeText(input, "Alexandre Junior");

    expect(onChange).toHaveBeenCalled();
  });
});
