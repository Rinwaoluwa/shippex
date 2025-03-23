import { View } from "react-native";
import { SpacingProps } from "./types";

export function Spacing({ flex, height, width }: SpacingProps) {
  return <View style={{ flex: flex, width: width, height: height }} />;
}