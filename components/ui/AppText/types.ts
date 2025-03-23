import { ReactNode } from "react";
import { TextProps, TextStyle } from "react-native";
import { Palette } from "@/config/palette";

export interface AppTextStyle extends TextProps {
    fontSize?: TextStyle['fontSize'];
    fontWeight?: TextStyle['fontWeight'];
    fontFamily?: "Inter";
    color?: Palette;
    children: ReactNode;
    style?: Omit<TextStyle, 'fontSize'>
}