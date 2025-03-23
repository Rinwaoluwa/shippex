import { forwardRef, ReactNode } from "react";
import { Text, TextStyle, TextProps } from "react-native";
import { palette } from "@/config/palette";
import { AppTextStyle } from "./types";
import { heightPixel } from "@/utils/dp";



export function AppText({ fontSize, fontFamily = "Inter", children, color, fontWeight, style }: AppTextStyle) {
  return (
    <Text
      style={[
        {
          fontSize: heightPixel(fontSize as number),
          fontFamily: fontFamily,
          color: color ? palette[color] : palette['royal-blue--medium'],
          fontWeight: fontWeight,
          ...style
        },
      ]}
    >
      {children}
    </Text>
  );
}