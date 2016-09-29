/// <reference path="typings/index.d.ts" />
import IModalSettings = angular.ui.bootstrap.IModalSettings;
import {IChooseModalSettings} from "./interfaces/IChooseModalSettings";
import {IModalOptionsDto} from "./interfaces/IModalOptionsDto";
import {IModalDataDto} from "./interfaces/IModalDataDto";

export class ChooseValues {
    private _defaultValue: IChooseModalSettings = {
        defaultData: {
            title: 'Confirmation',
            text: 'Message',
            closable: true,
            buttons: [
                {name: 'No', action: 'NO'},
                {name: 'Yes', action: 'YES'}
            ]
        },
        controller: 'ChooseModalCtrl',
        templateUrl: 'app/components/chooseModal/chooseModal.html',
        size: '640'
    };

    private _cancelationData: IModalOptionsDto = {
        title: 'CTSP-LBL-351',
        text: 'text',
        closable: false,
        buttons: [
            {name: 'CTSP-BTTN-81', action: 'BACK', cssClass: 'btn_cancel'},
            {name: 'CTSP-BTTN-80', action: 'YES', cssClass: 'btn_apply'}
        ]
    };

    get defaultValue(): IChooseModalSettings {
        return this._defaultValue;
    }

    public cancelation(data: string|IModalDataDto): IChooseModalSettings {
        let value: IModalDataDto;
        if (_.isString(data)) {
            value = {text: data};
        } else {
            value = data;
        }
        return angular.extend({}, this._cancelationData, value);
    }
}
