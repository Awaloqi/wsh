/* tslint:disable */
/* eslint-disable */
/**
 * WashMix
 * WashMix REST API
 *
 * The version of the OpenAPI document: v1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    card?: number | null;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    order: number;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    purpose?: InvoicePurposeEnum;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    readonly isPaid?: string;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    readonly dollarAmount?: string;
    /**
     * 
     * @type {number}
     * @memberof Invoice
     */
    discount?: number;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    readonly dollarDiscount?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    readonly amountWithDiscount?: string;
    /**
     * 
     * @type {string}
     * @memberof Invoice
     */
    readonly dollarAmountWithDiscount?: string;
}

export function InvoiceFromJSON(json: any): Invoice {
    return InvoiceFromJSONTyped(json, false);
}

export function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'card': !exists(json, 'card') ? undefined : json['card'],
        'order': json['order'],
        'purpose': !exists(json, 'purpose') ? undefined : json['purpose'],
        'isPaid': !exists(json, 'is_paid') ? undefined : json['is_paid'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'dollarAmount': !exists(json, 'dollar_amount') ? undefined : json['dollar_amount'],
        'discount': !exists(json, 'discount') ? undefined : json['discount'],
        'dollarDiscount': !exists(json, 'dollar_discount') ? undefined : json['dollar_discount'],
        'amountWithDiscount': !exists(json, 'amount_with_discount') ? undefined : json['amount_with_discount'],
        'dollarAmountWithDiscount': !exists(json, 'dollar_amount_with_discount') ? undefined : json['dollar_amount_with_discount'],
    };
}

export function InvoiceToJSON(value?: Invoice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'card': value.card,
        'order': value.order,
        'purpose': value.purpose,
        'amount': value.amount,
        'discount': value.discount,
    };
}

/**
* @export
* @enum {string}
*/
export enum InvoicePurposeEnum {
    Credit = 'credit',
    Subscription = 'subscription',
    Order = 'order',
    OneTimePayment = 'one_time_payment'
}


