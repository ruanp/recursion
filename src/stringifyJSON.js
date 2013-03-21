var stringifyJSON = function(input) {

  var functionStringify = function(func) {

  };

  // Stringify method to parse out array objects
  var arrayStringify = function(array) {
    // Return empty array string
    if(array.length === 0) return '[]';
    var result = [];

    // Iterate through every element and call stringifyJSON recursively
    for(var i = 0; i < array.length; i++) {
      result.push(stringifyJSON(array[i]));
    }
    return '[' + result.join(',') + ']';
  };

  // Stringify method to parse out objects
  var objectStringify = function(object) {
    // Return empty object string
    if(Object.keys(object).length === 0) return '{}';
    var result = '{';

    // Iterate through every element and call stringifyJSON recursively
    for(key in object) {
      if(object.hasOwnProperty(key)) {
        result += stringifyJSON(key) + ':' + stringifyJSON(object[key]) + ',';
      }
    }
    // Strip off the last comma and add a closing bracket
    return result.slice(0,-1) + '}';
  };

  // Primitive types return toString() method or null
  if (typeof input === 'string') {
    return "\"" + input + "\"";
  } else if (typeof input === 'number') {
    return input.toString();
  } else if (typeof input === 'boolean') {
    return input.toString();
  } else if (input === null) {
    return 'null';
  } else if (typeof input === 'undefined') {
    return undefined;
  } else if (input instanceof Array) {
    return arrayStringify(input);
  } else if (typeof input === 'object') {
    return objectStringify(input);
  }

   else if (typeof input === 'function') {
    return functionStringify(input);
  } else {
    throw new Error('WTF is this?');
  }

}