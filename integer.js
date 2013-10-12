// Augmenting Type to create integer method
// From JavaScript: The Good Parts by Doug Crockford - Chapter 4

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Number.method('integer', function() {
  return Math[this < 0 ? 'ceiling' : 'floor'](this);
});
