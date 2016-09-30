/// <reference path="typings/index.d.ts" />
import {ChooseModalCtrl} from "./ChooseModalCtrl";
import {ChooseFactoryProxy} from "./ChooseFactory";
import {CancelDirective} from "./CancelDirective";
import {ChooseValues} from "./ChooseValues";
import {ConfirmDirective} from "./ConfirmDirective";
import {YesNoDirective} from "./YesNoDirective";

angular.module('ectsp.chooseModal', ['ui.bootstrap.modal'])
    .controller('ChooseModalCtrl', ChooseModalCtrl)
    .factory('$choose', ChooseFactoryProxy.proxy())
    .service('chooseValues', ChooseValues)
    .directive('cancel', CancelDirective.Factory())
    .directive('confirm', ConfirmDirective.Factory())
    .directive('yesNo', YesNoDirective.Factory())
;
