/// <reference path="interfaces/IConfirmationScope" />
import {BaseDialogDirective} from "./BaseDialogDirective";

export class ConfirmDirective extends BaseDialogDirective implements ng.IDirective {
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery) => void;
    public scope: any = {
        confirm: '@',
        confirmIf: '=',
        ngClick: '&'
    };
    public priority: number = 1;
    public restrict: string = 'A';

    constructor(public $choose: any) {
        super($choose);

        ConfirmDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery) => {
            scope['confirmOk'] = 'Yes';
            scope['confirmCancel'] = 'No';
            scope['confirmTitle'] = 'Confirmation';
            scope['message'] = scope['confirm'];

            this.openDialog(scope, element);
        };
    }

    public static Factory(): ng.IDirectiveFactory {
        let directive = ($choose: any) => {
            return new ConfirmDirective($choose);
        };

        directive['$inject'] = ['$choose'];

        return directive;
    }
}