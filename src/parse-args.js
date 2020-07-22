module.exports = args => {

    return args.map(arg => {
        const { name, points } = arg.match(/^(?<name>.+)(?<points>\d+)$/).groups;
        return {
            name: name.trim(),
            points: parseInt(points)
        };
    });

};

