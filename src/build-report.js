const sumPoints = require('./sum-points');

module.exports = (tasks, assignments) => {

    const taskLines = tasks.map(t => `Task ${t.name}: ${t.points} points`);

    const assignmentLines = assignments.map((tasks, childIndex) => {
        const taskReport = tasks.map(t => `Task ${t.name} (${t.points} points)`).join(' + ');
        const totalPoints = sumPoints(tasks);
        return `Child ${childIndex + 1}: ${taskReport} = ${totalPoints} points`;
    });

    const successLine = assignments.length ? 'Yes!' : 'No!';

    return [...taskLines, successLine, ...assignmentLines].join('\n');

};
