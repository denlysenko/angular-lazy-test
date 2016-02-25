import './data.css!';
import angular from 'angular';
import 'angular-ui-router';
import DataController from './data-controller';
import dataRouting from './data-route';
import DataService from './data-service';

const dependencies = [
	'ui.router'
];

export default angular
    .module('articles-component', dependencies)
    .service('DataService', DataService)
    .controller('DataController', DataController)
    .config(dataRouting);
