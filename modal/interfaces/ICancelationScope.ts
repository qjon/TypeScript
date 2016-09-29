/// <reference path="../typings/index.d.ts" />
/// <reference path="IModalScope" />
namespace ectsp {
    export interface ICancelationScope extends IModalScope {
        cancel: string;
    }
}
