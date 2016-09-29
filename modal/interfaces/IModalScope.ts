/// <reference path="../typings/index.d.ts" />
import IScope = angular.IScope;
namespace ectsp {
    export interface IModalScope {
        confirmIf: string;
        confirmOk?: string;
        confirmCancel?: string;
        confirmTitle?: string;
        message?: string;
        ngClick: any;
        size?: number;
        templateUrl?: string;
        $apply?(exp: string): any;
    }
}
