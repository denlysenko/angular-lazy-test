class ArticlesService {
	constructor($http) {
		this._$http = $http;
	}

	getAll() {
		return $http.get('/articles');
	}

	getById(id) {
		return $http.get('/articles/' + id);
	}

	update(id, data) {
		return $http.put('/articles/' + id, data);
	}

	destroy(id) {
		return $http.delete('/articles/' + id);
	}
}

export default [
	'$http',
	ArticlesService
];