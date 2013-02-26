/**
 * 单例模式
 */
(function(J) {
	J.HistoryManager = (function() {
		var History = function() {
			this.history = location.hash;
		};
		
		var _history = null;
		
		var init = function( config ) {
			if (!_history) {
				_history = new History( config );
			}
			return _history;
		};
		return {
			init: init
		}
	})();
})(Joo);