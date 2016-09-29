/// <reference path="../typings/index.d.ts" />
import IModalSettings = angular.ui.bootstrap.IModalSettings;
import {IModalOptionsDto} from "./IModalOptionsDto";

export interface IChooseModalSettings extends IModalSettings {
    defaultData: IModalOptionsDto;
}