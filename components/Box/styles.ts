import { StyleSheet } from "react-native";
import { palette } from "../../config/palette";
import { heightPixel, widthPixel } from "@/utils/dp";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: palette['cyan--medium'],
        paddingTop: heightPixel(40),
        paddingBottom: heightPixel(10),
        paddingHorizontal: widthPixel(20)
    },
    flex: {
        flex: 1,
    }
});