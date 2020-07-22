const test = require('tape');
const parseArgs = require('../src/parse-args');

test('parses task names and points', t => {
    const args = ['A5', 'B4', 'C1', 'D2', 'E7', 'F8', 'G3'];
    const { tasks } = parseArgs(args);

    const expectedTasks = [
        { name: 'A', points: 5 },
        { name: 'B', points: 4 },
        { name: 'C', points: 1 },
        { name: 'D', points: 2 },
        { name: 'E', points: 7 },
        { name: 'F', points: 8 },
        { name: 'G', points: 3 }
    ];

    t.deepEqual(tasks, expectedTasks);
    t.end();
});

test('assigns unique task names if name not provided', t => {
    const args = ['5', '4', '1', '2', '7', '8', '3'];
    const { tasks } = parseArgs(args);

    const expectedTasks = [
        { name: 'A', points: 5 },
        { name: 'B', points: 4 },
        { name: 'C', points: 1 },
        { name: 'D', points: 2 },
        { name: 'E', points: 7 },
        { name: 'F', points: 8 },
        { name: 'G', points: 3 }
    ];

    t.deepEqual(tasks, expectedTasks);
    t.end();
});

test('combination of named and unnamed not allowed', t => {
    const args = ['A5', '4', 'C1', '2', 'E7', '8', 'F3'];
    const { error } = parseArgs(args);

    const expectedError = 'Blank name found. Tasks must be all named or unnamed.';

    t.deepEqual(error, expectedError);
    t.end();
});

test('prepends letter to name when any are blank', t => {
    const args = ['A5', 'A4', 'B1', 'B2'];
    const { error } = parseArgs(args);

    const expectedError = 'Duplicate names found. Task names must be unique.';

    t.deepEqual(error, expectedError);
    t.end();
});