import React from 'react';
import { ActivityIndicator, TouchableOpacity, View } from 'react-native';
import { ButtonProps } from './types';
import { palette } from '@/config/palette';
import { heightPixel, widthPixel } from '@/utils/dp';
import { AppText } from '../AppText/AppText';

export const Button = ({
  title,
  disabled,
  loading,
  onPress,
  alignSelf,
  style,
  textProps,
  backgroundColor = 'royal-blue--dark',
  color = 'white',
  left,
  right,
  borderRadius = widthPixel(10),
  padding = widthPixel(16),
  paddingHorizontal = widthPixel(24),
  paddingVertical = heightPixel(16),
  ...props
}: ButtonProps) => {

  return (
    <TouchableOpacity onPress={onPress} disabled={disabled || loading}>
      <View
        style={[
          !!backgroundColor ? { backgroundColor: palette[backgroundColor] } : {},
          {
            backgroundColor: palette[backgroundColor],
            padding: widthPixel(padding),
            marginVertical: heightPixel(8),
            opacity: disabled ? 0.6 : 1,
            borderRadius: widthPixel(borderRadius),
            alignItems: "center",
            alignSelf,
            paddingHorizontal: alignSelf ? widthPixel(paddingHorizontal) : 0,
            paddingVertical: alignSelf ? heightPixel(8) : heightPixel(paddingVertical),
          },
          style,
        ]}
        {...props}>
        {loading ? (
          <ActivityIndicator color={palette[color]} />
        ) : (
          <View style={left || right ? { flexDirection: "row", gap: 10 } : {}}>
            {left}
            <AppText
              color={color}
              fontSize={16}
              fontWeight="bold"
              style={[!!color ? { color: palette?.[color] } : {}]}
              {...textProps}
            >
              {title}
            </AppText>
            {right}
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};