/// <reference path="../typings/index.d.ts" />
/// <reference path="IModalScope" />
namespace ectsp {
    export interface IYesNoScope extends IModalScope {
        yesNo: string;
        noButton: string;
        yesButton: string;
        title: string;
    }
}
