#! /usr/bin/env node

const { Command } = require("commander");
const figlet = require("figlet");

const program = new Command();

program
    .version("1.0.0")
    .description("An example CLI tool that displays a greeting")
    .option("-g, --greeting  <value>", "Display a greeting")
    .parse(process.argv);

const options = program.opts();

function greeting(name: string) {
    console.log(figlet.textSync(`Hello ${name}`));
}

if (options.greeting) {
    greeting(options.greeting);
}