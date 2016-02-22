import template from './articles.html!text';

function articlesDirective() {
    return {
        restrict: 'E',
        replace: true,
        template: template,
        controller: 'ArticlesController as articles',
        scope: {

        },
        bindToController: true
    };
}

export default[
    articlesDirective
];
