let btns = document.querySelectorAll("button"); //list of buttons 
 
btns.forEach(btn => 
{ 
    btn.addEventListener("click", () => 
    { 
        document.body.style.backgroundColor = btn.innerText; 
    }); 
});