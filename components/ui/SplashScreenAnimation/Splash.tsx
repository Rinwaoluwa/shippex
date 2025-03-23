import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import LottieView from 'lottie-react-native';
import { styles } from './styles';
import SplashAnimation from "@/assets/animations/shippex-splash.json";

interface SplashProps {
    children: React.ReactNode;
}

export default function Splash({ children }: SplashProps) {
    const animation = useRef<LottieView>(null);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    useEffect(() => {
        SplashScreen.hideAsync();
        const timeout = setTimeout(() => {
            setIsAnimationComplete(true);
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    if (isAnimationComplete) {
        return <>{children}</>;
    }

    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <View style={styles.flex}>
                <LottieView
                    ref={animation}
                    autoPlay
                    source={SplashAnimation}
                    style={styles.flex}
                    onAnimationFinish={() => {
                        setIsAnimationComplete(true);
                    }}
                />
            </View>
        </>
    );
}