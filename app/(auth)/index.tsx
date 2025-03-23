import { Image, Pressable, View } from "react-native";
import { useRouter } from "expo-router";
import { TextInput } from 'react-native-paper';
import { Box } from "@/components/Box/Box";
import { Button } from "@/components/ui/Button/button";
import { heightPixel, widthPixel } from "@/utils/dp";
import landingLogo from "@/assets/images/landing-logo.png";
import { AppBottomSheet } from "@/components/AppBottomSheet/AppBottomSheet";
import { useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { AppText } from "@/components/ui/AppText/AppText";
import { useForm } from "react-hook-form";
import { AppTextInput } from "@/components/ui/AppTextInput/AppTextInput";
import { Spacing } from "@/components/Spacing/Spacing";
import IonIcon from 'react-native-vector-icons/Ionicons';
import { palette } from "@/config/palette";
import { login } from "@/config/schema";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Index() {
    const sheetRef = useRef<null | BottomSheetModal>(null);
    const router = useRouter();

    const {
        control,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        defaultValues: {
            url: 'www.brandimic.com',
            usernameOrPassword: 'ali@brandimic.com',
            password: '23456',
        },
        mode: "onSubmit",
        resolver: yupResolver(login)
    });

    const loginDetails = watch(["usernameOrPassword", "password"]);
    const open = () => sheetRef.current?.present();
    const close = () => sheetRef.current?.close();
    const handleLogin = () => {
        reset();
        close();
        router.push("/(tabs)");
    };

    return (
        <Box backgroundColor="royal-blue--dark" statusBarStyle="light">
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Image source={landingLogo} style={{ width: widthPixel(207.63), objectFit: "contain" }} />
            </View>
            <Button
                title="Login"
                backgroundColor="white"
                color='royal-blue--dark'
                style={{ height: heightPixel(54), marginBottom: heightPixel(32) }}
                onPress={open}
            />
            <AppBottomSheet ref={sheetRef} showBackdrop={false} snapPoint={["95%"]}>

                <View style={{ padding: 18, flex: 1 }}>
                    <Pressable onPress={close} style={{ flexDirection: "row", alignItems: "center" }}>
                        <IonIcon name="chevron-back-outline" size={30} color={palette["royal-blue--medium"]} />
                        <AppText fontSize={16} color="royal-blue--medium">Cancel</AppText>
                    </Pressable>

                    <Spacing height={10} />
                    
                    <AppText fontSize={41} fontWeight="bold" color="black">Login</AppText>
                    
                    <Spacing height={10} />
                    
                    <AppText color="cyan--medium">Please enter your username/email and password to login.</AppText>
                    
                    <Spacing height={20} />
                    
                    <AppTextInput
                        left={<TextInput.Affix text="https://" />}
                        control={control}
                        label="URL"
                        placeholder="URL"
                        error={errors.url?.message}
                        name="url"
                        autoCapitalize="none"

                    />

                    <Spacing height={10} />

                    <AppTextInput
                        control={control}
                        label="Username/Email"
                        placeholder="Username/Email"
                        error={errors.usernameOrPassword?.message}
                        name="usernameOrPassword"
                        autoCapitalize="none"
                    />

                    <Spacing height={10} />

                    <AppTextInput
                        control={control}
                        label="Password"
                        placeholder="Password"
                        error={errors.password?.message}
                        name="password"
                        autoCapitalize="none"
                        secureTextEntry={true}
                    />

                    <Spacing height={50} />

                </View>
                <Button
                    title="Login"
                    backgroundColor="royal-blue--medium"
                    color="white"
                    style={{ height: heightPixel(54), marginBottom: heightPixel(32), marginHorizontal: widthPixel(18) }}
                    onPress={handleLogin}
                    disabled={!loginDetails[0] || !loginDetails[1]}
                />
            </AppBottomSheet>
        </Box>
    )
}