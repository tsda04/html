//Вариант 4 (22 по списку)

const studentJson = `{
  "surname": "Иванов",
  "name": "Иван",
  "marks": [
    { "subject": "Математика", "mark": 5 },
    { "subject": "Физика", "mark": 4 },
    { "subject": "Информатика", "mark": 5 },
    { "subject": "История", "mark": 3 },
    { "subject": "Математика", "mark": 4 }
  ]
}`;

class Student {
  constructor(jsonString) {
    const student = JSON.parse(jsonString);
    this.surname = student.surname;
    this.name = student.name;
    this.marks = student.marks;
  }

  getMarksBySubject(subjectName) {
    const marks = [];
    for (const mark of this.marks) {
      if (mark.subject === subjectName) {
        marks.push(mark.mark);
      }
    }
    return marks;
  }
}


const student = new Student(studentJson);
const mathMarks = student.getMarksBySubject("Математика");
console.log(`Оценки по математике: ${mathMarks.join(", ")}`);