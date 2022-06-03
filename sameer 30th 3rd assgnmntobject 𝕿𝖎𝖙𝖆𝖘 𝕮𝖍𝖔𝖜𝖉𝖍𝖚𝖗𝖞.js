let Classes = [
    {
        "name": "John",
        "grade": 9,
        "sex": "M"
    },
    {
        "name": "Jyothi",
        "grade": 7,
        "sex": "F"
    },
    {
        "name": "Arjun",
        "grade": 8,
        "sex": "M"
    },
    {
        "name": "bindu",
        "grade": 10,
        "sex": "F"
    },
    {
        "name": "Akbar",
        "grade": 6,
        "sex": "M"
    },
    {
        "name": "Swathi",
        "grade": 9,
        "sex": "F"
    }
]

function findGrades(input){
    let classsum = 0
    for(let values of input){
        classsum += values.grade
    }
    let classRoomAverage = classsum/input.length
    let boysSum = 0
    let boysCount = 0
    for(let values of input){
        if(values.sex === "M"){
            boysSum += values.grade
            boysCount++
        }
    } 
    let boysAverage = boysSum/boysCount
    let girlsSum = 0
    let girlsCount = 0
    for(let values of input){
        if(values.sex === "F"){
            girlsSum += values.grade
            girlsCount++
        }
    } 
    let girlsAverage = girlsSum/girlsCount
    let highestGrade = Number.MIN_SAFE_INTEGER
    for(let values of input){
        if(values.grade > highestGrade){
            highestGrade = values.grade
        }
    }
    let lowestGrade = Number.MAX_SAFE_INTEGER
    for(let values of input){
        if(values.grade < lowestGrade){
            lowestGrade = values.grade
        }
    }
    return `Classroom Average is ${classRoomAverage.toFixed(2)}
boys Avergae is ${boysAverage.toFixed(2)}
girls Average is ${girlsAverage.toFixed(2)}
highest grade is ${highestGrade}
lowest grade is ${lowestGrade}`
}

console.log(findGrades(Classes))