import React from 'react';
import { View, Image, TouchableOpacity, Pressable } from 'react-native';
import { Checkbox } from 'react-native-paper';
import { AppText } from '@/components/ui/AppText/AppText';
import { Button } from '@/components/ui/Button/button';
import { palette } from '@/config/palette';
import { styles } from './styles';
import { ShipmentCardProps } from './types';
import boxIcon from '@/assets/images/box.png';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';

export const ShipmentCard = ({
    trackingNumber,
    origin,
    originAddress,
    destination,
    destinationAddress,
    status = 'RECEIVED',
    isSelected = false,
    showFullDetails = false,
    setShowFullDetails,
    onSelectChange,
    onPressCard,
    onPressCall,
    onPressWhatsApp,
    style,
}: ShipmentCardProps) => {
    // Handler to toggle details and prevent checkbox trigger
    const handleExpandPress = (e) => {
        e.stopPropagation();
        setShowFullDetails();
    };
    
    // Prevent selection change when pressing the card
    const handleCardPress = () => {
        setShowFullDetails();
        if (onPressCard) onPressCard();
    };
    
    // Make checkbox interaction isolated
    const handleCheckboxPress = (e) => {
        e.stopPropagation();
        if (onSelectChange) onSelectChange(!isSelected);
    };

    return (
        <TouchableOpacity
            style={[styles.container, isSelected && styles.selectedContainer, style]}
            onPress={handleCardPress}
            activeOpacity={0.9}
        >
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <View style={[styles.leftSection, { gap: 4 }]}>
                        <Checkbox
                            status={isSelected ? 'checked' : 'unchecked'}
                            onPress={handleCheckboxPress}
                            color={palette["royal-blue--medium"]}
                        />
                        <Image source={boxIcon} style={styles.boxIcon} />
                    </View>

                    <View style={styles.trackingInfo}>
                        <AppText color="cyan--dark">
                            AWB
                        </AppText>
                        <AppText fontSize={17} color="black" fontWeight="700">
                            {trackingNumber}
                        </AppText>
                        <View style={styles.routeRow}>
                            <AppText color="cyan--dark">
                                {origin}
                            </AppText>
                            <AppText color="royal-blue--dark">
                                {' → '}
                            </AppText>
                            <AppText color="cyan--dark">
                                {destination}
                            </AppText>
                        </View>
                    </View>
                </View>

                <View style={styles.statusSection}>
                    <View style={[
                        styles.statusBadge,
                        {
                            backgroundColor: status.toLowerCase() === "received" ? palette["royal-blue--light"] :
                                status.toLowerCase() === "lost" ? palette["peach"] :
                                    status.toLowerCase() === "delivered" ? palette["green--light"] :
                                        status.toLowerCase() === "canceled" ? palette["cyan--light"] : palette["yellow"]
                        }
                    ]}>
                        <AppText
                            color={
                                status.toLowerCase() === "received" ? "royal-blue--dark" :
                                    status.toLowerCase() === "lost" ? "red" :
                                        status.toLowerCase() === "delivered" ? "green--dark" :
                                            status.toLowerCase() === "canceled" ? "cyan--dark" : "orange" as any
                            }
                            fontWeight="500"
                        >
                            {status.toUpperCase()}
                        </AppText>
                    </View>
                    <Pressable 
                        style={[styles.expandIcon, showFullDetails && { backgroundColor: palette["royal-blue--medium"] }]}
                        onPress={handleExpandPress}
                    >
                        <MaterialCommunityIcon 
                            name={showFullDetails ? "arrow-collapse" : "arrow-expand"} 
                            size={16} 
                            color={palette[showFullDetails ? "white" : "royal-blue--medium"]} 
                        />
                    </Pressable>
                </View>
            </View>

            {/* Details section */}
            {showFullDetails && (
                <View style={styles.detailsSection}>
                    <View style={styles.locationDetails}>
                        <View>
                            <AppText fontSize={12} color="royal-blue--medium">
                                Origin
                            </AppText>
                            <AppText fontSize={16} color="black" fontWeight="500">
                                {origin}
                            </AppText>
                            <AppText fontSize={12} color="cyan--dark">
                                {originAddress}
                            </AppText>
                        </View>

                        <View style={styles.arrowContainer}>
                            <MaterialCommunityIcon name="arrow-right" size={24} color={palette["royal-blue--medium"]} />
                        </View>

                        <View>
                            <AppText fontSize={12} color="royal-blue--medium">
                                Destination
                            </AppText>
                            <AppText fontSize={16} color="black" fontWeight="500">
                                {destination}
                            </AppText>
                            <AppText fontSize={12} color="cyan--dark">
                                {destinationAddress}
                            </AppText>
                        </View>
                    </View>

                    <View style={styles.actionButtons}>
                        <Button
                            title="Call"
                            backgroundColor="royal-blue--medium"
                            color="white"
                            style={styles.callButton}
                            onPress={onPressCall}
                            left={<MaterialCommunityIcon name="phone" size={24} color={palette["white"]} />}
                        />
                        <Button
                            title="WhatsApp"
                            backgroundColor="green--medium"
                            color="white"
                            style={styles.whatsappButton}
                            onPress={onPressWhatsApp}
                            left={<MaterialCommunityIcon name="whatsapp" size={24} color={palette["white"]} />}
                        />
                    </View>
                </View>
            )}
        </TouchableOpacity>
    );
}; 