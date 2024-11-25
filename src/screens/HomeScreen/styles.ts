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

export const ContentHeader = styled.View`
  align-items: center;
`;

export const Title = styled.Text`
  font-family: ${() => theme.fonts.regular};
  font-size: 18px;
  color: ${() => theme.colors.black};
`;

export const TitleBold = styled.Text`
  font-family: ${() => theme.fonts.bold};
  font-size: 18px;
  color: ${() => theme.colors.black};
  font-weight: 700;
`;

export const Content = styled.View`
  align-items: center;
  margin-top: 24px;
  padding-left: 24px;
  padding-right: 24px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  height: 48px;
  border-width: 2px;
  border-color: ${() => theme.colors.primaryButton};
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  margin-top: 24px;
`;

export const TextButton = styled.Text`
  font-family: ${() => theme.fonts.bold};
  font-size: 16px;
  color: ${() => theme.colors.primaryButton};
  font-weight: 700;
`;

export const ContentButton = styled.View`
  width: 100%;
  padding-bottom: 64px;
`;

export const FakeView = styled.View`
  height: 96px;
  width: 100%;
  /* background-color: blue; */
`;

export const HeaderBottomSheet = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-right: 32px;
  padding-left: 32px;
  margin-top: 24px;
`;

export const ContentModal = styled.View`
  padding-right: 32px;
  padding-left: 32px;
  background-color: red;
  margin-top: 24px;
`;

export const TitleBottomSheet = styled.Text`
  font-family: ${() => theme.fonts.semiBold};
  font-size: 18px;
  color: ${() => theme.colors.white};
  font-weight: 700;
`;
