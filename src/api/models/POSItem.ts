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
    POSItemPrice,
    POSItemPriceFromJSON,
    POSItemPriceFromJSONTyped,
    POSItemPriceToJSON,
} from './';

/**
 * 
 * @export
 * @interface POSItem
 */
export interface POSItem {
    /**
     * 
     * @type {number}
     * @memberof POSItem
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof POSItem
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof POSItem
     */
    readonly image?: string;
    /**
     * 
     * @type {Array<POSItemPrice>}
     * @memberof POSItem
     */
    readonly priceList?: Array<POSItemPrice>;
}

export function POSItemFromJSON(json: any): POSItem {
    return POSItemFromJSONTyped(json, false);
}

export function POSItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): POSItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': json['title'],
        'image': !exists(json, 'image') ? undefined : json['image'],
        'priceList': !exists(json, 'price_list') ? undefined : ((json['price_list'] as Array<any>).map(POSItemPriceFromJSON)),
    };
}

export function POSItemToJSON(value?: POSItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
    };
}


