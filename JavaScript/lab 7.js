class Student {
    constructor(fullName, averageGrade) {
        this.fullName = fullName;
        this.averageGrade = averageGrade;
    }
}

function shellSortByAverageGrade(students) {
    const n = students.length;
    let gap = Math.floor(n / 2);

    while (gap > 0) {
        for (let i = gap; i < n; i++) {
            const temp = students[i];
            let j = i;

            while (j >= gap && students[j - gap].averageGrade < temp.averageGrade) {
                students[j] = students[j - gap];
                j -= gap;
            }

            students[j] = temp;
        }
        gap = Math.floor(gap / 2);
    }

    return students;
}

function binarySearchByName(students, fullName) {
    const searchName = fullName.toLowerCase();
    let left = 0;
    let right = students.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const studentName = students[mid].fullName.toLowerCase();

        if (studentName === searchName) {
            return students[mid];
        } else if (studentName < searchName) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null;
}

function sortStudentsByName(students) {
    return students.sort((a, b) =>
        a.fullName.toLowerCase().localeCompare(b.fullName.toLowerCase())
    );
}

const students = [
    new Student('Иван Иванов', 4.5),
    new Student('Петр Петров', 3.8),
    new Student('Анна Сидорова', 4.9),
    new Student('Мария Смирнова', 4.2),
    new Student('Алексей Кузнецов', 3.5),
    new Student('Ольга Васильева', 4.7),
    new Student('Дмитрий Новиков', 3.9)
];

console.log('=== Сортировка Шелла по средней оценке ===');
console.log('До сортировки:');
students.forEach(s => console.log(${s.fullName}: ${s.averageGrade}));

const sortedByGrade = shellSortByAverageGrade([...students]);
console.log('\nПосле сортировки:');
sortedByGrade.forEach(s => console.log(${s.fullName}: ${s.averageGrade}));

console.log('\n=== Бинарный поиск по имени ===');
const sortedByName = sortStudentsByName([...students]);
console.log('Отсортированный список:');
sortedByName.forEach(s => console.log(s.fullName));

const searchResults = [
    binarySearchByName(sortedByName, 'Анна Сидорова'),
    binarySearchByName(sortedByName, 'Дмитрий Новиков'),
    binarySearchByName(sortedByName, 'Несуществующий Студент')
];

console.log('\nРезультаты поиска:');
searchResults.forEach((result, i) => {
    if (result) {
        console.log(Найден: ${result.fullName} (сред. балл: ${result.averageGrade}));
    } else {
        console.log(Студент не найден);
    }
});