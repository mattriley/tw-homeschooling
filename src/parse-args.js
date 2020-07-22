module.exports = args => {

    const assignUniqueNames = tasks => {
        return tasks.map((task, i) => {
            return { ...task, name: String.fromCharCode(65 + i) };
        });
    };

    const tasks = args.map(arg => {
        const [points] = arg.match(/\d+$/);
        const name = arg.slice(0, -points.length).trim();
        return { name, points: parseInt(points) };
    });

    const names = tasks.map(t => t.name);
    
    const everyBlank = names.every(n => !n);
    if (everyBlank) return { tasks: assignUniqueNames(tasks) };
    
    const someBlank = names.some(n => !n);
    if (someBlank) return { error: 'Blank name found. Tasks must be all named or unnamed.' };

    const hasDuplicates = new Set(names).size !== tasks.length;
    if (hasDuplicates) return { error: 'Duplicate names found. Task names must be unique.' };

    return { tasks };
};

