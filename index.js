module.exports = function (element) {

  var array = [];
  var slice = array.slice;
  
  /**
   * sort
   * Sort `el`'s children with the given `fn(a, b)`.
   *
   * @param {Element} el
   * @param {Function} fn
   * @api public
   */

  element.prototype.sort = function (fn) {
    var el = this.el;
    var children = slice.call(el.children).sort(fn);
    var len = children.length;
    var i;
    var fragment = document.createDocumentFragment();
    for (i = 0; i < len; i += 1) {
      fragment.appendChild(children[i]);
    }
    el.appendChild(fragment);
    return this;
  };

  return element;
};
