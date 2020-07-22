module.exports = args => {

    const assignUniqueNames = tasks => {
        return tasks.map((task, i) => {
            const name = String.fromCharCode(65 + i) + task.name;
            return { ...task, name };
        });
    };

    const tasks = args.map(arg => {
        const [points] = arg.match(/\d+$/);
        const name = arg.slice(0, -points.length).trim();
        return { name, points: parseInt(points) };
    });

    const names = tasks.map(t => t.name);
    const noneBlank = names.every(n => n);
    const allUnique = new Set(names).size === tasks.length;
    return noneBlank && allUnique ? tasks : assignUniqueNames(tasks);

};

