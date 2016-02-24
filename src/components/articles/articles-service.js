class ArticlesService {
	constructor($http) {
		this._$http = $http;
	}

	getAll() {
		return this._$http.get('/articles');
	}

	getById(id) {
		return this._$http.get('/articles/' + id);
	}

	update(id, data) {
		return this._$http.put('/articles/' + id, data);
	}

	destroy(id) {
		return this._$http.delete('/articles/' + id);
	}
}

export default [
	'$http',
	ArticlesService
];