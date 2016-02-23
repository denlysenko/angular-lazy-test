import './articles.css!';
import angular from 'angular';
import 'angular-ui-router';
import ArticlesController from './articles-controller';
import ArticleController from './article-controller';
import UpdateController from './article-update-controller';
import articlesDirective from './articles-directive';
import articlesRouting from './articles-route';
import ArticlesService from './articles-service';

const dependencies = [
	'ui.router'
];

export default angular
    .module('articles-component', dependencies)
    .service('ArticlesService', ArticlesService)
    .controller('ArticlesController', ArticlesController)
    .controller('ArticleController', ArticleController)
    .controller('UpdateController', UpdateController)
    .directive('articles', articlesDirective)
    .config(articlesRouting);
