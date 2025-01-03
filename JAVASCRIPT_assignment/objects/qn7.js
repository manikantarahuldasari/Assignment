const students={
    name:"alex",
    address:{city:"new york",zip:"10001"},
    subjects:["math","science"]
}
var{address:{city,zip}}=students
var{subjects}=students
console.log(city);
students.subjects.push("phy")
console.log(subjects)