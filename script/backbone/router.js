define(function(require, exports, module) {
    var Backbone = require('Backbone'),
        View = require('View'),
        Model = require('Model'),
        listView = new View({
            className: 'list',
            model: {
                data: [{
                    url: '#detail/test1',
                    text: 'test1'
                }, {
                    url: '#detail/test2',
                    text: 'test2'
                }]
            }
        }),
        detailView = new View({
            className: 'detail',
            model: {
                data: [{
                    url: '#list',
                    text: 'list'
                }]
            }
        });
    
    var Router = Backbone.Router.extend({
        routes: {
            'list': 'list',
            'list/:query': 'list',
            'list/:query/p:page': 'list',
            'detail/:id': 'detail'
        },
        list: function(query, page) {
            detailView.$el.hide('fast');
            listView.$el.show('slow');
            listView.render();
        },
        detail: function(id) {
            listView.$el.hide('fast');
            detailView.$el.show('slow');
            detailView.render();
        }
    });
    
    module.exports = new Router();
});