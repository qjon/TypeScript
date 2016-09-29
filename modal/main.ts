/// <reference path="typings/index.d.ts" />
import {ChooseModalCtrl} from "./ChooseModalCtrl";
import {ChooseFactory} from "./ChooseFactory";
import {YesNoService} from "./YesNoService";
import {CancelDirective} from "./CancelDirective";

angular.module('ectsp.chooseModal', ['ui.bootstrap.modal'])
    .controller('ChooseModalCtrl', ChooseModalCtrl)
    .factory('$choose', ChooseFactory.factory)
    .service('chooseYesNo', YesNoService)
    .directive('cancel', CancelDirective.Factory)
;
