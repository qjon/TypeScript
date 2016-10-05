/// <reference path="typings/index.d.ts" />
import {IModalDataDto} from "./interfaces/IModalDataDto";
import {IModalOptionsDto} from "./interfaces/IModalOptionsDto";
import IModalService = angular.ui.bootstrap.IModalService;
import {ChooseValues} from "./ChooseValues";

export class ChooseFactory {
    static $inject = ['$uibModal', 'chooseValues'];

    public constructor(private $uibModal: IModalService, private chooseValues: ChooseValues) {
    }

    public choose(modalData: IModalDataDto, modalOptions: IModalOptionsDto) {
        console.log(modalData, modalOptions);

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

        options.bindToController = true;
        options.controllerAs = '$ctrl';

        return this.$uibModal.open(options).result;
    }
}

export class ChooseFactoryProxy {
    public static proxy() {
        return ($uibModal: IModalService, chooseValues: ChooseValues) => {
            let factory = new ChooseFactory($uibModal, chooseValues);

            return factory.choose.bind(factory);
        };
    }
}