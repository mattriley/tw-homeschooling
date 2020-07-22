const sumPoints = require('./sum-points');

module.exports = (tasks, childCount) => {
    const sortedTasks = tasks.slice().sort((a, b) => b.points - a.points);
    const totalPoints = sumPoints(sortedTasks);
    const pointsPerChild = totalPoints / childCount;
    const emptyBuckets = Array.from({ length: childCount }, () => []);

    return sortedTasks.reduce((buckets, task) => {
        if (!buckets.length) return buckets;
        const bucketIndex = buckets.findIndex(b => sumPoints(b) + task.points <= pointsPerChild);
        if (bucketIndex === -1) return [];
        return Object.assign([], buckets, { [bucketIndex]: buckets[bucketIndex].concat(task) });
    }, emptyBuckets);
};
