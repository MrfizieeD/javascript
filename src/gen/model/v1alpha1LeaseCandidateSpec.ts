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
import { V1MicroTime } from '../../types';

/**
* LeaseCandidateSpec is a specification of a Lease.
*/
export class V1alpha1LeaseCandidateSpec {
    /**
    * BinaryVersion is the binary version. It must be in a semver format without leading `v`. This field is required when strategy is \"OldestEmulationVersion\"
    */
    'binaryVersion'?: string;
    /**
    * EmulationVersion is the emulation version. It must be in a semver format without leading `v`. EmulationVersion must be less than or equal to BinaryVersion. This field is required when strategy is \"OldestEmulationVersion\"
    */
    'emulationVersion'?: string;
    /**
    * LeaseName is the name of the lease for which this candidate is contending. This field is immutable.
    */
    'leaseName': string;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'pingTime'?: V1MicroTime;
    /**
    * PreferredStrategies indicates the list of strategies for picking the leader for coordinated leader election. The list is ordered, and the first strategy supersedes all other strategies. The list is used by coordinated leader election to make a decision about the final election strategy. This follows as - If all clients have strategy X as the first element in this list, strategy X will be used. - If a candidate has strategy [X] and another candidate has strategy [Y, X], Y supersedes X and strategy Y   will be used. - If a candidate has strategy [X, Y] and another candidate has strategy [Y, X], this is a user error and leader   election will not operate the Lease until resolved. (Alpha) Using this field requires the CoordinatedLeaderElection feature gate to be enabled.
    */
    'preferredStrategies': Array<string>;
    /**
    * MicroTime is version of Time with microsecond level precision.
    */
    'renewTime'?: V1MicroTime;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "binaryVersion",
            "baseName": "binaryVersion",
            "type": "string"
        },
        {
            "name": "emulationVersion",
            "baseName": "emulationVersion",
            "type": "string"
        },
        {
            "name": "leaseName",
            "baseName": "leaseName",
            "type": "string"
        },
        {
            "name": "pingTime",
            "baseName": "pingTime",
            "type": "V1MicroTime"
        },
        {
            "name": "preferredStrategies",
            "baseName": "preferredStrategies",
            "type": "Array<string>"
        },
        {
            "name": "renewTime",
            "baseName": "renewTime",
            "type": "V1MicroTime"
        }    ];

    static getAttributeTypeMap() {
        return V1alpha1LeaseCandidateSpec.attributeTypeMap;
    }
}

