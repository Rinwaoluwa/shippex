import React from "react";
import { SafeAreaView, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import { styles } from "./styles";
import { BoxProps } from "./types";
import { palette } from "@/config/palette";


export const Box = ({ backgroundColor, statusBarStyle ="dark", children }: BoxProps) => {
    return (
        <>
            <StatusBar style={statusBarStyle}  />
            <View
                style={[styles.container, styles.flex, { backgroundColor: palette[backgroundColor ?? "white"] }]}
            >
                <SafeAreaView style={styles.flex}>
                    {children}
                </SafeAreaView>
            </View>
        </>
    );
};
