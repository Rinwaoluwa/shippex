import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "@/utils/dp";
import { palette } from "@/config/palette";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: widthPixel(8),
  },
  filterButton: {
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(10),
    borderRadius: widthPixel(8),
    backgroundColor: palette["cyan--light"],
    width: widthPixel(100),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: palette["cyan--light"],
    marginBottom: heightPixel(8),
  },
  selectedButton: {
    borderColor: palette["royal-blue--medium"],
    backgroundColor: palette["white"],
  }
}); 