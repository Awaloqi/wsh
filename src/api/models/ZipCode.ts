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
 * @interface ZipCode
 */
export interface ZipCode {
    /**
     * 
     * @type {number}
     * @memberof ZipCode
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof ZipCode
     */
    value: string;
}

export function ZipCodeFromJSON(json: any): ZipCode {
    return ZipCodeFromJSONTyped(json, false);
}

export function ZipCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ZipCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'value': json['value'],
    };
}

export function ZipCodeToJSON(value?: ZipCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'value': value.value,
    };
}


