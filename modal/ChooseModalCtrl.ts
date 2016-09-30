/// <reference path="typings/index.d.ts" />
import {IModalDataDto} from "./interfaces/IModalDataDto";
import IModalServiceInstance = angular.ui.bootstrap.IModalServiceInstance;

export class ChooseModalCtrl {
    static $inject = ['$uibModalInstance', '$timeout', 'data'];
    public timeout: number = 0;
    public isTextArray: boolean;

    constructor(public $uibModalInstance: IModalServiceInstance, public $timeout: ng.ITimeoutService, public data: IModalDataDto) {
        this.isTextArray = Array.isArray(data.text);
        this.timeout = data.timeout;

        if (this.timeout) {
            $timeout(() => {
                this.close('so');
            }, this.timeout);
        }
    }

    public ok(closeMessage: string): void {
        this.$uibModalInstance.close(closeMessage);
    };

    public close(closeMessage: string): void {
        if (!closeMessage) {
            closeMessage = 'CLOSE';
        }
        this.$uibModalInstance.dismiss(closeMessage);
    };
}