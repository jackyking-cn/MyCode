//seajs.use(['_', 'Backbone'], function(_, Backbone) {
//    var Test = Backbone.Model.extend({
//        idAttribute: '_id'
//    });
//    
//    var test = new Test({
//        _id: '1',
//        name: 'test'
//    });
//    
//    alert(test.get('name'));
//    alert(test.id);
//    alert(test.cid);
//    alert(test.toJSON());
//});

define(function(require, exports, module) {
    var Backbone = require('Backbone');
    
    var Model = Backbone.Model.extend({});
    
    module.exports = Model;
});