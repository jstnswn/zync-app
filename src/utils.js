export function getGradeAverage(grades) {
    let sum = 0;
    for (let grade of grades) {
        sum += Number(grade);
    }
    return sum / grades.length;
}

export function formatData(data) {
    return data.map(datum => ({...datum, tags: []}))
}
