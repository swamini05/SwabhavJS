const scores=[100,20,15,40,28,60,90]

//filter
console.log(scores);

const topScores=scores.filter(scores => scores>=60)
console.log(topScores);


//map

const addScores=scores.map(score => score+=5)
console.log(addScores);



//reduce 
const bestScoreCount = scores.reduce((cn,score) =>{
    if(score >= 60)
        cn++
    return cn
},0)
console.log(bestScoreCount)

const playerScores=[
    {pname:"Dinesh",score:45},
    {pname:"Ramesh",score:75},
    {pname:"kamlesh",score:145},
    {pname:"Dinesh",score:54},
    {pname:"Dinesh",score:79},
    {pname:"jignesh",score:28},
]
const totalScoreDinesh=playerScores.reduce((total,player) => {
    if (player.pname=="Dinesh")
        total += player.score
    return total;

},0);
console.log(totalScoreDinesh);

const products=[
    {pname:"Tshirt",price:400},
    {pname:"Shirt",price:2200},
    {pname:"Jeans",price:3000},
    {pname:"Trouser",price:750},
    {pname:"Blazer",price:5000},
]


const highPriceProducts = products.filter(product => product.price > 1000);

const productNames = highPriceProducts.map(product => product.pname);

const pricyProductCount = products.reduce((cn,product) =>{
    if (product.price > 1000)
        cn++
    return cn
},0)

const discountedProducts = products.map(product => {
    if (product.price > 2000) {
        const discount = product.price * 0.20;
        const discountedPrice = product.price - discount;
        return {
            pname: product.pname,
            originalPrice: product.price,
            discountedPrice: discountedPrice
        };
    }
    return null;
}).filter(product => product !== null); 

console.log(highPriceProducts)
console.log(productNames);
console.table(discountedProducts)


const users=[
    {firstName:"john",lastname:"Biden",age:26},
    {firstName:"jimmy",lastname:"Cob",age:75},
    {firstName:"sam",lastname:"Lewis",age:50},
    {firstName:"Ronald",lastname:"Mathew",age:26},
    
]



const over30Users = users.filter(user => user.age > 30)
.map(user => user.firstName);

console.log(over30Users);



const students = [
    { name: "Sampada", marks: 55 },
    { name: "Swati", marks: 70 },
    { name: "Nimith", marks: 45 },
    { name: "Swamini", marks: 85 }
];


const highScoringStudents = students
    .filter(student => student.marks > 60)
    .map(student => student.name);

console.log(highScoringStudents);


const newStudents = students.map(student => {
    if (student.marks < 60) {
        return {marks: student.marks + 20 };
    }
    return student;
});
console.log(newStudents);

const totalMarksAbove60 = newStudents
    .filter(student => student.marks > 60)
    .reduce((total, student) => total + student.marks, 0);

console.log(totalMarksAbove60);


const lowScoringStudents= students.filter(student => student.marks<60).map(student => student.name)

console.log(lowScoringStudents);

