// Augmenting Type to create trim method - trim white space
// From JavaScript: The Good Parts by Doug Crockford - Chapter 4

Function.prototype.method = function (name, func) {
  this.prototype[name] = func;
  return this;
};

Number.method('trim', function() {
  return this.replace(/^\s+|\s+$/g, '');
});
