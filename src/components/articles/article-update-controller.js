import _ from 'lodash';

class UpdateController {
	constructor($stateParams, $location, ArticlesService) {
		this._$stateParams = $stateParams;
		this._$location = $location;

		ArticlesService.getById(this._$stateParams.id)
			.then(function(article) {
				this.article = article;
			});
	}

	save() {

		ArticlesService.update(this.article.id, article)
			.then(function() {
				this._$location.path('/articles');
			});
	}
}

export default [
		'$stateParams',
		'$location',
		'ArticlesService',
		UpdateController
];
