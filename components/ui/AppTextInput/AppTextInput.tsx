import React from 'react';
import { Controller } from 'react-hook-form';
import {
    View
} from 'react-native';
import { TextInput as RNPaperTextInput } from 'react-native-paper';


import { AppText } from '../AppText/AppText';
import { styles } from './styles';
import { AppTextInputProps } from './types';
import { palette } from '@/config/palette';



export const AppTextInput = ({
    error,
    onBlur: pureOnBlur,
    onFocus,
    ...props
}: AppTextInputProps) => {

    return (
        <View style={[styles.textInputContainer]}>
            <Controller
                control={props.control}
                render={({ field: { onChange, onBlur, value } }) => (
                    <RNPaperTextInput
                        mode="outlined"
                        value={value}
                        onChangeText={onChange}
                        onBlur={() => (pureOnBlur ? pureOnBlur() : onBlur())}
                        outlineColor={error ? palette["red"] : "#F4F2F8" }
                        textColor={palette["royal-blue--medium"]}
                        error={!!error}
                        onFocus={() => onFocus?.()}
                        autoCapitalize="none"
                        activeOutlineColor={palette["royal-blue--medium"]}
                        editable={props?.editable}
                        style={[props.containerStyle] as any}
                        theme={{ colors: { background: "#F4F2F8", disabled: "#EAE7F2" } }}
                        onPressIn={() => props.onPress?.()}
                        {...props}
                    />
                )}
                name={props.name}
            />
            {error ? <AppText fontSize={12} color={palette["red"]}>{error}</AppText> : null}
        </View>
    );
};
