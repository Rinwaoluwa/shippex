import React from "react";
import { Image, Pressable, View } from "react-native";
import ShippexLogo from "@/assets/images/shippex-logo.png";
import Avatar from "@/assets/images/avatar.png";
import SimpleLineIcon from 'react-native-vector-icons/SimpleLineIcons';
import { heightPixel, widthPixel } from "@/utils/dp";
import { palette } from "@/config/palette";
import { AppText } from "../ui/AppText/AppText";
import { Spacing } from "../Spacing/Spacing";

export const DashboardHeader = () => (
    <>
        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
            <Image source={Avatar} />
            <Image source={ShippexLogo} />
            <Pressable
                style={{
                    height: heightPixel(40),
                    width: widthPixel(40),
                    borderRadius: widthPixel(20),
                    backgroundColor: palette["cyan--light"],
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                <SimpleLineIcon name="bell" size={24} color={palette["royal-blue--medium"]} />
            </Pressable>
        </View>

        <Spacing height={12} />

        <AppText fontSize={20} color='cyan--dark'>Hello,</AppText>
        <AppText fontSize={28} fontWeight="700" color='black'>Ibrahim Shaker</AppText>
    </>
)