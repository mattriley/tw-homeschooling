const test = require('tape');
const parseArgs = require('../src/parse-args');

test('builds a success report', t => {
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
