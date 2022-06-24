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
 * @interface Phone
 */
export interface Phone {
    /**
     * 
     * @type {number}
     * @memberof Phone
     */
    readonly id?: number;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof Phone
     */
    number: string;
}

export function PhoneFromJSON(json: any): Phone {
    return PhoneFromJSONTyped(json, false);
}

export function PhoneFromJSONTyped(json: any, ignoreDiscriminator: boolean): Phone {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'title': json['title'],
        'number': json['number'],
    };
}

export function PhoneToJSON(value?: Phone | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'number': value.number,
    };
}


