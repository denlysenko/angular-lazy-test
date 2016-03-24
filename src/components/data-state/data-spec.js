import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('DataController', () => {

	var scope,
		DataController,
        $httpBackend,
        DataService,
        $log;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject(($controller, $rootScope, _$httpBackend_, _DataService_, _$log_) => {
    	scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        DataService = _DataService_;
        $log = _$log_;
    	DataController = $controller('DataController as data', {
    		$scope: scope,
            DataService: DataService
    	});
    }));

    it('should get data when request was successful', () => {
        
        $httpBackend.when('GET', 'http://vgb-main-server.cloudapp.net:8080/webportal/webapi/myresource').respond(200, 'response');
        DataService.get();
        $httpBackend.flush();
        expect(scope.data.data).toBe('response');

    });

    it('should print error message to console when request was failed', () => {

        $httpBackend.when('GET', 'http://vgb-main-server.cloudapp.net:8080/webportal/webapi/myresource').respond(400, 'error message');
        DataService.get();
        $httpBackend.flush();
        expect($log.error.logs).toContain(['error message']);
        
    });

});
