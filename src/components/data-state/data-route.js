import template from './data.html!text';

function articlesRouteConfig($stateProvider) {
    $stateProvider
        .state('app.data', {
            url: 'data',
            views: {
                application: {
                    template: template,
                    controller: 'DataController as data'
                }
            }
        });
}

export default [
    '$stateProvider',
    articlesRouteConfig
];
