define(function(require) {
    
    var PageView = require('../src/page-view'),
        expect = require('expect'),
        pageView = new PageView();
    
    describe('PageView', function() {
        describe('API', function() {
            it('init', function() {
                expect(typeof pageView.init).to.equal('function');
            });
            
            it('getStatus', function() {
                expect(typeof pageView.getStatus).to.equal('function');
            });
        });
        
        describe('getStatus()', function() {
            it('getStatus() should return string of status', function() {
                expect(typeof pageView.getStatus()).to.equal('string')
            });
        });
    });
});
