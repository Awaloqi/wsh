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
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    readonly id?: number;
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    readonly created?: Date;
    /**
     * 
     * @type {Date}
     * @memberof Schedule
     */
    readonly changed?: Date;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    comment?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Schedule
     */
    isRush?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof Schedule
     */
    days: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof Schedule
     */
    status: ScheduleStatusEnum;
    /**
     * 
     * @type {number}
     * @memberof Schedule
     */
    address: number;
}

export function ScheduleFromJSON(json: any): Schedule {
    return ScheduleFromJSONTyped(json, false);
}

export function ScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'created': !exists(json, 'created') ? undefined : (new Date(json['created'])),
        'changed': !exists(json, 'changed') ? undefined : (new Date(json['changed'])),
        'comment': !exists(json, 'comment') ? undefined : json['comment'],
        'isRush': !exists(json, 'is_rush') ? undefined : json['is_rush'],
        'days': json['days'],
        'status': json['status'],
        'address': json['address'],
    };
}

export function ScheduleToJSON(value?: Schedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comment': value.comment,
        'is_rush': value.isRush,
        'days': value.days,
        'status': value.status,
        'address': value.address,
    };
}

/**
* @export
* @enum {string}
*/
export enum ScheduleStatusEnum {
    Active = 'active',
    Paused = 'paused'
}


