import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
  flex: 1;
  background-color: ${() => theme.colors.white};
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Title = styled.Text`
  font-family: ${() => theme.fonts.regular};
  font-size: 32px;
  color: ${() => theme.colors.black};
`;
