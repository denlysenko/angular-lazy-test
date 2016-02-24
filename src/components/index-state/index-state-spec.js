import angular from 'angular';
import 'angular-mocks';
import component from './index';

describe('Index State', () => {
    var scope,
    $location;

    beforeEach(angular.mock.module(component.name));
    beforeEach(inject($controller, $rootScope, _$location_) => {
    	scope = $rootScope.$new();
    	$location = _$location_;
    	IndexStateController = $controller('IndexStateController as indexState', {
    		$scope: scope
    	});
    });

    it('should redirect to /data when getData() was called', () => {
    		scope.indexState.getData();
        expect($location.path()).toBe('/data');
    });
});
