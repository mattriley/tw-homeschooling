module.exports = args => {

    const assignUniqueTaskNames = tasks => {
        return tasks.map((task, i) => {
            const newName = String.fromCharCode(65 + i) + task.name;
            return { ...task, name: newName };
        });
    };

    const tasks = args.map(arg => {
        const [points] = arg.match(/\d+$/);
        const name = arg.slice(0, -points.length).trim();
        return { name, points: parseInt(points) };
    });

    const names = tasks.map(t => t.name);
    const uniquelyNamed = new Set(names).size === tasks.length;
    return uniquelyNamed ? tasks : assignUniqueTaskNames(tasks);

};

