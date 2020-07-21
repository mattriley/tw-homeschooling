const sumPoints = tasks => tasks.reduce((sum, t) => sum + t.points, 0);

module.exports = (tasks, childCount) => {
    if (tasks.some(t => t.points <= 0)) return [];
    
    const sortedTasks = tasks.slice().sort((a, b) => b.points - a.points);
    const totalPoints = sumPoints(sortedTasks);
    const pointsPerChild = totalPoints / childCount;
    const emptyBuckets = Array.from({ length: childCount }, () => []);

    return sortedTasks.reduce((buckets, task) => {
        if (!buckets.length) return buckets;
        const bucketIndex = buckets.findIndex(b => sumPoints(b) + task.points <= pointsPerChild);
        if (bucketIndex === -1) return [];
        return Object.assign([], buckets, { [bucketIndex]: [...buckets[bucketIndex], task] });
    }, emptyBuckets);
};
