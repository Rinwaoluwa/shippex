import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "@/utils/dp";
import { palette } from "@/config/palette";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F4F2F8",
        borderRadius: widthPixel(12),
        marginVertical: heightPixel(8),
        paddingHorizontal: widthPixel(12),
        paddingVertical: heightPixel(12),
        borderWidth: 1,
        borderColor: palette["cyan--light"],
    },
    selectedContainer: {
        borderColor: palette["royal-blue--medium"],
        borderWidth: 2,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: heightPixel(2),
    },
    leftSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    boxIcon: {
        width: widthPixel(36),
        height: heightPixel(36),
        marginRight: widthPixel(10),
    },
    trackingInfo: {
        justifyContent: "center",
    },
    routeRow: {
        flexDirection: "row",
    },
    statusSection: {
        flexDirection: "row",
        alignItems: "center",
    },
    statusBadge: {
        paddingHorizontal: widthPixel(10),
        paddingVertical: heightPixel(4),
        borderRadius: widthPixel(5),
        marginRight: widthPixel(6),
        borderWidth: 1.5,
        borderColor: palette["white"],
    },
    expandIcon: {
        width: widthPixel(24),
        height: heightPixel(24),
        alignItems: "center",
        justifyContent: "center",
        borderRadius: widthPixel(12),
        backgroundColor: palette["white"],
    },
    detailsSection: {
        marginTop: heightPixel(10),
        paddingTop: heightPixel(2),
        borderTopWidth: 3,
        borderTopColor: palette["white"],
        borderStyle: "dashed"
    },
    locationDetails: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: heightPixel(16),
    },
    arrowContainer: {
        // alignItems: "center",
        justifyContent: "center",
    },
    actionButtons: {
        flexDirection: "row",
        marginTop: heightPixel(8),
        alignSelf: "flex-end",
    },
    callButton: {
        marginRight: widthPixel(8),
        paddingHorizontal: widthPixel(14),
        paddingVertical: heightPixel(10)
    },
    whatsappButton: {
        marginLeft: widthPixel(8),
        paddingHorizontal: widthPixel(14),
        paddingVertical: heightPixel(10)
    },
}); 