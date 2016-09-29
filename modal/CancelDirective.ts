import {YesNoService} from "./YesNoService";
import {IConfirmationScope} from "./IConfirmationScope";

export class CancelDirective {
    public link: (scope: IConfirmationScope, element: ng.IAugmentedJQuery) => void;
    public scope: IConfirmationScope;

    constructor(chooseYesNo: YesNoService) {
        CancelDirective.prototype.link = (scope: IConfirmationScope, element: ng.IAugmentedJQuery) => {
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