/// <reference path="interfaces/IConfirmationScope" />
import {YesNoService} from "./YesNoService";
import IConfirmationScope = ectsp.IConfirmationScope;

export class ConfirmDirective {
    public link: (scope: IConfirmationScope, element: ng.IAugmentedJQuery) => void;
    public scope: IConfirmationScope = {
        confirm: '@',
        confirmIf: '=',
        ngClick: '&'
    };

    constructor(chooseYesNo: YesNoService) {
        ConfirmDirective.prototype.link = (scope: IConfirmationScope, element: ng.IAugmentedJQuery) => {
            scope.confirmOk = 'Yes';
            scope.confirmCancel = 'No';
            scope.confirmTitle = 'Confirmation';
            scope.message = scope.confirm;

            chooseYesNo.link.apply(this, [scope, element]);
        };
    }

    public static Factory() {
        var directive = (chooseYesNo: YesNoService) => {
            return new ConfirmDirective(chooseYesNo);
        };

        directive['$inject'] = ['chooseYesNo'];

        return directive;
    }
}