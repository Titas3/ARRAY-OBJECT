/*2. Write a JavaScript program to sort by id an array of JavaScript objects.
Object =[ {
Id: 45,
Name: ‘ram’
},{
Id: 4,
Name: ‘raju’
},{
Id: 90,
Name: ‘kumar’
}] */

const data =[ {
    Id: 45,
    Name: 'ram'
    },{
    Id: 4,
    Name: 'raju'
    },{
    Id: 90,
    Name: 'kumar'
    }]
    data.sort((a, b) => (a.Id > b.Id) ? 1 : -1)
    console.log(data)