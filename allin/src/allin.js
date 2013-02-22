define(function(require, exports, module) {
    var Allin = function() {
        //alert('init');
    };
    
    Allin.init = function() {
        return new Allin();
    };
    
    return Allin;
});