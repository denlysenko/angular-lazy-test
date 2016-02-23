class ArticlesController {

	constructor($location, ArticlesService) {
		this._$location = $location;

		ArticlesService.getAll()
			.then(function(list) {
				this.list = list;
			});
	}

	removeArticle(article) {
		ArticlesService.destroy(article.id)
			.then(function() {
				this.list.splice(this.list.indexOf(article), 1);
			});
	}

	showArticle(id) {
		this._$location.path('/articles/' + id);
	}

	showUpdateForm(id) {
		this._$location.path('/articles/update/' + id);
	}
}

export default [
		'$location',
		'ArticlesService',
    ArticlesController
];
