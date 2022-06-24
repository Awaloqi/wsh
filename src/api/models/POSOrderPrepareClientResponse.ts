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
 * @interface POSOrderPrepareClientResponse
 */
export interface POSOrderPrepareClientResponse {
    /**
     * 
     * @type {number}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly email?: string;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly balance?: string;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly dollarBalance?: string;
    /**
     * 
     * @type {object}
     * @memberof POSOrderPrepareClientResponse
     */
    billingAddress?: object;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    readonly prettyBillingAddress?: string;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    detergents?: POSOrderPrepareClientResponseDetergentsEnum;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    starch?: POSOrderPrepareClientResponseStarchEnum;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareClientResponse
     */
    noCrease?: POSOrderPrepareClientResponseNoCreaseEnum;
    /**
     * 
     * @type {boolean}
     * @memberof POSOrderPrepareClientResponse
     */
    fabricSoftener?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof POSOrderPrepareClientResponse
     */
    fixTears?: boolean;
}

export function POSOrderPrepareClientResponseFromJSON(json: any): POSOrderPrepareClientResponse {
    return POSOrderPrepareClientResponseFromJSONTyped(json, false);
}

export function POSOrderPrepareClientResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): POSOrderPrepareClientResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'firstName': !exists(json, 'first_name') ? undefined : json['first_name'],
        'lastName': !exists(json, 'last_name') ? undefined : json['last_name'],
        'balance': !exists(json, 'balance') ? undefined : json['balance'],
        'dollarBalance': !exists(json, 'dollar_balance') ? undefined : json['dollar_balance'],
        'billingAddress': !exists(json, 'billing_address') ? undefined : json['billing_address'],
        'prettyBillingAddress': !exists(json, 'pretty_billing_address') ? undefined : json['pretty_billing_address'],
        'detergents': !exists(json, 'detergents') ? undefined : json['detergents'],
        'starch': !exists(json, 'starch') ? undefined : json['starch'],
        'noCrease': !exists(json, 'no_crease') ? undefined : json['no_crease'],
        'fabricSoftener': !exists(json, 'fabric_softener') ? undefined : json['fabric_softener'],
        'fixTears': !exists(json, 'fix_tears') ? undefined : json['fix_tears'],
    };
}

export function POSOrderPrepareClientResponseToJSON(value?: POSOrderPrepareClientResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billing_address': value.billingAddress,
        'detergents': value.detergents,
        'starch': value.starch,
        'no_crease': value.noCrease,
        'fabric_softener': value.fabricSoftener,
        'fix_tears': value.fixTears,
    };
}

/**
* @export
* @enum {string}
*/
export enum POSOrderPrepareClientResponseDetergentsEnum {
    Scented = 'scented',
    HypoAllergenic = 'hypo_allergenic'
}
/**
* @export
* @enum {string}
*/
export enum POSOrderPrepareClientResponseStarchEnum {
    None = 'none',
    Light = 'light',
    Medium = 'medium',
    Heavy = 'heavy'
}
/**
* @export
* @enum {string}
*/
export enum POSOrderPrepareClientResponseNoCreaseEnum {
    AllPants = 'all_pants',
    JeansOnly = 'jeans_only'
}


