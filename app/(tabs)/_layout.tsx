import { Tabs } from 'expo-router';
import React from 'react';

import { useColorScheme } from '@/hooks/useColorScheme';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { palette } from '@/config/palette';
import { heightPixel } from '@/utils/dp';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: palette["royal-blue--medium"],
        headerShown: false,
        tabBarStyle: { height: heightPixel(70) }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Shippments',
          tabBarIcon: ({ color }) => <MaterialCommunityIcon name="package-variant-closed" color={color} size={31} />,
        }}
      />
      <Tabs.Screen
        name="scan"
        options={{
          title: 'Scan',
          tabBarIcon: ({ color }) => <MaterialCommunityIcon name="barcode-scan" color={color} size={31} />,
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Wallet',
          tabBarIcon: ({ color }) => <FontAwesome6 name="wallet" color={color} size={31} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <MaterialCommunityIcon name="account-circle-outline" color={color} size={31} />,
        }}
      />
    </Tabs>
  );
}
