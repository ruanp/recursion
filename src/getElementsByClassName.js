// fixme
var getElementsByClassName = function(className){
  var regex = new RegExp('(^|\\b)' + className + '(\\b|$)');
  var output = [];

  var getChildElementsByClassName = function(node, className) {
    if(node.hasChildNodes()) {
      var children = node.children;
      _(children).each(function(child) {
        getChildElementsByClassName(child, className);
      });
    }
    if(node.className.match(regex)) {
      output.push(node);
    }
  }
  getChildElementsByClassName(document.body);
  return output;
}