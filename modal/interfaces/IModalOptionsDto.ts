import {IModalButton} from "./IModalButton";

export interface IModalOptionsDto {
    title: string;
    text: string;
    closable: boolean;
    buttons: IModalButton[]
}