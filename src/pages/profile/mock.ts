export const getProfile = () => ({
  id: 1,
  email: 'username@example.com',
  subscription: 'payc',
  mainPhone: '+11234564897',
  firstName: 'FirstName',
  lastName: 'LastName',
  balance: 19900,
  dollarBalance: 199.0,
  stripeId: 'cus_IDEPCAjgKy6vVR',
  fabricSoftener: false,
  fixTears: false,
  isAutoBilling: false,
  mainCard: 1,
  mainAddress: 1,
  mainBillingAddress: 1,
});

export const getAddresses = () => [
  {
    id: 12,
    zipCode: '95014',
    title: 'Main',
    addressLine1: '1 Apple Park Way, Cupertino, CA, USA',
    addressLine2: '',
    hasDoorman: false,
  },
  {
    id: 11,
    zipCode: '95014',
    title: 'Main',
    addressLine1: '1 Apple Park Way, Cupertino, CA, USA',
    addressLine2: '',
    hasDoorman: false,
  },
];

export const getPhones = () => [
  { id: 5, title: 'Work phone', number: '+1915-555-3333' },
  { id: 6, title: 'Home phone', number: '+1915-555-4444' },
];
