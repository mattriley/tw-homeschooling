const test = require('tape');
const assignTasks = require('../src/assign-tasks');

test('assigns tasks using example in problem statement', t => {
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

    const expectedAssignments = [
        [{ name: 'F', points: 8 }, { name: 'D', points: 2 }], 
        [{ name: 'E', points: 7 }, { name: 'G', points: 3 }], 
        [{ name: 'A', points: 5 }, { name: 'B', points: 4 }, { name: 'C', points: 1 }]
    ];

    t.deepEqual(assignments, expectedAssignments);
    t.end();
});

test('tasks cannot be evenly assigned', t => {
    const tasks = [
        // { name: 'A', points: 5 },
        { name: 'B', points: 4 },
        { name: 'C', points: 1 },
        { name: 'D', points: 2 },
        { name: 'E', points: 7 },
        { name: 'F', points: 8 },
        { name: 'G', points: 3 }
    ];

    const assignments = assignTasks(tasks, 3);

    const expectedAssignments = [];

    t.deepEqual(assignments, expectedAssignments);
    t.end();
});

test('less tasks than children', t => {
    const tasks = [
        { name: 'A', points: 5 },
        { name: 'B', points: 4 }
    ];

    const assignments = assignTasks(tasks, 3);

    const expectedAssignments = [];

    t.deepEqual(assignments, expectedAssignments);
    t.end();
});
