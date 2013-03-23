// // test cases are described in fixtures.js
// describe("parseJSON", function(){

//   describe("basic types", function() {
//     it("parses a string", function() {
//       var testCase = '"just a stringy little string"';
//       expect(parseJSON(testCase)).toEqual(JSON.parse(testCase));
//     });
//     it("parses a null value", function() {
//       var testCase = "null";
//       expect(parseJSON(testCase)).toEqual(JSON.parse(testCase));
//     });
//     it("parses a number", function() {
//       var testCase = "23574";
//       expect(parseJSON(testCase)).toEqual(JSON.parse(testCase));
//     });
//     it("parses a boolean", function() {
//       var testCase = "true";
//       var otherCase = "false";
//       expect(parseJSON(testCase)).toEqual(JSON.parse(testCase));
//       expect(parseJSON(otherCase)).toEqual(JSON.parse(otherCase));
//     });
//     it("parses an array", function() {
//       var testCase = "[2,3,\"57\",false,4]";
//       expect(parseJSON(testCase)).toEqual(JSON.parse(testCase));
//     });
//     it("parses an object", function() {
//       var testCase = '{"a":1}';
//       var testCase2 = '{"a":1,"b":5}';
//       var testCase3 = '{"a":1,"b":[1,2,4]}';
//       expect(parseJSON(testCase)).toEqual(JSON.parse(testCase));
//       expect(parseJSON(testCase2)).toEqual(JSON.parse(testCase2));
//       expect(parseJSON(testCase3)).toEqual(JSON.parse(testCase3));
//     });
//   });

//   // it("should match the result of calling JSON.parse", function(){
//   //   validStrings.forEach(function(test){
//   //     var result = parseJSON(test);
//   //     var expected = JSON.parse(test);
//   //     var equality = _.isEqual(result, expected); // why can't we use `===` here?
//   //     expect(equality).toBeTruthy();
//   //   });
//   // });

//   // it("should error out sometimes", function(){
//   //   invalidStrings.forEach(function(test){
//   //     // expect(parseJSON(test)).toBe(undefined); // you can use this test if you'd prefer
//   //     expect(function(){
//   //       parseJSON(test);
//   //     }).toThrow();
//   //   });
//   // })

// });
