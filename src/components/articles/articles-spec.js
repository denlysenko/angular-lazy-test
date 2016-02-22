import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('Articles', () => {

		var scope,
				ArticlesController;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject($controller, $rootScope) => {
    	scope = $rootScope.$new();
    	ArticlesController = $controller('ArticlesController as articles', {
    		$scope: scope
    	});
    })

    it('should initialize articles list', () => {
        expect(scope.articles.length).toEqual(6);
    });

    it('should splice articles list when removeArticle() was called', () => {
    	var article = {
				id: 1,
				title: 'Title 1',
				description: 'Description 1',
				author: 'Author 1',
				date: new Date('2015-12-25')
			};

			scope.articles.removeArticle(article);
			expect(scope.articles.length).toEqual(5);
    });
});
