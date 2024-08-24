//calll back function
const myFunction=(anotherFunction)=>
{
    anotherFunction()
}
function secondFunction()
{
    console.log("second func as parameter")
}
myFunction(secondFunction);

//inline
const myFunction1=(()=>
{
    console.log("inline func passed as parameter");
})

