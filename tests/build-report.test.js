const test = require('tape');
const assignTasks = require('../src/assign-tasks');
const buildReport = require('../src/build-report');

test('builds a success report', t => {
    const tasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 1 },
        { name: 'C', points: 1 }
    ];

    const assignments = assignTasks(tasks, 3);
    const report = buildReport(3, tasks, assignments);
    const expected = 'Number of children: 3\nTask A: 1 points\nTask B: 1 points\nTask C: 1 points\nYes!\nChild 1: Task A (1 points) = 1 points\nChild 2: Task B (1 points) = 1 points\nChild 3: Task C (1 points) = 1 points';
    t.deepEqual(report, expected);
    t.end();
});

test('builds a failure report', t => {
    const tasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 1 }
    ];

    const assignments = assignTasks(tasks, 3);
    const report = buildReport(3, tasks, assignments);
    const expected = 'Number of children: 3\nTask A: 1 points\nTask B: 1 points\nNo!';
    t.deepEqual(report, expected);
    t.end();
});
