/// <reference path="interfaces/IYesNoScope" />
import {YesNoService} from "./YesNoService";
import IYesNoScope = ectsp.IYesNoScope;

export class YesNoDirective {
    public link: (scope: IYesNoScope, element: ng.IAugmentedJQuery) => void;
    public scope: IYesNoScope = {
        confirmIf: '<',
        ngClick: '&',
        yesButton: '@',
        noButton: '@',
        title: '@',
        templateUrl: '@',
        yesNo: '@'
    };

    constructor(chooseYesNo: YesNoService) {
        YesNoDirective.prototype.link = (scope: IYesNoScope, element: ng.IAugmentedJQuery) => {
            scope.confirmOk = scope.yesButton || 'CTSP-BTTN-80';
            scope.confirmCancel = scope.noButton || 'CTSP-BTTN-81';
            scope.confirmTitle = scope.title;
            scope.message = scope.yesNo;
            scope.size = 500;

            chooseYesNo.link.apply(this, [scope, element]);
        };
    }

    public static Factory() {
        var directive = (chooseYesNo: YesNoService) => {
            return new YesNoDirective(chooseYesNo);
        };

        directive['$inject'] = ['chooseYesNo'];

        return directive;
    }
}