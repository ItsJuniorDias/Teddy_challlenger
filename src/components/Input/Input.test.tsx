import React from "react";
import { fireEvent, render } from "@testing-library/react-native";

import { Input } from "../Input/Input";

describe("Behavior Input", () => {
  const onChange = jest.fn();

  const screenRender = <Input value="Alexandre" onChange={onChange} />;

  it("should render input", () => {
    const { getByTestId } = render(screenRender);

    const input = getByTestId("input_id");

    fireEvent.changeText(input, "Alexandre Junior");

    expect(onChange).toHaveBeenCalled();
  });
});
