import './index-state.css!';
import angular from 'angular';
import 'angular-ui-router';
import IndexStateController from './index-state-controller';
import indexRouteConfig from './index-route';

const dependencies = [
    'ui.router'
];

export default angular
    .module('index-state-component', dependencies)
    .controller('IndexStateController', IndexStateController)
    .config(indexRouteConfig);
