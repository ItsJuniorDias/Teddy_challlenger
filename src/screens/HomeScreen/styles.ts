import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${() => theme.colors.grayBackground};
`;

export const Header = styled.View`
  width: 100%;
  height: 112px;
  background-color: ${() => theme.colors.white};
  shadow-color: ${() => theme.colors.black};
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  elevation: 5;
  justify-content: center;
  align-items: center;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 32px;
  flex-direction: row;
  justify-content: space-between;
`;

export const Image = styled.Image`
  width: 70px;
  height: 34px;
  margin-top: 16px;
`;
