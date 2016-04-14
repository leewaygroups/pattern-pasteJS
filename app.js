#!/usr/bin/env node

var pattern = require('./appConfig');
var program = require('commander');

program.version('1.0.0')

program.command('show-patterns')
    .description('show a list of all supported patterns')
    .action(function () {
        console.log(pattern.patternNames());
    });

program.command('pattern-paste [patternName]')
    .description('pattern name of code template to be pasted')
    .action(function (patternName) {
        pattern.paste(patternName);
    });

program.command('*')
    .action(function (env) {
        console.log('Enter a Valid pattern name');
        terminate(true);
    });

program.parse(process.argv);