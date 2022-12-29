var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "БВТ1702",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БСТ1702",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП1801",
        "marks": [5, 5, 5]
    }
];
console.log(groupmates);
var rpad = function(str, length) {
str = str.toString();
while (str.length < length)
str = str + ' ';
};

var printStudents = function(students){
    console.log(
        rpad("Имя", 15),
        rpad("Фамилия", 15),
        rpad("Группа", 8),
        rpad("Оценки", 20)
);
for (var i = 0; i<=students.length-1; i++){
    console.log(
        rpad(students[i]['name'], 15),
        rpad(students[i][surname], 15),
        rpad(students[i]['group'], 8),
         rpad(students[i]['marks'], 20)
);
}
console.log('\n');
};
var print_students_by_groupnames = function (students, Group_Name) {
    table_header();
    for (var i = 0, len = students.length - 1; i < len; i++)
        if (students[i]["Group"] == Group_Name)
            printStudent(students[i]);
    console.log("\n");
};
var calculate_average_grade = function (grades) {
    var summary = 0;
    for (var i = 0, len = grades.length - 1; i <= len; summary += grades[i++]);
    return (summary/grades.length);
};

var print_students_by_average_grade = function(students, Average_Grade) {
    console.log(Average_Grade);
    table_header();
    for (var i = 0, len=students.length-1; i < len; i++)
        if (calculate_average_grade(students[i]['Marks']) >= Average_Grade)
            printStudent(students[i]);
    console.log("\n");
};




