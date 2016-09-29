/// <reference path="typings/index.d.ts" />
import {IModalDataDto} from "./IModalDataDto";
import {IModalOptionsDto} from "./IModalOptionsDto";
import IModalService = angular.ui.bootstrap.IModalService;

export class ChooseFactory {
    public static $uibModal: IModalService;
    public static chooseValues: chooseValues;

    public static choose(modalData: IModalDataDto, modalOptions: IModalOptionsDto) {
        let defaultOptions = angular.copy(this.chooseValues.defaultValue);
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

        return this.$uibModal.open(options).result;
    }

    public static factory($uibModal: IModalService, chooseValues: chooseValues) {
        this.$uibModal = $uibModal;
        this.chooseValues = chooseValues;

        return this.choose;
    }
}