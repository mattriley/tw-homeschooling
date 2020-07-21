const sumPoints = tasks => tasks.reduce((sum, t) => sum + t.points, 0);

module.exports = (tasks, childCount) => {
    const sortedTasks = tasks.slice().sort((a, b) => b.points - a.points);
    const totalPoints = sumPoints(sortedTasks);
    const pointsPerChild = totalPoints / childCount;

    const buckets = Array.from({ length: childCount }, () => []);
    const findBucket = task => buckets.find(b => (sumPoints(b) + task.points) <= pointsPerChild);

    for (const task of sortedTasks) {                
        const bucket = findBucket(task);
        bucket.push(task);
    }

    return buckets; 
};
