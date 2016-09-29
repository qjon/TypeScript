/// <reference path="typings/index.d.ts" />
export interface IConfirmationScope extends ng.IScope {
    confirmIf: boolean;
    confirmOk?: string;
    confirmCancel?: string;
    confirmTitle?: string;
    message?: string;
    templateUrl?: string;
    size?: number;
    cancel: string;
    ngClick(): void;
}