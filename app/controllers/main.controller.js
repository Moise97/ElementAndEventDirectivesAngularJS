angular.module("directives",[])
.controller("mainCtrl", ["$scope", "dataService",
    function($scope, dataService){
        dataService.getData()
            .then(function(result){
                $scope.dates = result;
            })
            .catch(error => {
                throw new MainCtrlDataException(error);
            });

        $scope.buttonNames = ['Red', 'Green', 'Blue'];

        $scope.settings = {
            rowColor: "Blue",
            columnColor: "Green"
        };

        $scope.handleEvent = function(event) {
            console.log(event.type);
            $scope.settings.columnColor = event.type == "mouseover" ? "Green" : "Blue";
        }

    }]
)