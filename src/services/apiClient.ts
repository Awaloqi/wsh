import {
  Configuration,
  TokenObtainSliding as LoginCredentials,
  Signup as RegisterCredentials,
  SendEmailReset as ResetPasswordCredentials,
  PasswordResetConfirm as ForgotPasswordCredentials,
  Customer,
  CreateIntent as PaymentOptions,
  WelcomeCheckout as Checkout,
  SubscriptionCheckout,
  Request,
  Address,
  Schedule,
  Profile,
  Phone,
  RequestCheck,
  ClientApi,
  ClientSchedulesUpdateRequest,
} from '../api';
import { getUser, cleanUser } from './storage';
import { API_URL } from '../constants/common';

const configuration = new Configuration({
  basePath: API_URL,
  apiKey: () => `Bearer ${getUser()?.token}`,
  middleware: [
    {
      async post({ response, url }) {
        if (response.status === 401 && !url.endsWith('login/')) {
          cleanUser();
          // window.location.replace('/login');
          return;
        }
        return response;
      },
    },
  ],
});

const api = new ClientApi(configuration);

export const getPackages = async () => api.clientPackagesList();

export const getPriceItems = async () => api.clientServicesList();
export const getSchedules = async () => api.clientSchedulesList();

export const login = async (credentials: LoginCredentials) => api.clientAuthLoginCreate(credentials);

export const register = async (credentials: RegisterCredentials) => api.clientAuthSignupCreate(credentials);

export const forgotPassword = async (credentials: ResetPasswordCredentials) => api.clientAuthResetPassword(credentials);

export const resetPassword = async (credentials: ForgotPasswordCredentials) =>
  api.clientAuthResetPasswordConfirm(credentials);

export const postCustomer = async (customer: Customer) => api.clientCustomersCreate(customer);

export const getZipCodes = async () =>
  api.clientLocationsList().then((locations) => locations.map((location) => location.zipCodeList).flat());

export const setupIntent = async (paymentOptions: PaymentOptions) =>
  api.clientBillingCreateIntentCreate(paymentOptions);

export const setPackage = async (packageName: string) => api.clientSubscriptionChooseCreate({ _package: packageName });

export const postCheckout = async (data: Checkout) =>
  api
    .clientWelcomeCheckoutCreate(data)
    .then((data) => ({ error: undefined, data }))
    .catch(async () => ({ error: 'Something went wrong', data: undefined }));

export const applyCoupon = async (key: string, coupon: string, invoice: string) =>
  api.clientOrdersApplyCouponCreate({ coupon, order: invoice });

export const getProfile = async () => api.clientProfileRead();

export const patchProfile = async (data: Partial<Profile>) => api.clientProfilePartialUpdate(data);

export const getAddress = async (key: string, addressId: string) => api.clientAddressesRead(addressId);

export const getAddresses = async () => api.clientAddressesList();

export const postAddresses = async (address: Address) => api.clientAddressesCreate(address);

export const patchAddress = async (address: Address) => api.clientAddressesUpdate(`${address.id}`, address);

export const getPhones = async () => api.clientPhonesList();
export const addPhones = async (data: Phone) => api.clientPhonesCreate(data);
export const deletePhones = async (id: string) => api.clientPhonesDelete(id);

export const patchPhone = async (data: Phone) => api.clientPhonesUpdate(`${data.id}`, data);

export const postRequest = async (requests: Request) =>
  api.clientRequestsCreate(requests).catch(async (e) => {
    const error = await e.json();
    if ('non_field_errors' in error) {
      throw error.non_field_errors.join(' ');
    }
    throw error;
  });

export const checkRequest = (requestCheck: RequestCheck) => api.clientRequestsCheckCreate(requestCheck);

export const getCards = async () => api.clientCardsList();

export const deleteCard = async (id: number) => api.clientCardsDelete(`${id}`);

export const getDeliveries = async () => api.clientRequestsList('true');

export const patchDelivery = async (data: Request) =>
  api
    .clientRequestsPartialUpdate(`${data.id}`, data)
    .then((data) => ({ error: undefined, data }))
    .catch(async (e: any) => {
      if (e.status === 400) {
        const errors = await e.json();
        return { error: errors.non_field_errors.join(' ') };
      }
      console.log('checking', e);
      if (e.status === 412) {
        return {
          error:
            'Sorry, but your pickup is already scheduled and it’s passed our cutoff time to make any changes. If any questions email cs@washmix.com or text 415-993-9274',
        };
      }
      return { error: 'Something went wrong' };
    });

export const deleteDelivery = async (id: string) =>
  api
    .clientRequestsDelete(id)
    .then((data) => ({ error: undefined, data }))
    .catch(async (e: Response) => {
      if (e.status === 400) {
        const errors = await e.json();
        return { error: errors.non_field_errors.join(' ') };
      }
      if (e.status === 412) {
        return {
          error:
            'We have already scheduled this pickup - unfortunately, it’s now too late to cancel this request. Please email cs@washmix.com',
        };
      }
      return { error: 'Something went wrong' };
    });

export const deleteSchedule = async (id: string) =>
  api
    .clientSchedulesDelete(id)
    .then((data) => ({ error: undefined, data }))
    .catch(async (e: Response) => {
      if (e.status === 400) {
        const errors = await e.json();
        return { error: errors.non_field_errors.join(' ') };
      }
      return { error: 'Something went wrong' };
    });

export const postSubscriptionCheckout = async (data: SubscriptionCheckout) =>
  api.clientSubscriptionCheckoutCreate(data);

export const postRefreshCards = () => api.clientCardsRefreshCreate();

export const postSchedule = async (data: Schedule) => api.clientSchedulesCreate(data);
export const patchSchedule = async (data: ClientSchedulesUpdateRequest) =>
  api
    .clientSchedulesPartialUpdateRaw(data)
    .then((data) => ({ error: undefined, data }))
    .catch(async (e: Response) => {
      if (e.status === 400) {
        const errors = await e.json();
        return { error: errors.non_field_errors.join(' ') };
      }
      return { error: 'Something went wrong' };
    });

export const getOrders = async () => api.clientOrdersList();
