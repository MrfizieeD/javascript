/**
 * Kubernetes
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: release-1.31
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { V1PodFailurePolicyRule } from './v1PodFailurePolicyRule';

/**
* PodFailurePolicy describes how failed pods influence the backoffLimit.
*/
export class V1PodFailurePolicy {
    /**
    * A list of pod failure policy rules. The rules are evaluated in order. Once a rule matches a Pod failure, the remaining of the rules are ignored. When no rule matches the Pod failure, the default handling applies - the counter of pod failures is incremented and it is checked against the backoffLimit. At most 20 elements are allowed.
    */
    'rules': Array<V1PodFailurePolicyRule>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "rules",
            "baseName": "rules",
            "type": "Array<V1PodFailurePolicyRule>"
        }    ];

    static getAttributeTypeMap() {
        return V1PodFailurePolicy.attributeTypeMap;
    }
}

