module.exports = args => {

    const assignUniqueNames = tasks => {
        return tasks.map((task, i) => {
            return { ...task, name: String.fromCharCode(65 + i) };
        });
    };

    const tasks = args.map(arg => {
        const [points] = arg.match(/\d+$/) || [];
        const name = points ? arg.slice(0, -points.length).trim() : arg;
        return { name, points: parseInt(points || 0) };
    });

    const names = tasks.map(t => t.name);
    const points = tasks.map(t => t.points);

    const everyBlank = names.every(n => !n);
    if (everyBlank) return { tasks: assignUniqueNames(tasks) };
    
    const someBlank = names.some(n => !n);
    if (someBlank) return { error: 'Blank name found. Tasks must be all named or unnamed.' };

    const hasDuplicates = new Set(names).size !== tasks.length;
    if (hasDuplicates) return { error: 'Duplicate names found. Task names must be unique.' };

    const someZeroPoints = points.some(points => points === 0);
    if (someZeroPoints) return { error: 'Blank or zero points found. Points must be greater than zero.' };

    return { tasks };
};

