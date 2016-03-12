import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('DataController', () => {

	var scope,
		DataController,
        $httpBackend,
        DataService;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject(($controller, $rootScope, _$httpBackend_, _DataService_) => {
    	scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        DataService = _DataService_;
    	DataController = $controller('DataController as data', {
    		$scope: scope,
            DataService: DataService
    	});
    }));

    it('should get data', () => {

        var mockResponse = 'Response';
        
        $httpBackend.when('GET', 'http://vgb-main-server.cloudapp.net:8080/webportal/webapi/myresource').respond(200, mockResponse);
        DataService.get();
        $httpBackend.flush();
        expect(scope.data.data).toBe('Response');
    });

});
