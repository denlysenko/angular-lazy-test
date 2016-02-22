class ArticlesController {

	constructor($location) {
		this._$location = $location;
		this.list = [
			{
				id: 1,
				title: 'Title 1',
				description: 'Description 1',
				author: 'Author 1',
				date: new Date('2015-12-25')
			},
			{
				id: 2,
				title: 'Title 2',
				description: 'Description 2',
				author: 'Author 1',
				date: new Date('2015-12-29')
			},
			{
				id: 3,
				title: 'Title 3',
				description: 'Description 3',
				author: 'Author 2',
				date: new Date('2016-01-25')
			},
			{
				id: 4,
				title: 'Title 4',
				description: 'Description 4',
				author: 'Author 2',
				date: new Date('2016-01-05')
			},
			{
				id: 5,
				title: 'Title 5',
				description: 'Description 5',
				author: 'Author 1',
				
				date: new Date('2015-12-25')
			},
			{
				id: 6,
				title: 'Title 6',
				description: 'Description 6',
				author: 'Author 1',
				date: new Date('2016-02-25')
			},
		];
	}

	removeArticle(article) {
		this.list.splice(this.list.indexOf(article), 1);
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
    ArticlesController
];
