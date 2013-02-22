define(function(require) {

    var Allin = require('../src/allin'),
        expect = require('expect'),
        allin;

    describe('Allin', function() {

        it('API', function() {
            expect(typeof Allin.init).to.equal('function');
        });

        it('Allin.init()', function () {
            allin = Allin.init();
            expect(allin instanceof Allin).to.equal(true);
        });
    });

});

