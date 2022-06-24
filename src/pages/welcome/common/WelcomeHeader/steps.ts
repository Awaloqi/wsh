export const steps = [
  {
    id: 'welcome' as const,
    url: '/registration',
    title: 'Welcome',
  },
  {
    id: 'advantage' as const,
    url: '/order/advantage',
    title: 'Advantage',
  },
  {
    id: 'packages' as const,
    url: '/order/packages',
    title: 'Packages',
  },
  {
    id: 'delivery' as const,
    url: '/order/delivery',
    title: 'Date & time',
  },
  {
    id: 'checkout' as const,
    url: '/order/checkout',
    title: 'Checkout',
  },
];
