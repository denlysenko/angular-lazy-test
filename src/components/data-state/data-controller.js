class DataController {

	constructor($location, DataService) {
		this._$location = $location;

		DataService.get()
			.then((response) => {
				this.data = response.data;
			});
	}
}

export default [
		'$location',
		'DataService',
    DataController
];
