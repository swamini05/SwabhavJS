let players=["Sachin","Rahul","Virat","Dhoni"]
let playersList=document.getElementById("playersList")
let addButton=document.getElementById("addButton")


function addToPlayerList() {
    let html = ``;
    players.forEach(player => 
    {
        html += `<li>${player}</li>`;
    });
    playersList.innerHTML = html;
}

addToPlayerList();

addButton.addEventListener("click", function() 
{
    let newPlayer = document.getElementById("newPlayer").value;

    if (newPlayer) 
    {
        players.push(newPlayer);
        addToPlayerList();
        newplayer.value = ""; 
    }
});


playersList.addEventListener("click", (e) => {
    if (e.target.tagName === 'LI') 
    { 
        let index = e.target.getAttribute('data-index');
        players.splice(index, 1); 
        addToPlayerList(); 
    }
});

// for(let i=0;i<players.length;i++)
// {
//     console.log(i + " " + players[i])
// }
// players.forEach((player,index)=>
// {
//     console.log(player + " " + index)
// })
