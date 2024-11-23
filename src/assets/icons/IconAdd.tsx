import { SvgXml, XmlProps } from "react-native-svg";
export type IconProps = Omit<XmlProps, "xml">;

export function IconAdd(props: IconProps) {
  const xml = `
  <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <rect width="17" height="17" fill="url(#pattern0_2086_710)"/>
  <defs>
  <pattern id="pattern0_2086_710" patternContentUnits="objectBoundingBox" width="1" height="1">
  <use xlink:href="#image0_2086_710" transform="translate(-0.346535 -0.346535) scale(0.00529084)"/>
  </pattern>
  <image id="image0_2086_710" width="320" height="320" xlink:href="data:image/png;base64,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IMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIgECLCKyAAEEeiVAgL0may4EECgSIMAiIgsQQKBXAgTYa7LmQgCBIoH/Bb5RSl/tIu6EAAAAAElFTkSuQmCC"/>
  </defs>
  </svg>
`;
  return <SvgXml {...props} xml={xml} />;
}
