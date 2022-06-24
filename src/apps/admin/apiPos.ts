import { getCookie } from 'tiny-cookie';
import { Configuration, PosApi, POSBasketChangeItemActionEnum } from '../../api';
import { POSBasketSetExtraItems } from '../../api';
import { getUser } from '../../services/storage';

const configuration = new Configuration({
  basePath: '/api',
  apiKey: process.env.NODE_ENV === 'development' ? () => `Bearer ${getUser()?.token}` : undefined,
  headers: process.env.NODE_ENV === 'production' ? { 'X-CSRFToken': getCookie('csrftoken') ?? '' } : undefined,
});

const api = new PosApi(configuration);

export const basketAddItem = ({ id, count, order }: { id: number; count: number; order: number }) =>
  api.posBasketChangeItemCreate({ price: id, count, order, action: POSBasketChangeItemActionEnum.Add });

export const basketRemoveItem = ({ id, count, order }: { id: number; count: number; order: number }) =>
  api.posBasketChangeItemCreate({ price: id, count, order, action: POSBasketChangeItemActionEnum.Remove });

export const getBasket = (key: string, order: number) => api.posBasketList(order);

export const getServices = () => api.posServicesList();

export const patchNote = ({ id, note }: { id: number; note: string }) =>
  api.posOrdersPartialUpdate(id, { note } as any);

export const postCheckout = (id: number) => api.posOrdersCheckoutCreate({ order: id });

export const postPrepare = (keys: string, data: { client: number; request: number }) =>
  api.posOrdersPrepareCreate(data);

export const getCoupons = () => api.posCouponsList();

export const addCoupon = (data: { coupon: string; order: number }) => api.posOrdersApplyCouponCreate(data);

export const removeCoupon = (data: { order: number }) => api.posOrdersRemoveCouponCreate(data);

export const postCustom = (data: POSBasketSetExtraItems) => api.posBasketSetExtraItemsCreate(data);

export const postDeliveryAmount = ({ orderId, amount }: { orderId: number; amount: number }) =>
  api.posRequestsUpdateCreate({ order: orderId, customAmount: amount, isCustom: true });

export const postRushDeliveryAmount = ({ orderId, amount }: { orderId: number; amount: number }) =>
  api.posRequestsUpdateCreate({ order: orderId, rushAmount: amount, isRush: true });
