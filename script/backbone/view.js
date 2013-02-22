define(function(require, exports, module) {
    var _ = require('_'),
        Backbone = require('Backbone');
    
    var View = Backbone.View.extend({
        tagName: 'ul',
        className: 'tree',
        template: _.template('<% _.each(data, function(data) { %>'
                + '<li><a href="<%= data.url %>"><%- data.text %></a></li>' + '<% }); %>'),
        render: function() {
            if (!this._rendered) {
                this._rendered = true;
                this.$el.append(this.template(this.model));
                
                Backbone.$('body').append(this.$el);
            }
            return this;
        }
    });
    
    module.exports = View;
});