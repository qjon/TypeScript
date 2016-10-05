/// <reference path="../typings/index.d.ts" />

import {ChooseValues} from "../ChooseValues";
import {IChooseModalSettings} from "../interfaces/IChooseModalSettings";
import {IModalOptionsDto} from "../interfaces/IModalOptionsDto";
import {IModalDataDto} from "../interfaces/IModalDataDto";

describe('ChooseValues', () => {
    let chooseValues: ChooseValues;

    beforeEach(() => {
        chooseValues = new ChooseValues();
    });

    describe('should return proper', () => {
        it('object', () => {
            let expectedValue: IChooseModalSettings = {
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

            expect(chooseValues.defaultValue).toEqual(expectedValue);
        });
    });

    describe('cancelation', () => {
        it('should return proper object if passed argument is string', () => {
            let cancelationData: IModalOptionsDto = {
                title: 'CTSP-LBL-351',
                text: 'some str',
                closable: false,
                buttons: [
                    {name: 'CTSP-BTTN-81', action: 'BACK', cssClass: 'btn_cancel'},
                    {name: 'CTSP-BTTN-80', action: 'YES', cssClass: 'btn_apply'}
                ]
            };

            expect(cancelationData).toEqual(chooseValues.cancelation('some str'));
        });


        it('should return proper object if passed argument is IModalDataDto', () => {
            let cancelationData: IModalOptionsDto = {
                title: 'CTSP-LBL-351',
                text: 'some str',
                closable: false,
                buttons: [
                    {name: 'CTSP-BTTN-81', action: 'BACK', cssClass: 'btn_cancel'},
                    {name: 'CTSP-BTTN-80', action: 'YES', cssClass: 'btn_apply'}
                ]
            };

            let value:IModalDataDto = {
                text: 'some str'
            };

            expect(cancelationData).toEqual(chooseValues.cancelation(value));
        });
    });
});