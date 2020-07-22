#!/usr/bin/env node

const assignTasks = require('./src/assign-tasks');
const buildReport = require('./src/build-report');

const tasks = [
    { name: 'A', points: 5 },
    { name: 'B', points: 4 },
    { name: 'C', points: 1 },
    { name: 'D', points: 2 },
    { name: 'E', points: 7 },
    { name: 'F', points: 8 },
    { name: 'G', points: 3 }
];

const assignments = assignTasks(tasks, 3);
const report = buildReport(tasks, assignments);
console.log(report);
