//arrays
let players=["Sachin","Rahul","Virat","Shubhman"]
console.log(players)
console.log(players.length)
console.log(players.join("-"))
console.log(players.indexOf("Sachin"));
let result=players.concat(["Rohit","Dhoni"])
console.log(result)
console.log(players.pop())
console.log(players.shift())
console.log(players.push("Saroj"));
console.log(players.unshift("Sam"));
console.log(players)
console.log(players.includes("Sachin"))

console.log(players.splice(2,1))
console.log(players)
console.log(players.splice(2,0,"abc"))
console.log(players)


//NUll and undefined
let age;
console.log(age)
console.log(age+10)

let exp=null;
console.log(exp+10)

//loose vs strict comparison
let age1 =25
console.log(age1==25) //loose
console.log(age1=="25")

let age2=25
console.log(age2===25)//strict
console.log(age2==="25")

//type conversion
console.log(Number("25"))
console.log(Number("abc"))
console.log(Number(true))
console.log(Number(false))
console.log(Number(null))
console.log(String(50))
console.log(Boolean(50))
console.log(Boolean(0))
console.log(Boolean(""))
console.log(Boolean("hi"))









