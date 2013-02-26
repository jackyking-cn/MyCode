/**
 * 
 */

function clone( obj ) {
	function F() {
	};
	F.prototype = obj;
	return new F();
};
var o = {
	a: 1,
	b: 2
};
var oo = clone( o );
alert( 'o.a:' + o.a + '|oo.a:' + oo.a );
oo.a = 'a';
alert( 'o.a:' + o.a + '|oo.a:' + oo.a );

var o1 = {
	a: [ {
		a: 1
	} ]
};
var oo1 = clone( o1 );
alert( 'o1.a[0].a:' + o1.a[0].a + '|oo1.a[0].a:' + oo1.a[0].a );
oo1.a[0].a = 'a';
alert( 'o1.a[0].a:' + o1.a[0].a + '|oo1.a[0].a:' + oo1.a[0].a );