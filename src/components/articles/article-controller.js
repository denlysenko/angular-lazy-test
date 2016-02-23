import _ from 'lodash';

class ArticleController {
	constructor($stateParams, ArticlesService) {
		this._$stateParams = $stateParams;

		ArticlesService.getById(this._$stateParams)
			.then(function(article) {
				this.selected = articel;
			});
	}
}

export default [
		'$stateParams',
		'ArticlesService',
    ArticleController
];
