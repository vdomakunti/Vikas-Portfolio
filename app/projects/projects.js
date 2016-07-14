'use strict';

angular.module('myApp.projects', ['ngRoute'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/projects', {
            templateUrl: 'projects/projects.html',
            controller: 'ProjectsCtrl'
        });
    }])

    .controller('ProjectsCtrl', ['$scope', function ($scope) {

        $scope.isActive = function (viewLocation) {
            var active = (viewLocation === $location.path());
            return active;
        };

        $scope.projects = [
            {
                number: 1,
                name: 'Springboard Wealth',
                description:'Project is focused on retiring the current wealth platform(WealthConnect) '+
                            'and implementing a new platform focused on delivering a highly branded '+
                            'high-end user experience to State Street’s clients and their clients. '+
                            'Technologies used are React.js, React-Router, Bootstrap, Javascript, '+
                            'jQuery, Java, Spring and iBatis.'
            },
            {
                number: 2,
                name: 'Chat messenger',
                description: 'Developed Single server/ Multiple Client chat messenger over sockets using Java, Java Swings GUI.'
            },
            {
                number: 3,
                name: 'Ring election algorithm',
                description: 'A mutli-thread application to implement ring election algorithm using Java.'
            },
            {
                number: 4,
                name: 'Web Application',
                description: 'Devleoped a web application to manage patient records for the hospital using Java, ' +
                'JSP, CSS, and Javascript. Followed agile methods and used Command & Bridge Design Pattern.'
            },
            {
                number: 5,
                name: 'Shopping webpage application',
                description: 'Implemented using PHP and Google Shopping API with session storing features.'
            },
            {
                number: 6,
                name: 'Big data computation',
                description: 'Implemented map reduce paradigm on a large data set consisting of weather data ' +
                             'over the period of 50 years to compute Max, Min, and Mean for the selected fields ' +
                             'and range in the data set.'
            },

            {
                number: 7,
                name : 'Encrypted data sharing',
                description:'Developed a web application to share data securely and share between specific user. ' +
                            'We used EC2 server for hosting and NoSQL database and Twitter Bootstrap for styling ' +
                            'the interface.'
            },

            {
                number: 8,
                name: 'Movie rating application',
                description:'Web application to rate the movies. We used NoSQL for storage and hosted on both AWS and ' +
                            'Google App Engine.'
            },

            {
                number: 9,
                name : 'Single page application',
                description:'Developing static single page application for NGO organization "Saayam" using AngularJS, ' +
                            'Javascript, jQuery, HTML5, and CSS3.'
            }

        ]
    }]);
