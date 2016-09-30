/// <reference path="interfaces/ICancelationScope" />
export class BaseDialogDirective {

    constructor(public $choose: any) {

    }

    openDialog(scope: ng.IScope, element: ng.IAugmentedJQuery) {
        element
            .unbind('click')
            .bind('click', ($event) => {
                var data;

                $event.preventDefault();

                if (scope['confirmIf'] === false) {
                    scope.$apply(scope['ngClick']);
                    return;
                }

                data = {
                    text: scope['message'],
                    buttons: [
                        {
                            name: scope['confirmCancel'],
                            action: 'NO',
                            position: 'center'
                        },
                        {
                            name: scope['confirmOk'],
                            action: 'YES',
                            position: 'center',
                            cssClass: 'btn_primary'
                        }
                    ]
                };

                if (scope['confirmTitle']) {
                    data.title = scope['confirmTitle'];
                }

                if (scope['templateUrl']) {
                    data.templateUrl = scope['templateUrl'];
                }

                if (scope['size']) {
                    data.size = scope['size'];
                }

                this.$choose(data)
                    .then(function (actionType) {
                        if (actionType === 'YES') {
                            scope['ngClick']();
                        }
                    });
            });
    }
}