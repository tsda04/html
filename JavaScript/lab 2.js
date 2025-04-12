//Вариант 2  (22 по списку)
function helloFunction(name, rank = "рядовой") {
  console.log('Здравствуйте, %s %s!', rank, name);
}

helloFunction("Иванов");

helloFunction("Петров", "капитан");