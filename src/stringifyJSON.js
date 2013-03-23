var stringifyJSON = function(input) {
  var inputType = typeof input;
  if(input === null) return 'null';

  var sanitizeString = function(input) {
    var result = input;
    var escapeChars = {
      '\\\\': '\\\\',
      '\"': '\\\"',
      '\n': '\\\n',
      '\r': '\\\r',
      '\t': '\\\t',
      '\b': '\\\b',
      '\f': '\\\f'
    };

    for(match in escapeChars) {
      var screener = new RegExp(match,'g');
      result = result.replace(screener, escapeChars[match]);
    }
    return result;
  };

  // Stringify method to parse out array objects
  var arrayStringify = function(array) {
    return '[' + _(array).map(function(i) {
      return stringifyJSON(i);
    }).join(',') + ']';
  };

  // Checks if an object has invalid keys
  var isValidKey = function(value, key) {
    return (key === 'undefined' || typeof value === 'function') ?
      true : false;
  }

  // Stringify method to parse out objects
  var objectStringify = function(object) {
    // Return empty object string if invalid keys, or recursively iterate
    // through each key/value pair
    return _(object).every(isValidKey) ? '{}' :
      '{' + _(object).map(function(value, key) {
          return stringifyJSON(key) + ':' + stringifyJSON(value);
      }).join(',') + '}';
  };

  // Recursive call depending on input type
  switch(inputType) {
    case 'string':
        input = sanitizeString(input);
      return "\"" + input + "\"";
      break;
    case 'number':
      return '' + input;
      break;
    case 'boolean':
      return '' + input;
      break;
    case 'undefined':
      return undefined;
      break;
    case 'object':
      if(input instanceof Array) return arrayStringify(input);
      else return objectStringify(input);
      break;
    default: input + '';
      return;
  }
}
