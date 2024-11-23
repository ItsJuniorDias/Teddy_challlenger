interface ThemeProps {
  fonts: {
    regular: string;
    semiBold: string;
    bold: string;
  };
  colors: {
    primaryButton: string;
    white: string;
    grayInput: string;
    black: string;
  };
}

export const theme: ThemeProps = {
  fonts: {
    regular: "InterRegular",
    semiBold: "InterSemiBold",
    bold: "InterBold",
  },
  colors: {
    primaryButton: "#ec6724",
    white: "#ffffff",
    grayInput: "#d9d9d9",
    black: "#000000",
  },
};
