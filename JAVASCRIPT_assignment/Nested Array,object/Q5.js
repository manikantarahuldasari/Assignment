//Access the role of Charlie dynamically using the key variable
const team = {
    Alice: { role: 'Developer', age: 25 },
    Bob: { role: 'Manager', age: 30 },
    Charlie: { role: 'Tester', age: 28 },
    };
    const key='Charlie'
    const charlieRole = team[key].role
    console.log(charlieRole)