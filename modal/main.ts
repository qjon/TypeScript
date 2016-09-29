/// <reference path="typings/index.d.ts" />
import {ChooseModalCtrl} from "./ChooseModalCtrl";
import {chooseFactory} from "./ChooseFactory";

angular.module('ectsp.chooseModal', ['ui.bootstrap.modal'])
    .controller('ChooseModalCtrl', ChooseModalCtrl)
    .factory('choose', chooseFactory)
;
