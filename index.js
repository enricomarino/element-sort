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
    var arr = slice.call(el.children).sort(fn);
    var frag = document.createDocumentFragment();
    for (var i = 0; i < arr.length; i++) {
      frag.appendChild(arr[i]);
    }
    el.appendChild(frag);
    return el;
  };

  return element;
};
