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
 * @interface POSItemPrice
 */
export interface POSItemPrice {
    /**
     * 
     * @type {number}
     * @memberof POSItemPrice
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof POSItemPrice
     */
    count?: number;
    /**
     * 
     * @type {string}
     * @memberof POSItemPrice
     */
    unit?: POSItemPriceUnitEnum;
    /**
     * 
     * @type {string}
     * @memberof POSItemPrice
     */
    readonly prettyUnit?: string;
    /**
     * 
     * @type {number}
     * @memberof POSItemPrice
     */
    amount?: number;
    /**
     * 
     * @type {string}
     * @memberof POSItemPrice
     */
    readonly dollarAmount?: string;
    /**
     * 
     * @type {string}
     * @memberof POSItemPrice
     */
    readonly title?: string;
    /**
     * 
     * @type {string}
     * @memberof POSItemPrice
     */
    readonly image?: string;
}

export function POSItemPriceFromJSON(json: any): POSItemPrice {
    return POSItemPriceFromJSONTyped(json, false);
}

export function POSItemPriceFromJSONTyped(json: any, ignoreDiscriminator: boolean): POSItemPrice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'unit': !exists(json, 'unit') ? undefined : json['unit'],
        'prettyUnit': !exists(json, 'pretty_unit') ? undefined : json['pretty_unit'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'dollarAmount': !exists(json, 'dollar_amount') ? undefined : json['dollar_amount'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function POSItemPriceToJSON(value?: POSItemPrice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'unit': value.unit,
        'amount': value.amount,
    };
}

/**
* @export
* @enum {string}
*/
export enum POSItemPriceUnitEnum {
    Pcs = 'pcs',
    Set = 'set',
    Lbs = 'lbs',
    SqFt = 'sq_ft',
    Bag = 'bag',
    Pleat = 'pleat'
}


