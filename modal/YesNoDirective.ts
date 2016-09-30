/// <reference path="interfaces/IYesNoScope" />
import {BaseDialogDirective} from "./BaseDialogDirective";

export class YesNoDirective extends BaseDialogDirective implements ng.IDirective {
    public link: (scope: ng.IScope, element: ng.IAugmentedJQuery) => void;
    public scope: any = {
        confirmIf: '<',
        ngClick: '&',
        yesButton: '@',
        noButton: '@',
        title: '@',
        templateUrl: '@',
        yesNo: '@'
    };
    public priority: number = 1;
    public restrict: string = 'A';

    constructor(public $choose: any) {
        super($choose);

        YesNoDirective.prototype.link = (scope: ng.IScope, element: ng.IAugmentedJQuery) => {
            scope['confirmOk'] = scope['yesButton'] || 'CTSP-BTTN-80';
            scope['confirmCancel'] = scope['noButton'] || 'CTSP-BTTN-81';
            scope['confirmTitle'] = scope['title'];
            scope['message'] = scope['yesNo'];
            scope['size'] = 500;

            this.openDialog(scope, element);
        };
    }

    public static Factory(): ng.IDirectiveFactory {
        let directive = ($choose: any) => {
            return new YesNoDirective($choose);
        };

        directive['$inject'] = ['$choose'];

        return directive;
    }
}