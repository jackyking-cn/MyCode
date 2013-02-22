define(function(require, exports, module) {
    var expect = require('expect');
    
    describe('Test', function() {
        it('true', function() {
            expect('test').to.equal('test');
        });
        it('false', function() {
            expect(true).not.to.equal(false);
        });
    });
    
    describe('Test1', function() {
        it('equal', function() {
            expect('1').not.to.be(1);
        });
    });
});