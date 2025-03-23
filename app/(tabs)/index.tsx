import { useRef, useState, useCallback } from 'react';
import { Box } from '@/components/Box/Box';
import { TextInput } from 'react-native-paper';
import { Checkbox } from 'react-native-paper';
import { AppText } from '@/components/ui/AppText/AppText';
import { Spacing } from '@/components/Spacing/Spacing';
import { AppTextInput } from '@/components/ui/AppTextInput/AppTextInput';
import { useForm } from 'react-hook-form';
import { palette } from '@/config/palette';
import { Pressable, View, FlatList, RefreshControl } from 'react-native';
import { Button } from '@/components/ui/Button/button';
import { heightPixel, widthPixel } from '@/utils/dp';
import IonIcon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ShipmentCard } from '@/components/ui/ShipmentCard/ShipmentCard';
import { BottomSheetModal } from '@gorhom/bottom-sheet';
import { AppBottomSheet } from '@/components/AppBottomSheet/AppBottomSheet';
import { StatusFilter } from '@/components/ui/StatusFilter/StatusFilter';
import { shipmentStatuses, shipmentOrders } from '@/constants/constants';
import { DashboardHeader } from '@/components/DashboardHeader/DashboardHeader';

export default function HomeScreen() {
  const [markAll, setMarkAll] = useState(false);
  const [selectedShipments, setSelectedShipments] = useState<Record<string, boolean>>({});
  const sheetRef = useRef<null | BottomSheetModal>(null);
  const [selectedStatuses, setSelectedStatuses] = useState<string[]>(['Received']);
  const [refreshing, setRefreshing] = useState(false);
  const [shipments, setShipments] = useState(shipmentOrders);
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const {
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      search: ""
    },
    mode: "onSubmit",
  });

  const handleShipmentSelect = (id: string, selected: boolean) => {
    setSelectedShipments(prev => ({
      ...prev,
      [id]: selected
    }));
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 1500);
  }, []);

  const open = () => sheetRef.current?.present();
  const close = () => sheetRef.current?.close();

  const handleFilter = () => {
    // Filter shipments based on selected statuses
    if (selectedStatuses.length === 0) {
      // If no statuses selected, show all shipments
      setShipments(shipmentOrders);
    } else {
      // Case-insensitive filtering of shipments based on selected statuses
      const filteredShipments = shipmentOrders.filter(shipment => 
        selectedStatuses.some(status => 
          shipment.status.toLowerCase() === status.toLowerCase()
        )
      );
      
      // If no shipments match the filter, keep showing all shipments
      setShipments(filteredShipments.length > 0 ? filteredShipments : shipmentOrders);
    }
    
    close();
  };

  const handleToggleCardDetails = (id: string) => {
    setExpandedCards(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const renderShipmentItem = ({ item }:  any) => (
    <ShipmentCard
      trackingNumber={item.trackingNumber}
      origin={item.origin}
      originAddress={item.originAddress}
      destination={item.destination}
      destinationAddress={item.destinationAddress}
      status={item.status}
      showFullDetails={expandedCards[item.id] || false}
      setShowFullDetails={() => handleToggleCardDetails(item.id)}
      isSelected={selectedShipments[item.id] || false}
      onSelectChange={(selected) => handleShipmentSelect(item.id, selected)}
      onPressCall={() => console.log("Call pressed", item.id)}
      onPressWhatsApp={() => console.log("WhatsApp pressed", item.id)}
    />
  );

  return (
    <Box backgroundColor="white" statusBarStyle='dark'>
      <DashboardHeader />

      <Spacing height={10} />

      <AppTextInput
        left={<TextInput.Icon icon="search" color={palette['cyan--medium']} />}
        control={control}
        label=""
        placeholder="Search"
        error={errors.search?.message}
        name="search"
        autoCapitalize="none"
      />

      <Spacing height={10} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Button
          left={<IonIcon name="filter" size={24} color={palette["cyan--dark"]} />}
          title="Filters"
          backgroundColor="cyan--light"
          color="cyan--dark"
          style={{ height: heightPixel(54), width: widthPixel(160) }}
          onPress={open}
        />
        <Button
          left={<MaterialCommunityIcon name="line-scan" size={24} color={palette["white"]} />}
          title="Add scan"
          backgroundColor="royal-blue--medium"
          color="white"
          style={{ height: heightPixel(54), width: widthPixel(160) }}
        />
      </View>

      <Spacing height={24} />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <AppText fontSize={22} fontWeight="700" color='black'>Shipments</AppText>

        <View style={{ flexDirection: "row", gap: 5, alignItems: "center" }}>
          <Checkbox
            status={markAll ? 'checked' : 'unchecked'}
            onPress={() => {
              setMarkAll(!markAll);
              if (!markAll) {
                const allSelected = {};
                shipments.forEach(shipment => {
                  allSelected[shipment.id] = true;
                });
                setSelectedShipments(allSelected);
              } else {
                setSelectedShipments({});
              }
            }}
            color={palette["royal-blue--medium"]}
          />
          <AppText fontSize={18} color='royal-blue--medium'>Mark All</AppText>
        </View>
      </View>

      <Spacing height={10} />

      <FlatList
        data={shipments}
        renderItem={renderShipmentItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        bounces
        alwaysBounceVertical
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[palette["royal-blue--medium"]]}
            tintColor={palette["royal-blue--medium"]}
          />
        }
        contentContainerStyle={{ paddingBottom: heightPixel(100) }}
      />

      <AppBottomSheet showBackdrop snapPoint={["40%"]} ref={sheetRef}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: palette["cyan--light"],
            paddingHorizontal: widthPixel(24),
            paddingBottom: heightPixel(6),
          }}
        >
          <Pressable onPress={close}>
            <AppText fontSize={16} color="royal-blue--medium">Cancel</AppText>
          </Pressable>

          <AppText fontSize={18} fontWeight="700" color="black">Filters</AppText>

          <Pressable onPress={handleFilter}>
            <AppText fontSize={16} color="royal-blue--medium">Done</AppText>
          </Pressable>
        </View>

        <Spacing height={12} />

        <View style={{ paddingHorizontal: widthPixel(24) }}>
          <AppText fontSize={13} color="cyan--dark">SHIPMENT STATUS</AppText>
          <Spacing height={12} />

          <StatusFilter
            options={shipmentStatuses}
            selectedStatuses={selectedStatuses}
            onStatusChange={setSelectedStatuses}
          />
        </View>
      </AppBottomSheet>
    </Box>
  );
}
