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
 * @interface POSRequestUpdate
 */
export interface POSRequestUpdate {
    /**
     * 
     * @type {number}
     * @memberof POSRequestUpdate
     */
    order: number;
    /**
     * 
     * @type {boolean}
     * @memberof POSRequestUpdate
     */
    isRush?: boolean;
    /**
     * 
     * @type {number}
     * @memberof POSRequestUpdate
     */
    rushAmount?: number;
    /**
     * 
     * @type {boolean}
     * @memberof POSRequestUpdate
     */
    isCustom?: boolean;
    /**
     * 
     * @type {number}
     * @memberof POSRequestUpdate
     */
    customAmount?: number;
}

export function POSRequestUpdateFromJSON(json: any): POSRequestUpdate {
    return POSRequestUpdateFromJSONTyped(json, false);
}

export function POSRequestUpdateFromJSONTyped(json: any, ignoreDiscriminator: boolean): POSRequestUpdate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order': json['order'],
        'isRush': !exists(json, 'is_rush') ? undefined : json['is_rush'],
        'rushAmount': !exists(json, 'rush_amount') ? undefined : json['rush_amount'],
        'isCustom': !exists(json, 'is_custom') ? undefined : json['is_custom'],
        'customAmount': !exists(json, 'custom_amount') ? undefined : json['custom_amount'],
    };
}

export function POSRequestUpdateToJSON(value?: POSRequestUpdate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order': value.order,
        'is_rush': value.isRush,
        'rush_amount': value.rushAmount,
        'is_custom': value.isCustom,
        'custom_amount': value.customAmount,
    };
}


