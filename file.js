/* eslint-env node */

const fs = require('fs');
var {analyzeTask} = require('./index');

var myArgs = process.argv.slice(2);
var body = "";

async function print() {
    const fileContent = await fs.promises.readFile(myArgs[0]);
    body = fileContent.toString().replace(/\\n/g, "\n");
    console.log(analyzeTask(body));
  }

  print().catch(console.error);