class DataController {

	constructor($location, DataService, $log) {
		this._$location = $location;
		this._$log = $log;

		DataService.get()
			.then((response) => {
				this.data = response.data;
			})
			.catch((err) => {
				this._$log.error(err.data);
			});
	}
}

export default [
		'$location',
		'DataService',
		'$log',
    DataController
];
