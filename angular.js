<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <title>Namespace Status</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
    <script src="app.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f9;
            margin: 0;
            padding: 20px;
        }

        h1 {
            color: #333;
            text-align: center;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            margin: 20px 0;
        }

        th, td {
            padding: 12px;
            text-align: left;
            border: 1px solid #ddd;
        }

        th {
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }

        tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        tr:hover {
            background-color: #ddd;
        }

        table {
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }

        .filter-box {
            margin-bottom: 20px;
            text-align: center;
        }

        .filter-box input, .filter-box select {
            padding: 10px;
            font-size: 16px;
            width: 80%;
            max-width: 600px;
            margin-bottom: 10px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }

        .dropdown-filter {
            padding: 5px;
            margin-right: 5px;
        }
    </style>
</head>
<body ng-controller="NamespaceStatusController">
    <h1>Namespace Status</h1>

    <!-- Global Search Bar -->
    <div class="filter-box">
        <input type="text" ng-model="globalSearchText" placeholder="Search namespace status...">
    </div>

    <table>
        <thead>
            <tr>
                <th ng-click="sortColumn('s_no')">SNO</th>
                <th ng-click="sortColumn('nf_type')">NF Type
                    <select class="dropdown-filter" ng-model="filters.nf_type" ng-options="nf_type for nf_type in uniqueValues('nf_type')"></select>
                </th>
                <th ng-click="sortColumn('release_tag')">Release Tag
                    <select class="dropdown-filter" ng-model="filters.release_tag" ng-options="release_tag for release_tag in uniqueValues('release_tag')"></select>
                </th>
                <th ng-click="sortColumn('ats_release_tag')">ATS Release Tag</th>
                <th ng-click="sortColumn('namespace')">Namespace
                    <select class="dropdown-filter" ng-model="filters.namespace" ng-options="namespace for namespace in uniqueValues('namespace')"></select>
                </th>
                <th ng-click="sortColumn('is_csar')">Is CSAR</th>
                <th ng-click="sortColumn('is_asm')">Is ASM</th>
                <th ng-click="sortColumn('is_tgz')">Is TGZ</th>
                <th ng-click="sortColumn('is_internal_ats')">Is Internal ATS</th>
                <th ng-click="sortColumn('is_occ')">Is OCC</th>
                <th ng-click="sortColumn('is_pcf')">Is PCF</th>
                <th ng-click="sortColumn('is_converged')">Is Converged</th>
                <th ng-click="sortColumn('upg_rollback')">Upg Rollback</th>
                <th ng-click="sortColumn('official_build')">Official Build</th>
                <th ng-click="sortColumn('priority')">Priority</th>
                <th ng-click="sortColumn('status')">Status</th>
                <th ng-click="sortColumn('date')">Date</th>
                <th>Delete Namespace</th>
            </tr>
        </thead>
        <tbody>
            <tr ng-repeat="item in namespaceStatuses | filter:globalSearchText | filter:filters | orderBy:sortKey:reverse">
                <td>{{ item.s_no }}</td>
                <td>{{ item.nf_type }}</td>
                <td>{{ item.release_tag }}</td>
                <td>{{ item.ats_release_tag }}</td>
                <td>{{ item.namespace }}</td>
                <td>{{ item.is_csar }}</td>
                <td>{{ item.is_asm }}</td>
                <td>{{ item.is_tgz }}</td>
                <td>{{ item.is_internal_ats }}</td>
                <td>{{ item.is_occ }}</td>
                <td>{{ item.is_pcf }}</td>
                <td>{{ item.is_converged }}</td>
                <td>{{ item.upg_rollback }}</td>
                <td>{{ item.official_build }}</td>
                <td>{{ item.priority }}</td>
                <td>{{ item.status }}</td>
                <td>{{ item.date }}</td>
                <td>
                    <button class="delete-btn" ng-click="confirmDelete(item.namespace)">Delete</button>
                </td>
            </tr>
        </tbody>
    </table>
</body>
</html>
