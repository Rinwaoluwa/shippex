import { ViewProps } from "react-native";
import { Palette } from "../../config/palette";
import { ReactNode } from "react";

export interface BoxProps extends ViewProps {
    children: ReactNode;
    backgroundColor?: Palette;
    statusBarStyle?: "auto" | "light" | "dark" | "inverted";
}