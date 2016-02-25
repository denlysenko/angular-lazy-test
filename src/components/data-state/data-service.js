class DataService {
	constructor($http) {
		this._$http = $http;
	}

	get() {
		return this._$http.get('http://vgb-main-server.cloudapp.net:8080/webportal/webapi/myresource');
	}
}

export default [
	'$http',
	DataService
];