class DataController {

	constructor($location, DataService) {
		var self = this;
		this._$location = $location;

		DataService.get()
			.then(function(response) {
				self.data = response.data;
			});
	}
}

export default [
		'$location',
		'DataService',
    DataController
];
