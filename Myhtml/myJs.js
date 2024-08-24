let grandparent=document.getElementById('grandparent');
let parent=document.getElementById('parent');
let child=document.getElementById('child');

grandparent.addEventListener("click", ()=>
{
    console.log("Grandparent clicked");
})

parent.addEventListener("click", (e)=>
{
    e.stopPropagation();
    console.log("parent clicked");
})
child.addEventListener("click", (e)=>
{
    e.stopPropagation();
    console.log("child clicked");
})

