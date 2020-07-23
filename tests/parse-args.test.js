const test = require('tape');
const parseArgs = require('../src/parse-args');

test('parses task names and points', t => {
    const args = ['A1', 'B2', 'C3'];
    const { tasks } = parseArgs(args);

    const expectedTasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 2 },
        { name: 'C', points: 3 }
    ];

    t.deepEqual(tasks, expectedTasks);
    t.end();
});

test('assigns unique task names when no names provided', t => {
    const args = ['1', '2', '3'];
    const { tasks } = parseArgs(args);

    const expectedTasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 2 },
        { name: 'C', points: 3 }
    ];

    t.deepEqual(tasks, expectedTasks);
    t.end();
});

test('no tasks is not allowed', t => {
    const args = [];
    const { error } = parseArgs(args);
    const expectedError = 'No tasks found. At least one task is required.';
    t.deepEqual(error, expectedError);
    t.end();
});

test('combination of named and unnamed tasks not allowed', t => {
    const args = ['A1', '2', '3'];
    const { error } = parseArgs(args);
    const expectedError = 'Blank name found. Tasks must be all named or unnamed.';
    t.deepEqual(error, expectedError);
    t.end();
});

test('duplicate tasks names not allowed', t => {
    const args = ['A1', 'A2', 'A3'];
    const { error } = parseArgs(args);
    const expectedError = 'Duplicate names found. Task names must be unique.';
    t.deepEqual(error, expectedError);
    t.end();
});

test('blank points not allowed', t => {
    const args = ['A', 'B2', 'C3'];
    const { error } = parseArgs(args);
    const expectedError = 'Blank or zero points found. Points must be greater than zero.';
    t.deepEqual(error, expectedError);
    t.end();
});

test('zero points not allowed', t => {
    const args = ['A0', 'B2', 'C3'];
    const { error } = parseArgs(args);
    const expectedError = 'Blank or zero points found. Points must be greater than zero.';
    t.deepEqual(error, expectedError);
    t.end();
});
