import styled from "styled-components/native";
import { theme } from "../../theme/theme";

export const TextInput = styled.TextInput`
  width: 100%;
  height: 60px;
  margin-top: 24px;
  font-size: 24px;
  padding: 16px;
  border-color: ${() => theme.colors.grayInput};
  border-width: 2px;
  border-radius: 8px;
`;
