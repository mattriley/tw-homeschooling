#!/usr/bin/env node

const parseArgs = require('./src/parse-args');
const assignTasks = require('./src/assign-tasks');
const buildReport = require('./src/build-report');

const { tasks, error } = parseArgs(process.argv.slice(2));

const start = () => {
    const childCount = 3;
    const assignments = assignTasks(tasks, childCount);
    return buildReport(tasks, assignments);
};
    
const output = error || start();
console.log(output);
