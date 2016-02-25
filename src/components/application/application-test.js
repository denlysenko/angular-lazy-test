describe('Application Component', () => {
    beforeEach(() => {
        browser.ignoreSynchronization = true;
        browser.get(browser.baseUrl);
    });

    it('should pass the dummy test to verify the protractor setup', () => {
        expect(true).toBe(true);
    });
});
