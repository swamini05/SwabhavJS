function myFunction(n1, n2)
{
    var result = n1+n2;
    console.log("My function called")
}

myFunction(10,20);

//function expression

var fnptr=function(n1,n2)
{
    var result=n1+n2;
    console.log("My function called"+result);

}
fnptr(10,20)

//arrow function
var add = (n1,n2)=>
{
    var result=n1+n2;
    console.log("My function called"+result);

}
add(10,20);

const add1=(n1,n2)=>
{
    return n1+n2;
}
console.log("Addition is: "+add1(10,20))

//variable arguments 
//... rest operator
const speak=(...names)=>
{
    console.log(names.length);
}
speak("allen");
speak("allen","mary","shawn")

//default params
const sayHello=(name="allen",time="morning")=>
{
    console.log(`hello ${name} good ${time}`);

}
sayHello();
sayHello("mary", "evening")

//passing arrays to a funciton

const bill=(products,tax)=>
{
    let total=0;
    for(let i=0;i<products.length;i++)
    {
        total+=products[i]+(products[i]*tax);
    }
    return total
}
console.log(bill([152,200,450,850],0.2))
