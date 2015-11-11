 var fs = require("fs");

 var contents = fs.readFileSync("data.json");
 var jsonContent = JSON.parse(contents);

 console.log("Line 1:", jsonContent.default.address.line1);

 jsonContent.default.address.line1 = 'I am a tree';

 console.log("Line 1:", jsonContent.default.address.line1);
//read again to show how we overwrite existing variable (unlike require)
 var contents = fs.readFileSync("data.json");
 var jsonContent = JSON.parse(contents);

 console.log("Line 1:", jsonContent.default.address.line1);