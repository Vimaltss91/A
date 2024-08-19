var app = angular.module('myApp', []);

app.controller('NamespaceStatusController', function($scope, $http) {
    var apiUrl = 'http://localhost:8000/myapp/api/namespace-status/'; // Absolute URL
    $http.get(apiUrl)
        .then(function(response) {
            $scope.namespaceStatuses = response.data;
        }, function(error) {
            console.log('Error fetching data:', error);
        });
    // Default filter object
    $scope.filters = {};

    // Sort functionality
    $scope.sortKey = 's_no';  // Default sort by SNO
    $scope.reverse = false;  // Default ascending order

    $scope.sortColumn = function(column) {
        if ($scope.sortKey === column) {
            $scope.reverse = !$scope.reverse;  // Toggle sort order if the same column is clicked
        } else {
            $scope.sortKey = column;
            $scope.reverse = false;  // Default to ascending order for new column
        }
    };

    // Function to confirm deletion
    $scope.confirmDelete = function(namespace) {
        if (confirm("Are you sure you want to delete the namespace: " + namespace + "?")) {
            // Send delete request to the backend
            $http.post('http://localhost:8000/myapp/api/delete-namespace/', { namespace: namespace })
                .then(function(response) {
                    alert(response.data.message);
                    // Refresh the namespace statuses after deletion
                    $scope.getNamespaceStatuses();
                }, function(error) {
                    alert("Error deleting namespace: " + namespace);
                });
        }
    };

    // Function to refresh namespace statuses
    $scope.getNamespaceStatuses = function() {
        $http.get('http://localhost:8000/myapp/api/namespace-status/')
            .then(function(response) {
                $scope.namespaceStatuses = response.data;
            });
    };

    // Get unique values for dropdown filters
    $scope.uniqueValues = function(column) {
        var values = [];
        angular.forEach($scope.namespaceStatuses, function(item) {
            if (values.indexOf(item[column]) === -1) {
                values.push(item[column]);
            }
        });
        return values;
    };
});
