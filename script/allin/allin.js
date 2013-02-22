define(function(require, exports, module) {
    var $ = require('$'),
        count = 0,
        Allin = function() {
            this.count = count++;
            this.init();
        };
    
    Allin.prototype.init = function() {
        $('#test').click(function() {
            $(this).animate({
                height: 0,
                lineHeight: 0,
                width: 0,
                opacity: 0
            }, {
                duration: 'slow',
                complete: function() {
                    $(this).animate({
                        height: '200px',
                        lineHeight: '200px',
                        width: '200px',
                        opacity: 1
                    }, 'fast');
                }
            });
        });
    };
    
    Allin.prototype._test = 'test';
    
    exports.init = function() {
        new Allin();
    }
    
    //module.exports = new Allin;
});