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
 * @interface TwilioFlexDeliveryWebhook
 */
export interface TwilioFlexDeliveryWebhook {
    /**
     * 
     * @type {string}
     * @memberof TwilioFlexDeliveryWebhook
     */
    message: string;
    /**
     * 
     * @type {string}
     * @memberof TwilioFlexDeliveryWebhook
     */
    phone: string;
}

export function TwilioFlexDeliveryWebhookFromJSON(json: any): TwilioFlexDeliveryWebhook {
    return TwilioFlexDeliveryWebhookFromJSONTyped(json, false);
}

export function TwilioFlexDeliveryWebhookFromJSONTyped(json: any, ignoreDiscriminator: boolean): TwilioFlexDeliveryWebhook {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'message': json['message'],
        'phone': json['phone'],
    };
}

export function TwilioFlexDeliveryWebhookToJSON(value?: TwilioFlexDeliveryWebhook | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'message': value.message,
        'phone': value.phone,
    };
}

