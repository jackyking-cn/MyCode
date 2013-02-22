define(function(require, exports, module) {
    var Backbone = require('Backbone'),
        Router = require('Router');
    
    exports.init = function() {
        var result = Backbone.history.start({
            root: "/~jackyking/arale/"
        });
        
        if (!result) {
            Router.navigate('list', {
                trigger: true
            });
        }
    };
});