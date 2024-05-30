const students = ["준석","준영","승원","윤솔","예건"];

console.log(students);
console.log(students[1]);

students[1] = "John";
console.log(students[1]);

console.log(students.length);
console.log(students.push("현서"));

console.log(students.pop());

console.log(students.shift());
console.log(students.unshift("준석"));

console.log(students);

for(let student of students){
    console.log(student);
}

for(let i = 0; i < students.length; i++){
    console.log(students[i]);
}