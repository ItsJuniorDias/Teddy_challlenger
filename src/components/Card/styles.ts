import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
  width: 100%;
  height: 146px;
  background-color: ${() => theme.colors.white};
  shadow-color: ${() => theme.colors.black};
  shadow-offset: {
    width: 0px;
    height: 0px;
  }
  shadow-opacity: 0.1;
  shadow-radius: 4px;
  elevation: 5;
  border-radius: 8px;
  margin-top: 24px;
  align-items: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const TitleBold = styled.Text`
  font-family: ${() => theme.fonts.bold};
  font-size: 18px;
  color: ${() => theme.colors.black};
  font-weight: 700;
  margin-top: 16px;
`;

export const Text = styled.Text`
  font-family: ${() => theme.fonts.regular};
  font-size: 16px;
  color: ${() => theme.colors.black};
  margin-top: 8px;
`;

export const Row = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;

export const Image = styled.Image`
  width: 24px;
  height: 24px;
`;
