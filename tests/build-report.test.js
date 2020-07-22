const test = require('tape');
const assignTasks = require('../src/assign-tasks');
const buildReport = require('../src/build-report');

test('builds a success report', t => {
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

    const expected = 'Task A: 5 points\nTask B: 4 points\nTask C: 1 points\nTask D: 2 points\nTask E: 7 points\nTask F: 8 points\nTask G: 3 points\nYes!\nChild 1: Task F (8 points) + Task D (2 points) = 10 points\nChild 2: Task E (7 points) + Task G (3 points) = 10 points\nChild 3: Task A (5 points) + Task B (4 points) + Task C (1 points) = 10 points';

    t.deepEqual(report, expected);
    t.end();
});
