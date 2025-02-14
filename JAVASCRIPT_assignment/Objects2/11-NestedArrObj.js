//Retrieve the city where the company TechCorp is located
const companies=[{
    id:1,
    name:'TechCorp',
    details:{
        address:{
            street:'123 Elm St',
            city:'New York'
        }
    }
},
{
    id:2,
    name:'SoftSystems',
    details:{
        address:{
            street:'456 Pine St',
            city:'San Francisco',
        }
    }
},
];
var result=companies[0]
var {details:{address:{street,city}}}=result
console.log(city)