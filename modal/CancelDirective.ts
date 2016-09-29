/// <reference path="interfaces/ICancelationScope" />
import {YesNoService} from "./YesNoService";
import ICancelationScope = ectsp.ICancelationScope;

export class CancelDirective {
    public link: (scope: ICancelationScope, element: ng.IAugmentedJQuery) => void;
    public scope: ICancelationScope = {
        confirmIf: '=',
        ngClick: '&',
        cancel: '@'
    };

    constructor(chooseYesNo: YesNoService) {
        CancelDirective.prototype.link = (scope: ICancelationScope, element: ng.IAugmentedJQuery) => {
            scope.confirmOk = 'CTSP-BTTN-80';
            scope.confirmCancel = 'CTSP-BTTN-81';
            scope.confirmTitle = 'CTSP-LBL-351';
            scope.message = scope.cancel;

            chooseYesNo.link.apply(this, [scope, element]);
        };
    }

    public static Factory() {
        var directive = (chooseYesNo: YesNoService) => {
            return new CancelDirective(chooseYesNo);
        };

        directive['$inject'] = ['chooseYesNo'];

        return directive;
    }
}