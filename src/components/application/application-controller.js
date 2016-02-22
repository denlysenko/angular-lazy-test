class ApplicationController {
	
	constructor($location) {
		this._$location = $location;
	}

	checkPath(path) {
		return path === this._$location.path();
	}
}

export default [
		'$location',
    ApplicationController
];
