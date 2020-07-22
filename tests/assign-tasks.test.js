const test = require('tape');
const assignTasks = require('../src/assign-tasks');

test('assigns tasks evenly using example in problem statement', t => {
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

test('maintains task names even when points are the same', t => {
    const tasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 1 },
        { name: 'C', points: 1 }
    ];

    const assignments = assignTasks(tasks, 3);

    const expectedAssignments = [
        [{ name: 'A', points: 1 }], 
        [{ name: 'B', points: 1 }], 
        [{ name: 'C', points: 1 }]
    ];

    t.deepEqual(assignments, expectedAssignments);
    t.end();
});

test('tasks cannot be evenly assigned when total points not divisable by child count', t => {
    const tasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 2 },
        { name: 'C', points: 4 }
    ];

    const assignments = assignTasks(tasks, 3);
    const expectedAssignments = [];
    t.deepEqual(assignments, expectedAssignments);
    t.end();
});

test('tasks cannot be evenly assigned even when total points are divisable by child count', t => {
    const tasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 2 },
        { name: 'C', points: 3 }
    ];

    const assignments = assignTasks(tasks, 3);
    const expectedAssignments = [];
    t.deepEqual(assignments, expectedAssignments);
    t.end();
});

test('tasks cannot be evenly assigned when there are less tasks than children', t => {
    const tasks = [
        { name: 'A', points: 1 },
        { name: 'B', points: 1 }
    ];

    const assignments = assignTasks(tasks, 3);
    const expectedAssignments = [];
    t.deepEqual(assignments, expectedAssignments);
    t.end();
});
