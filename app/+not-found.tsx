import { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { View, Text } from "react-native";
import LottieView from 'lottie-react-native';
import notfound from "@/assets/animations/notfound.json";
import { wp, hp } from "@/utils/dp";
import { Button } from '@/components/ui/Button/button';
import { palette } from "@/config/palette";

export default function NotFoundScreen() {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {
      e.preventDefault();
      router.push("/(tabs)")
    });
  }, []);


  return (
    <View style={{ backgroundColor: palette["white"], flex: 1 }}>
      <View style={{flex: 1, justifyContent: "center", alignItems: "center" }}>
        <LottieView
          autoPlay
          style={{
            width: wp(70),
            height: hp(40),
          }}
          source={notfound}
        />
        <Text className="font-semibold text-xl">Oops, it’s not you, it’s us.</Text>
        <Text className="text-lg">This page is playing hard to get. Let’s take you back</Text>
      </View>
      <Button title="Go Home" backgroundColor="royal-blue--dark" onPress={() => router.replace("/(tabs)")} />
    </View>
  );
}
