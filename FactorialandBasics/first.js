// var n = 10;
// console.log(n);
// var result=10+20;
// console.log(result);
// var x;
// console.log(typeof x);
// x=10
// console.log(typeof x);
// x=10.5
// console.log(typeof x);
// x="hi";
// console.log(typeof x);
// x='a'
// console.log(typeof x);
// x={name: "allen"}
// console.log(typeof x);
// x=null
// console.log(typeof x);
// x=function(){console.log("inside function")}
// x();
// console.log(typeof x);
// x=true;
// console.log(typeof x);

//string function use single or double quotes
// let fname="Abc"
// let lname="bbc"
// let name=fname+lname
// console.log(name)
// console.log(name[1])
// console.log(name.toLowerCase());
// console.log(name.toUpperCase());


// let email="abc@gmail.com";
// let index=email.indexOf("@")
// console.log(index)

// console.log(email.slice(2,5))
// console.log(email.substring(2,5))

// console.log(email.replace("m","n"))


// //template string
// //interpolation

// var description=`hello ${fname} ${lname}!`
// console.log(description)


function addition(){
    var p = document.getElementById("result");
    var num1=parseInt(f1.n1.value);
    var num2=parseInt(f1.n2.value);

    var result=num1+num2;
    // alert("addition is:"+result);
    // document.write(result)

    p.innerHTML="addition is: " + result;
}