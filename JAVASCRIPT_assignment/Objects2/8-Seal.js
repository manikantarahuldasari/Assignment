// Seal an Object using Object.seal()
const car = { 
    brand: "Toyota",   
    model: "Camry"
 };
 Object.seal(car)
 car.model="Corolla"
 console.log(car)