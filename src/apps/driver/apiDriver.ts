import { Configuration, DeliveryStatusEnum, DriverApi, TokenObtainSliding as LoginCredentials } from 'api';
import { getUser } from '../../services/storage';
import { API_URL } from '../../constants/common';

const configuration = new Configuration({
  basePath: API_URL,
  apiKey: () => `Bearer ${getUser()?.token}`,
});

const api = new DriverApi(configuration);

export const postLogin = async (credentials: LoginCredentials) => api.driverAuthLoginCreate(credentials);

export const getDeliveries = () => api.driverDeliveriesList();

export const patchDeliverytoAccepted = (id: number) =>
  api.driverDeliveriesPartialUpdate(`${id}`, { status: DeliveryStatusEnum.Accepted });
export const patchDeliverytoInProgress = (id: number) =>
  api.driverDeliveriesPartialUpdate(`${id}`, { status: DeliveryStatusEnum.InProgress });
export const patchDeliverytoCompleted = (id: number) =>
  api.driverDeliveriesPartialUpdate(`${id}`, { status: DeliveryStatusEnum.Completed });

export const patchDeliveryStart = (id: number) =>
  api.driverDeliveriesPartialUpdate(`${id}`, { status: DeliveryStatusEnum.InProgress });

export const patchDeliveryFinish = (id: number) =>
  api.driverDeliveriesPartialUpdate(`${id}`, { status: DeliveryStatusEnum.Completed });

export const patchDeliveryNote = (id: number, note: string) => api.driverDeliveriesPartialUpdate(`${id}`, { note });
