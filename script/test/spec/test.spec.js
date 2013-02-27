define(function(require, exports, module) {
    var expect = require('expect');
    
    describe('Boolean', function() {
        it('true', function() {
            expect('test').to.equal('test');
        });
        it('false', function() {
            expect(true).not.to.equal(false);
        });
    });
    
    describe('Equal', function() {
        it('equal', function() {
            expect('1').not.to.be(1);
        });
    });

    describe('Exception', function() {
        it('Exception', function() {
            var fn = function() {
                var a
            };
            expect(fn).to.not.throwException();
        });
        it('Error', function() {
            var fn = function() {
                a
            };
            expect(fn).to.throwError();
        });

    });
});