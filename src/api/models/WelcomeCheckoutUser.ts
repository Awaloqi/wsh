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
 * @interface WelcomeCheckoutUser
 */
export interface WelcomeCheckoutUser {
    /**
     * 
     * @type {string}
     * @memberof WelcomeCheckoutUser
     */
    firstName: string;
    /**
     * 
     * @type {string}
     * @memberof WelcomeCheckoutUser
     */
    lastName: string;
    /**
     * 
     * @type {boolean}
     * @memberof WelcomeCheckoutUser
     */
    isAutoBilling: boolean;
}

export function WelcomeCheckoutUserFromJSON(json: any): WelcomeCheckoutUser {
    return WelcomeCheckoutUserFromJSONTyped(json, false);
}

export function WelcomeCheckoutUserFromJSONTyped(json: any, ignoreDiscriminator: boolean): WelcomeCheckoutUser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'firstName': json['first_name'],
        'lastName': json['last_name'],
        'isAutoBilling': json['is_auto_billing'],
    };
}

export function WelcomeCheckoutUserToJSON(value?: WelcomeCheckoutUser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_name': value.firstName,
        'last_name': value.lastName,
        'is_auto_billing': value.isAutoBilling,
    };
}


