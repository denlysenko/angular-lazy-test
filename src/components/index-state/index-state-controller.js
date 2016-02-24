class IndexStateController {
	constructor ($location) {
		this._$location = $location;
	}

	getData() {
		this._$location.path('/data')
	}
}

export default [
		'$location',
    IndexStateController
];
