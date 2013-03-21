// test cases are described in fixtures.js
describe("stringifyJSON", function(){
  describe("basic types", function() {
    it("properly stringifies a string", function() {
      expect(JSON.stringify('test')).toEqual(stringifyJSON('test'));
    });
    it("properly stringifies undefined and null values", function() {
      expect(JSON.stringify(null)).toEqual(stringifyJSON(null));
      expect(JSON.stringify(undefined)).toEqual(stringifyJSON(undefined));
    });
    it("properly stringifies a boolean", function() {
      expect(JSON.stringify(true)).toEqual(stringifyJSON(true));
      expect(JSON.stringify(false)).toEqual(stringifyJSON(false));
    });
    it("properly stringifies an int", function() {
      expect(JSON.stringify(123)).toEqual(stringifyJSON(123));
      expect(JSON.stringify(12.3)).toEqual(stringifyJSON(12.3));
      expect(JSON.stringify(-123)).toEqual(stringifyJSON(-123));
    });
    it("properly stringifies an array", function() {
      expect(JSON.stringify([1,2,3])).toEqual(stringifyJSON([1,2,3]));
      expect(JSON.stringify([1,'test',3])).toEqual(stringifyJSON([1,'test',3]));
      expect(JSON.stringify([1,2,true])).toEqual(stringifyJSON([1,2,true]));
    });

    // Switching expectant and result paramaters (because we're idiots)
    it("properly stringifies an object", function() {
      expect(stringifyJSON({a:1,b:'test'})).toEqual(JSON.stringify({a:1,b:'test'}));
    });
    it("properly stringifies a function", function() {
      var testFunc = function() { return 10*12; };
      expect(stringifyJSON(testFunc)).toEqual(JSON.stringify(testFunc));
    });
  });

  it("should match the result of calling JSON.stringify", function(){

    validStrings.forEach(function(test){
      var obj = JSON.parse(test);
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      expect(result).toEqual(expected);
    });

    weirdObjects.forEach(function(obj){
      var result = stringifyJSON(obj);
      var expected = JSON.stringify(obj);
      console.log(obj, result, expected);
      expect(result).toEqual(expected);
    });

  });
});
