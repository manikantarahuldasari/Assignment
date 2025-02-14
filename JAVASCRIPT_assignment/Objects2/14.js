//  Retrieve all tasks assigned to the employee Alice
const projects = [
    {
        project: 'Website',
        tasks: [
            { task: 'Design', assignedTo: 'Alice' },
            { task: 'Code', assignedTo: 'Bob' },
        ],
    },
    {
        project: 'App',
        tasks: [
            { task: 'Develop', assignedTo: 'Alice' },
            { task: 'Test', assignedTo: 'Charlie' },
        ],
    },
];
var res=projects[0]
var alicet1=res.tasks[0]
console.log(alicet1)
var res=projects[1]
var alicet2=res.tasks[0]
console.log(alicet2)
