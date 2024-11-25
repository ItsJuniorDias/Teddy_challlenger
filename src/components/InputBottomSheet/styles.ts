import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const Container = styled.View`
  margin-top: 32px;
`;

export const Input = styled.TextInput`
  width: 100%;
  height: 48px;
  border-color: ${() => theme.colors.white};
  border-width: 2px;
  border-radius: 16px;
  font-size: 16px;
  padding: 16px;
  font-weight: 500;
  color: ${() => theme.colors.white};
  margin-top: 8px;
`;

export const TextInput = styled.Text`
  font-family: ${() => theme.fonts.semiBold};
  font-size: 14px;
  color: ${() => theme.colors.white};
  font-weight: 700;
`;
