import articlesTemplate from './articles.html!text';
import articleTemplate from './article.html!text';
import articleUpdate from './article-update.html!text';

function articlesRouteConfig($stateProvider) {
    $stateProvider
        .state('app.articles', {
            url: 'articles',
            views: {
                application: {
                    template: articlesTemplate,
                    controller: 'ArticlesController as articles'
                }
            }
        })
        .state('app.article', {
            url: 'articles/:id',
            views: {
                application: {
                    template: articleTemplate,
                    controller: 'ArticleController as article'
                }
            }
        })
        .state('app.update', {
            url: 'articles/update/:id',
            views: {
                application: {
                    template: articleUpdate,
                    controller: 'UpdateController as update'
                }
            }
        });
}

export default [
    '$stateProvider',
    articlesRouteConfig
];
