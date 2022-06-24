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
 * @interface POSOrderPrepareAddressResponse
 */
export interface POSOrderPrepareAddressResponse {
    /**
     * 
     * @type {number}
     * @memberof POSOrderPrepareAddressResponse
     */
    readonly id?: number;
    /**
     * 
     * @type {number}
     * @memberof POSOrderPrepareAddressResponse
     */
    zipCode: number;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareAddressResponse
     */
    addressLine1: string;
    /**
     * 
     * @type {string}
     * @memberof POSOrderPrepareAddressResponse
     */
    addressLine2?: string;
    /**
     * 
     * @type {boolean}
     * @memberof POSOrderPrepareAddressResponse
     */
    hasDoorman?: boolean;
}

export function POSOrderPrepareAddressResponseFromJSON(json: any): POSOrderPrepareAddressResponse {
    return POSOrderPrepareAddressResponseFromJSONTyped(json, false);
}

export function POSOrderPrepareAddressResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): POSOrderPrepareAddressResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'zipCode': json['zip_code'],
        'addressLine1': json['address_line_1'],
        'addressLine2': !exists(json, 'address_line_2') ? undefined : json['address_line_2'],
        'hasDoorman': !exists(json, 'has_doorman') ? undefined : json['has_doorman'],
    };
}

export function POSOrderPrepareAddressResponseToJSON(value?: POSOrderPrepareAddressResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'zip_code': value.zipCode,
        'address_line_1': value.addressLine1,
        'address_line_2': value.addressLine2,
        'has_doorman': value.hasDoorman,
    };
}


