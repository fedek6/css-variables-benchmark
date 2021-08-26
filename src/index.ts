import randomColor from "randomcolor";
import fs from "fs";
import path from "path";
import { replaceStatic } from "./static";
import { replaceDynamic } from "./dynamic";

// Params
let count = parseInt(process.argv[3]);

if (!count || isNaN(count)) {
  count = 5000;
}

let reuseFactor = parseInt(process.argv[4]);

if (!reuseFactor || isNaN(reuseFactor)) {
  reuseFactor = 2;
}


console.log("Using template from", path.resolve("./src/template.html"));
console.log("Number of colors", count);

const templatePath = path.resolve("./src/template.html");
const outputPath = path.resolve("./bundle");
const staticFile = path.join(outputPath, "static.html");
const dynamicFile = path.join(outputPath, "dynamic.html");

// Create output dir if does not exist.
if (!fs.existsSync(outputPath)) {
  fs.mkdirSync(outputPath);
}

// Create copies of a template file.
fs.copyFile(templatePath, staticFile, (err) => {
  if (err) throw err;
});


fs.copyFile(templatePath, dynamicFile, (err) => {
  if (err) throw err;
});


// Generate random colors.
const colors = randomColor({
  count
});

replaceStatic(staticFile, colors, reuseFactor)
  .then(() => console.log("Static file is ready!"))
  .catch(e => console.error(e));

replaceDynamic(dynamicFile, colors, reuseFactor)
  .then(() => console.log("Dynamic file is ready!"))
  .catch(e => console.error(e));

console.log("All done!");
