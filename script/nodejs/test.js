var Test = function() {
    console.log('constructor');
};

Test.prototype.test = function() {
    console.log('test');
}

module.exports = Test;
