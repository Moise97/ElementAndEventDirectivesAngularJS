angular.module("directives",[])
.controller("mainCtrl", ["$scope", "dataService",
    function($scope, dataService){
        dataService.getData()
            .then(function(result){
                $scope.dates = result;
            })
            .catch(error => {
                throw new MainCtrlDataException(error);
            })
        }
    ]
)