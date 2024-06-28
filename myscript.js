let computerscore=0;
let playerscore=0;
function getComputerChoice()
{
    return Math.floor(Math.random()*3);
}
function playgame()
{
    let playerchoice=0;
do{
    alert("Enter a number less than or equal to 2");
    playerchoice = +(prompt("Enter you choice: "));
} while(playerchoice>2)

let computerchoice = getComputerChoice();
if(computerchoice==playerchoice) { alert("It's a tie");}
else if(computerchoice==0 && playerchoice==1) playerscore++;
else if(computerchoice==1 && playerchoice==0) computerscore++;
else if(computerchoice==1&&playerchoice==2) playerscore++;
else if(computerchoice==2&&playerchoice==1) computerscore++;
else if(computerchoice==2&&playerchoice==0) playerscore++
else if(computerchoice==0&&playerchoice==2)  computerscore++;

if(playerscore>computerscore) alert("You win");
else if(playerscore<computerscore) alert ("You lose");
}

alert("Enter 0 for rock, 1 for scissors, and 2 for scissors ")
for(let i =0; i<5; i++)
{
playgame();
}

console.log(`This is computer's score: ${computerscore}`);
console.log(`This is your score:${playerscore} `);
