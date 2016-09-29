/// <reference path="typings/index.d.ts" />

import {IModalDataDto} from "./IModalDataDto";
import {IModalOptionsDto} from "./IModalOptionsDto";
import IModalService = angular.ui.bootstrap.IModalService;

export function chooseFactory($uibModal: IModalService, chooseValues: chooseValues) {
    return (modalData: IModalDataDto, modalOptions: IModalOptionsDto) => {
        let defaultOptions = angular.copy(chooseValues.defaultValue);
        let options = angular.extend({}, defaultOptions, modalOptions);
        let data = angular.extend({}, options.defaultData, modalData);

        if (Array.isArray(data.buttons)) {
            data.buttons.forEach(function (button) {
                if (!button.cssClass) {
                    button.cssClass = 'btn_cancel';
                }

                if (!button.position) {
                    button.position = 'center';
                }
            });
        }

        if (modalData.simple) {
            options.templateUrl = 'app/components/chooseModal/simpleChooseModal.html';
        }

        if (modalData.templateUrl) {
            options.templateUrl = modalData.templateUrl;
        }

        if (modalData.size) {
            options.size = modalData.size;
        }

        options.resolve = {
            data: function () {
                return data;
            }
        };

        return $uibModal.open(options).result;
    }
}

chooseFactory.$inject = ['$uibModal', 'chooseValues'];