 var fs = require("fs");
// Get content from file
 var contents = fs.readFileSync("data.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON
 console.log("Line 1:", jsonContent.default.address.line1);