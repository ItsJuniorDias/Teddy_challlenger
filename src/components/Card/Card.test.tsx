import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Card } from "../Card/Card";

describe("Behavior Card", () => {
  const onPressAdd = jest.fn();
  const onPressDelete = jest.fn();
  const onPressPlus = jest.fn();

  const screenRender = (
    <Card
      id={1}
      name={"Jose"}
      enterprises={3000}
      salary={5000}
      onPressAdd={onPressAdd}
      onPressDelete={onPressDelete}
      onPressPlus={onPressPlus}
    />
  );

  it("should call function add button", () => {
    const { getByTestId } = render(screenRender);

    const button = getByTestId("touchable_add_id");

    fireEvent.press(button);

    expect(onPressAdd).toHaveBeenCalled();
  });

  it("should call function plus button", () => {
    const { getByTestId } = render(screenRender);

    const button = getByTestId("touchable_plus_id");

    fireEvent.press(button);

    expect(onPressPlus).toHaveBeenCalled();
  });

  it("should call function delete button", () => {
    const { getByTestId } = render(screenRender);

    const button = getByTestId("touchable_delete_id");

    fireEvent.press(button);

    expect(onPressDelete).toHaveBeenCalled();
  });
});
