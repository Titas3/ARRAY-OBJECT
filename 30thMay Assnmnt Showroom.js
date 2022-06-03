/*Requirements: Qus 1: Create a JSON object for a showroom of cars, who sells cars of different brands.
JSON shall contain various details such as: car brand name, car models, price and few basic details.
Also write a program to print details of most expensive car*/


let showroom = [
    {
        "brand":"kia",
        "model" : "k1",
        "price":2000000,
        "color":"Black"
    },
    {
        "brand":"Benz",
        "model" : "B1",
        "price":4000000,
        "color":"Red"
    },
    {
        "brand":"Audi",
        "model" : "A1",
        "price":5000000,
        "color":"White"
    }
]

function expensiveCar(Input){
    let max = Number.MIN_SAFE_INTEGER;
    let expensiveCar;
    for (let value of showroom){
        if(value.price>max){
            max=value.price;
            expensiveCar=value;
        }
    }
    return expensiveCar;
    
}
console.log(expensiveCar(showroom));