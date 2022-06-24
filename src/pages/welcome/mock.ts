export const order = {
  packages: {
    items: [
      {
        title: 'PAYC',
        price: 0,
        description: 'Pay as You Clean',
        cleanPressDiscount: '0%',
        laundryPressDiscount: '0%',
        washFoldDiscount: '0%',
        freeDelivery: false,
        freeWelcomeBox: false,
        freeSeasonalGarmentStorage: false,
        creditBack: false,
      },
      {
        title: 'GOLD',
        price: 99,
        description: 'Pre Pay Credit',
        cleanPressDiscount: '10%',
        laundryPressDiscount: '5%',
        washFoldDiscount: '5%',
        freeDelivery: true,
        freeWelcomeBox: true,
        freeSeasonalGarmentStorage: false,
        creditBack: false,
      },
      {
        title: 'PLATINUM',
        price: 199,
        description: 'Pre Pay Credit',
        cleanPressDiscount: '20%',
        laundryPressDiscount: '10%',
        washFoldDiscount: '10%',
        freeDelivery: true,
        freeWelcomeBox: true,
        freeSeasonalGarmentStorage: true,
        creditBack: true,
      },
    ],
    activePackageId: 2,
  },
  pickupDropoffDateRange: {},
  pickupDropoffTime: {},
  recurringPickupDates: [
    {
      value: 'Sunday',
      selected: false,
    },
    {
      value: 'Monday',
      selected: false,
    },
    {
      value: 'Tuesday',
      selected: false,
    },
    {
      value: 'Wednesday',
      selected: false,
    },
    {
      value: 'Thursday',
      selected: false,
    },
    {
      value: 'Friday',
      selected: false,
    },
    {
      value: 'Saturday',
      selected: false,
    },
  ],
  instructions: 'No instructions given',
};
