// 1
const ansi = require("ansi");
const cursor = ansi(process.stdout);
cursor.beep();

// 2
const request = require("request");
request
    .get("http://whatismyip.akamai.com/")
    .on('response', function (response) {
        console.log(response.statusCode); // 200
    });


// 3
const clicolor = require('cli-color');
console.log(clicolor.red('Text in red'));
console.log(clicolor.yellow('Text in yellow'));
console.log(clicolor.green('Text in green'));
