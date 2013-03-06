define(function(require) {

    var Allin = require('../src/allin'),
        expect = require('expect'),
        allin;

    describe('Allin', function() {
        describe('API', function() {
            it('init', function() {
                expect(Allin.init).to.be.a('function');
            });
        });

        describe('init()', function() {
            it('init() should return object that instance of Allin', function() {
                allin = Allin.init();
                expect(allin instanceof Allin).to.ok();
            });
        });
    });

});

