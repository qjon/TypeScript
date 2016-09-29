/// <reference path="typings/index.d.ts" />
import {ChooseModalCtrl} from "./ChooseModalCtrl";
import {ChooseFactory} from "./ChooseFactory";
import {YesNoService} from "./YesNoService";
import {CancelDirective} from "./CancelDirective";
import {ChooseValues} from "./ChooseValues";
import {ConfirmDirective} from "./ConfirmDirective";
import {YesNoDirective} from "./YesNoDirective";

angular.module('ectsp.chooseModal', ['ui.bootstrap.modal'])
    .controller('ChooseModalCtrl', ChooseModalCtrl)
    .factory('$choose', ChooseFactory.factory)
    .service('chooseValues', ChooseValues)
    .service('chooseYesNo', YesNoService)
    .directive('cancel', CancelDirective.Factory)
    .directive('confirm', ConfirmDirective.Factory)
    .directive('yesNo', YesNoDirective.Factory)
;
