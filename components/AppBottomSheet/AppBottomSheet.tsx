import React, { forwardRef, ReactNode, useCallback, useMemo } from 'react';
import Octicon from 'react-native-vector-icons/Octicons';
import { ViewStyle } from 'react-native';
import {
    BottomSheetModal,
    BottomSheetView,
    BottomSheetBackdrop,
} from '@gorhom/bottom-sheet';
import { Pressable } from 'react-native-gesture-handler';
import { heightPixel } from '@/utils/dp';
import { styles } from './styles';

interface Props {
    children: ReactNode;
    style?: ViewStyle;
    showBackdrop: boolean;
    snapPoint: Array<string>;
}

type Ref = BottomSheetModal;

export const AppBottomSheet = forwardRef<Ref, Props>(({ children, style = { flex: 1 }, showBackdrop, snapPoint=["100%"] }, ref) => {
    const snapPoints = useMemo(() => snapPoint, []);

    const handlePresentModalPress = useCallback(() => {
        ref?.current?.close();
    }, []);

    const renderBackdrop = (props: any) => (
        showBackdrop && <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />
    )
    return (
        <BottomSheetModal
            ref={ref}
            
            handleComponent={() => (
                <Pressable style={styles.handleBarButton}>
                    <Octicon name="horizontal-rule" size={40} color="#A7A3B3" />
                </Pressable>
            )}
            index={0}
            snapPoints={snapPoint}
            backdropComponent={renderBackdrop}
            handleIndicatorStyle={{ display: 'none' }}
            style={{ backgroundColor: "#ffffff", borderRadius: heightPixel(20) }}
        >
            
            <BottomSheetView style={{ ...style }}>
                {children}
            </BottomSheetView>
        </BottomSheetModal>
    )
})