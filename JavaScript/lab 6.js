function findCommonElements(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const commonElements = [];

    for (const item of set1) {
        if (set2.has(item)) {
            commonElements.push(item);
        }
    }

    return commonElements;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
console.log(findCommonElements(array1, array2));


function countOccurrences(arr) {
    const map = new Map();

    for (const item of arr) {
        if (map.has(item)) {
            map.set(item, map.get(item) + 1);
        } else {
            map.set(item, 1);
        }
    }

    return map;
}

const arr1 = [3, 2, 3, 3, 2, 11];
const arr1Count = countOccurrences(arr1);
console.log(arr1Count);


class Student {
    constructor(name, group) {
        this.name = name;
        this.group = group; // тип string
    }
}

function countStudentsInLargestGroup(students) {
    const groupCounts = new Map();

    for (const student of students) {
        if (groupCounts.has(student.group)) {
            groupCounts.set(student.group, groupCounts.get(student.group) + 1);
        } else {
            groupCounts.set(student.group, 1);
        }
    }

    let maxCount = 0;
    for (const count of groupCounts.values()) {
        if (count > maxCount) {
            maxCount = count;
        }
    }

    return maxCount;
}

const students = [
    new Student('Иван', 'Группа 101'),
    new Student('Петр', 'Группа 102'),
    new Student('Сергей', 'Группа 101'),
    new Student('Анна', 'Группа 103'),
    new Student('Мария', 'Группа 101'),
    new Student('Алексей', 'Группа 102')
];

console.log(countStudentsInLargestGroup(students));