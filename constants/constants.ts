export const shipmentStatuses = [
    'Received',
    'Putaway',
    'Delivered',
    'Canceled',
    'Rejected',
    'Lost',
    'On Hold'
];

export const shipmentOrders = [
    {
        id: '41785691423',
        trackingNumber: '41785691423',
        origin: 'Cairo',
        originAddress: 'Dokki, 22 Nile St.',
        destination: 'Alexandria',
        destinationAddress: 'Smoha, 22 max St.',
        status: 'RECEIVED'
    },
    {
        id: '41785691424',
        trackingNumber: '41785691424',
        origin: 'Giza',
        originAddress: 'Haram, 15 Sphinx Rd.',
        destination: 'Hurghada',
        destinationAddress: 'El Dahar, 8 Beach St.',
        status: 'DELIVERED'
    },
    {
        id: '41785691425',
        trackingNumber: '41785691425',
        origin: 'Luxor',
        originAddress: 'East Bank, 5 Temple Rd.',
        destination: 'Aswan',
        destinationAddress: 'Elephantine, 12 Nile View',
        status: 'PENDING'
    },
    {
        id: '41785691426',
        trackingNumber: '41785691426',
        origin: 'Port Said',
        originAddress: 'Al Sharq, 30 Canal St.',
        destination: 'Sharm Sheikh',
        destinationAddress: 'Naama Bay, 44 Resort Rd.',
        status: 'LOST'
    },
    {
        id: '41785691427',
        trackingNumber: '41785691427',
        origin: 'Damietta',
        originAddress: 'Al Mina, 17 Port St.',
        destination: 'Suez',
        destinationAddress: 'Port Tawfiq, 9 Canal View',
        status: 'REJECTED'
    },
    {
        id: '41785691428',
        trackingNumber: '41785691428',
        origin: 'Mansoura',
        originAddress: 'Talkha, 3 River St.',
        destination: 'Tanta',
        destinationAddress: 'El Gharbia, 21 Central Rd.',
        status: 'CANCELED'
    }
];