/// <reference path="typings/index.d.ts" />
/// <reference path="interfaces/IModalScope" />
import IModalScope = ectsp.IModalScope;
export class YesNoService {
    static $inject = ['$choose'];

    constructor(private $choose: any) {

    }

    public link(scope: IModalScope, element: ng.IRootElementService) {
        element
            .unbind('click')
            .bind('click', function ($event) {
                var data;

                $event.preventDefault();

                if (scope.confirmIf) {
                    scope.$apply(scope.ngClick);
                    return;
                }

                data = {
                    text: scope.message,
                    buttons: [
                        {
                            name: scope.confirmCancel,
                            action: 'NO',
                            position: 'center'
                        },
                        {
                            name: scope.confirmOk,
                            action: 'YES',
                            position: 'center',
                            cssClass: 'btn_primary'
                        }
                    ]
                };

                if (scope.confirmTitle) {
                    data.title = scope.confirmTitle;
                }

                if (scope.templateUrl) {
                    data.templateUrl = scope.templateUrl;
                }

                if (scope.size) {
                    data.size = scope.size;
                }

                this.$choose(data)
                    .then(function (actionType) {
                        if (actionType === 'YES') {
                            scope.ngClick();
                        }
                    });
            });
    };
}