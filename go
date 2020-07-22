#!/usr/bin/env node

const parseArgs = require('./src/parse-args');
const assignTasks = require('./src/assign-tasks');
const buildReport = require('./src/build-report');

const tasks = parseArgs(process.argv.slice(2));
const assignments = assignTasks(tasks, 3);
const report = buildReport(tasks, assignments);
console.log(report);
