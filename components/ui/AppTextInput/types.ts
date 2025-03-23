import { TextInputProps, TextStyle, ViewStyle } from "react-native";
import { IconName } from "../../../assets/svgs/types";
import { Control } from 'react-hook-form';

export interface AppTextInputProps extends Omit<TextInputProps, 'onBlur' | 'onFocus'> {
    label: string;
    name: string;
    error?: string;
    placeholder?: string;
    left?: any;
    right?: any;
    control: Control<any, any>;
    editable?: boolean;
    onPress?: () => void;
    onPressLeftIcon?: () => void;
    onPressRigthtIcon?: () => void;
    onFocus?: () => void;
    onBlur?: () => void;
    multiline?: boolean;
    numberOfLines?: number;
    secureTextEntry?: boolean;
    style?: TextStyle;
    containerStyle?: ViewStyle;
}