const studentJSON = {
  surname: "Иванов",
  name: "Иван",
  marks: [
    { subject: "Math", mark: 5 },
    { subject: "Physics", mark: 4 },
    { subject: "Computer Science", mark: 5 },
    { subject: "History", mark: 3 }
  ]
};

function printStudentInfo(student) {
  console.log(`Фамилия: ${student.surname}`);
  console.log(`Имя: ${student.name}`);
  console.log("Оценки:");
  student.marks.forEach(mark => {
    console.log('%s: %s', mark.subject, mark.mark);
  });
}

printStudentInfo(studentJSON);


class Mark {
  constructor(subject, mark) {
    this.subject = subject;
    this.mark = mark;
  }
}

class Student {
  constructor(surname, name, marks = []) {
    this.surname = surname;
    this.name = name;
    this.marks = marks;
  }

  getAverageMark() {
    if (this.marks.length === 0) {
      return 0;
    }
    const sum = this.marks.reduce((acc, mark) => acc + mark.mark, 0);
    return sum / this.marks.length;
  }

  getMarksBySubject(subject) {
    return this.marks.filter(mark => mark.subject === subject);
  }

  addMark(subject, mark) {
    this.marks.push(new Mark(subject, mark));
  }

  removeMarksBySubject(subject) {
    this.marks = this.marks.filter(mark => mark.subject !== subject);
  }
}


const student = new Student("Петров", "Петр", [
  new Mark("Math", 4),
  new Mark("Physics", 5),
  new Mark("Computer Science", 4)
]);

console.log("Средняя оценка:", student.getAverageMark());
console.log("Оценки по Math:", student.getMarksBySubject("Math"));

student.addMark("English", 5);
console.log("Оценки после добавления English:", student.marks);

student.removeMarksBySubject("Physics");
console.log("Оценки после удаления Physics:", student.marks);