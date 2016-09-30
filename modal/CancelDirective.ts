/// <reference path="interfaces/ICancelationScope" />
import {BaseDialogDirective} from "./BaseDialogDirective";

export class CancelDirective extends BaseDialogDirective implements ng.IDirective {
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery) => void;
    public scope: any = {
        confirmIf: '=',
        ngClick: '&',
        cancel: '@'
    };
    public priority: number = 1;
    public restrict: string = 'A';

    constructor(public $choose: any) {
        super($choose);

        CancelDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery) => {
            console.log('cancel');
            scope['confirmOk'] = 'CTSP-BTTN-80';
            scope['confirmCancel'] = 'CTSP-BTTN-81';
            scope['confirmTitle'] = 'CTSP-LBL-351';
            scope['message'] = scope['cancel'];

            this.openDialog(scope, element);
        };
    }

    public static Factory(): ng.IDirectiveFactory {
        return ($choose: any) => {
            return new CancelDirective($choose);
        };
    }
}