import { StyleProp, ViewStyle } from 'react-native';
import { SvgProps } from 'react-native-svg';

import arrowExpand from "./icons/arrow-expand.svg";
import barcodeScan from "./icons/barcode-scan.svg";
import boxes from "./icons/boxes.svg";
import forwardArrow from "./icons/forward-arrow.svg";
import phone from "./icons/phone.svg";
import profile from "./icons/profile.svg";
import scan from "./icons/scan.svg";
import search from "./icons/search.svg";
import wallet from "./icons/wallet.svg";
import whatsapp from "./icons/whatsapp.svg";
import grabbar from "./icons/grabber.svg";

console.log("arrow expand: ", arrowExpand)
export const ICONS = {
    "arrow-expand": arrowExpand,
    "barcode-scan": barcodeScan,
    boxes,
    "forward-arrow": forwardArrow,
    phone,
    profile,
    scan,
    search,
    wallet,
    whatsapp,
    grabbar
};

export type IconName = keyof typeof ICONS;

export interface IconProps extends SvgProps {
    name: IconName;
    size?: number;
    style?: StyleProp<ViewStyle>;
    iconColor?: string;
    stroke?: string;
    iconOpacity?: number;
    strokeWidth?: number;
    focused?: boolean;
}

export type Props = IconProps;