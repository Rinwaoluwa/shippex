import { StyleProp, ViewStyle } from "react-native";

export interface ShipmentCardProps {
  trackingNumber: string;
  origin: string;
  originAddress: string;
  destination: string;
  destinationAddress: string;
  status?: 'RECEIVED' | 'PENDING' | 'DELIVERED' | 'IN TRANSIT';
  isSelected?: boolean;
  onSelectChange?: (selected: boolean) => void;
  onPressCard?: () => void;
  onPressCall?: () => void;
  onPressWhatsApp?: () => void;
  style?: StyleProp<ViewStyle>;
  showFullDetails: boolean;
  setShowFullDetails: () => void;
} 