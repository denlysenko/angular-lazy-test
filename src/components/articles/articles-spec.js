import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('ArticlesController', () => {

	var scope,
		ArticlesController,
        ArticlesService,
        $httpBackend;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject($controller, $rootScope, _ArticlesService_, _$httpBackend_) => {
    	scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
    	ArticlesController = $controller('ArticlesController as articles', {
    		$scope: scope,
            ArticlesService: _ArticlesService_
    	});
    });

    it('should get articles list', () => {
        var response = [
            {id: 1, title: 'Article 1'},
            {id: 2, title: 'Article 2'}
        ];

        $httpBackend.when('GET', '/articles').respond(200, response);
        $httpBackend.flush();
        expect(scope.articles.length).toEqual(6);
    });

    it('should remove article and splice articles list when removeArticle() was called', () => {
    	var article = {
			id: 1,
			title: 'Title 1',
			description: 'Description 1',
			author: 'Author 1',
			date: new Date('2015-12-25')
		};
        var response = [
            {id: 1, title: 'Article 1'},
            {id: 2, title: 'Article 2'}
        ];

        $httpBackend.when('GET', '/articles').respond(200, response);
        $httpBackend.when('DELETE', '/articles/1').respond(200);
        scope.articles.removeArticle(article);
        $httpBackend.flush();
		expect(scope.articles.length).toEqual(1);
    });


});

describe('ArticleController', () => {
    var scope,
        ArticleController,
        ArticlesService,
        $httpBackend,
        $stateParams;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject($controller, $rootScope, _ArticlesService_, _$httpBackend_, _$stateParams_) => {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $stateParams = _$stateParams_;
        $stateParams.id = 1;
        ArticleController = $controller('ArticleController as article', {
            $scope: scope,
            ArticlesService: _ArticlesService_,
            $stateParams: $stateParams
        });
    });

    it('should fetch article by its id', () => {
        var article = {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            author: 'Author 1',
            date: new Date('2015-12-25')
        };

        $httpBackend.when('GET', '/articles/1').respond(200, response);
        $httpBackend.flush();

        expect(scope.article).toBeDefined();
    });

});

describe('UpdateController', () => {
    var scope,
        UpdateController,
        ArticlesService,
        $httpBackend,
        $stateParams,
        $location;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject($controller, $rootScope, _ArticlesService_, _$httpBackend_, _$stateParams_, _$location_) => {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        $location = _$location_;
        $stateParams = _$stateParams_;
        $stateParams.id = 1;
        UpdateController = $controller('UpdateController as update', {
            $scope: scope,
            ArticlesService: _ArticlesService_,
            $stateParams: $stateParams
        });
    });

    it('should fetch article by its id', () => {
        var article = {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            author: 'Author 1',
            date: new Date('2015-12-25')
        };

        $httpBackend.when('GET', '/articles/1').respond(200, response);
        $httpBackend.flush();

        expect(scope.article).toBeDefined();
    });

    it('should update article and redirect to /articles', () => {
        var article = {
            id: 1,
            title: 'Title 1',
            description: 'Description 1',
            author: 'Author 1',
            date: new Date('2015-12-25')
        };

        $httpBackend.when('PUT', '/articles/1').respond(200, response);
        scope.update.save();
        $httpBackend.flush();
        expect($location.path()).toBe('/articles');
    });
});
