import { StyleProp, ViewStyle } from "react-native";

export interface StatusFilterButtonProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
}

export interface StatusFilterProps {
  options: string[];
  selectedStatuses: string[];
  onStatusChange: (selectedStatuses: string[]) => void;
  style?: StyleProp<ViewStyle>;
  multiSelect?: boolean;
} 