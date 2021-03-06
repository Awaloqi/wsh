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
    POSPrice,
    POSPriceFromJSON,
    POSPriceFromJSONTyped,
    POSPriceToJSON,
} from './';

/**
 * 
 * @export
 * @interface POSService
 */
export interface POSService {
    /**
     * 
     * @type {number}
     * @memberof POSService
     */
    readonly id?: number;
    /**
     * 
     * @type {Array<POSPrice>}
     * @memberof POSService
     */
    readonly itemList?: Array<POSPrice>;
    /**
     * 
     * @type {string}
     * @memberof POSService
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof POSService
     */
    readonly image?: string;
}

export function POSServiceFromJSON(json: any): POSService {
    return POSServiceFromJSONTyped(json, false);
}

export function POSServiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): POSService {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'itemList': !exists(json, 'item_list') ? undefined : ((json['item_list'] as Array<any>).map(POSPriceFromJSON)),
        'title': json['title'],
        'image': !exists(json, 'image') ? undefined : json['image'],
    };
}

export function POSServiceToJSON(value?: POSService | null): any {
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


