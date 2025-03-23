import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AppText } from '@/components/ui/AppText/AppText';
import { styles } from './styles';
import { StatusFilterButtonProps, StatusFilterProps } from './types';

export const StatusFilterButton = ({
  label,
  isSelected,
  onPress,
  style,
}: StatusFilterButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.filterButton,
        isSelected && styles.selectedButton,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <AppText
        fontSize={14}
        color={isSelected ? "royal-blue--medium" : "cyan--dark"}
        fontWeight={isSelected ? "500" : "normal"}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

export const StatusFilter = ({
  options,
  selectedStatuses,
  onStatusChange,
  style,
  multiSelect = true,
}: StatusFilterProps) => {
  const handlePress = (status: string) => {
    if (multiSelect) {
      // For multi-select mode
      const newSelectedStatuses = selectedStatuses.includes(status)
        ? selectedStatuses.filter(item => item !== status)
        : [...selectedStatuses, status];
      onStatusChange(newSelectedStatuses);
    } else {
      // For single-select mode
      onStatusChange([status]);
    }
  };

  return (
    <View style={[styles.container, style]}>
      {options.map((option) => (
        <StatusFilterButton
          key={option}
          label={option}
          isSelected={selectedStatuses.includes(option)}
          onPress={() => handlePress(option)}
        />
      ))}
    </View>
  );
}; 