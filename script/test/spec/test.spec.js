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
        it('number and string', function() {
            expect('1').not.to.be(1);
        });
        it('object', function() {
            expect({}).not.to.be({});
        });
    });

    describe('Eql', function() {
        it('object', function() {
            expect({a:1,b:2}).to.eql({b:2,a:1});
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

    describe('Slow', function() {
        this.slow(100);
        it('100ms', function(done) {
            setTimeout(done, 150);
        });
    });

    describe('Timeout', function() {
        this.timeout(100);
        it('100ms', function(done) {
            setTimeout(done, 50);
        });
    });
});