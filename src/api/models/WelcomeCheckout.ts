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
import {
    WelcomeCheckoutAddress,
    WelcomeCheckoutAddressFromJSON,
    WelcomeCheckoutAddressFromJSONTyped,
    WelcomeCheckoutAddressToJSON,
    WelcomeCheckoutBillingAddress,
    WelcomeCheckoutBillingAddressFromJSON,
    WelcomeCheckoutBillingAddressFromJSONTyped,
    WelcomeCheckoutBillingAddressToJSON,
    WelcomeCheckoutUser,
    WelcomeCheckoutUserFromJSON,
    WelcomeCheckoutUserFromJSONTyped,
    WelcomeCheckoutUserToJSON,
} from './';

/**
 * 
 * @export
 * @interface WelcomeCheckout
 */
export interface WelcomeCheckout {
    /**
     * 
     * @type {WelcomeCheckoutUser}
     * @memberof WelcomeCheckout
     */
    user: WelcomeCheckoutUser;
    /**
     * 
     * @type {WelcomeCheckoutAddress}
     * @memberof WelcomeCheckout
     */
    address: WelcomeCheckoutAddress;
    /**
     * 
     * @type {WelcomeCheckoutBillingAddress}
     * @memberof WelcomeCheckout
     */
    billingAddress: WelcomeCheckoutBillingAddress;
    /**
     * 
     * @type {string}
     * @memberof WelcomeCheckout
     */
    order: string;
}

export function WelcomeCheckoutFromJSON(json: any): WelcomeCheckout {
    return WelcomeCheckoutFromJSONTyped(json, false);
}

export function WelcomeCheckoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): WelcomeCheckout {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'user': WelcomeCheckoutUserFromJSON(json['user']),
        'address': WelcomeCheckoutAddressFromJSON(json['address']),
        'billingAddress': WelcomeCheckoutBillingAddressFromJSON(json['billing_address']),
        'order': json['order'],
    };
}

export function WelcomeCheckoutToJSON(value?: WelcomeCheckout | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'user': WelcomeCheckoutUserToJSON(value.user),
        'address': WelcomeCheckoutAddressToJSON(value.address),
        'billing_address': WelcomeCheckoutBillingAddressToJSON(value.billingAddress),
        'order': value.order,
    };
}


