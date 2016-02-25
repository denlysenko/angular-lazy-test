describe('Main e2e test', () => {
    var h3 = element(by.css('.jumbotron h3'));
    var dataBtn = element(by.css('.index-state .btn'));
    var success = element(by.css('.data .alert-success'));

    beforeEach(function () {
        //browser.ignoreSynchronization = true;
        browser.get(browser.baseUrl);
    });

    it('should pass the dummy test to verify the protractor setup', () => {
        expect(true).toBe(true);
    });

    it('should have a title \"Angular lazy test\"', function() {
        expect(browser.getTitle()).toEqual('Angular lazy test');
    });

    it('should have a header \"Welcome!\"', function() {
        expect(h3.getText()).toEqual('Welcome!');
    });

    it('should have a button', function() {
        expect(dataBtn.getText()).toEqual('Get data');
    });

    it('should get data from API', function() {
        dataBtn.click();
        expect(success.getText()).toEqual('Got it!');
    });
});
