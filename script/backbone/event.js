seajs.use(['_', 'Backbone'], function(_, Backbone) {
    var object = {};
    
    _.extend(object, Backbone.Events);
    
    object.on('alert', function(msg) {
        console.log(arguments);
        _.each(arguments, function(msg) {
            alert('event args:' + msg);
        })
    });
    
    object.trigger('alert', ['a', 'b'], [], null, {});
});

define(function(require, exports, module) {
    
});