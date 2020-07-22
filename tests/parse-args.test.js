const test = require('tape');
const parseArgs = require('../src/parse-args');

test('parses task names and points', t => {
    const args = ['A5', 'B4', 'C1', 'D2', 'E7', 'F8', 'G3'];
    const tasks = parseArgs(args);

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
    const tasks = parseArgs(args);

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

test('prepends letter to name when any are not unique', t => {
    const args = ['FOO5', '4', '1', '2', '7', '8', '3'];
    const tasks = parseArgs(args);

    const expectedTasks = [
        { name: 'AFOO', points: 5 },
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

test('prepends letter to name when any are blank', t => {
    const args = ['5', 'B4', 'C1', 'D2', 'E7', 'F8', 'G3'];
    const tasks = parseArgs(args);

    const expectedTasks = [
        { name: 'A', points: 5 },
        { name: 'BB', points: 4 },
        { name: 'CC', points: 1 },
        { name: 'DD', points: 2 },
        { name: 'EE', points: 7 },
        { name: 'FF', points: 8 },
        { name: 'GG', points: 3 }
    ];

    t.deepEqual(tasks, expectedTasks);
    t.end();
});