const reset = document.querySelector("#reset-button");
const resetCount = document.querySelector("#c");
const winner = document.querySelector("#winner");

const team1ShotsTaken = document.querySelector("#teamone-numshots");
const team1Goals = document.querySelector("#teamone-numgoals");
const team1Shoot = document.querySelector("#teamone-shoot-button");



const team2ShotsTaken = document.querySelector("#teamtwo-numshots");
const team2Goals = document.querySelector("#teamtwo-numgoals");
const team2Shoot = document.querySelector("#teamtwo-shoot-button");


const horn = document.querySelector("#horn");
const swoosh = document.querySelector("#swoosh");

reset.addEventListener("click", clear);
team1Shoot.addEventListener("click", attemptTeam1);
team2Shoot.addEventListener("click", attemptTeam2);

function attemptTeam1() {
    swoosh.play();
    let shot = Math.random();
    if (shot > 0.5) {
        team1Goals.innerHTML++;
    }
    team1ShotsTaken.innerHTML++;
};
function attemptTeam2() {
    swoosh.play();
    let shot = Math.random();
    if (shot > 0.5) {
        team2Goals.innerHTML++;
    }
    team2ShotsTaken.innerHTML++;
}
function clear() {
    horn.play();

    if(team2Goals.innerHTML < team1Goals.innerHTML){
        winner.innerHTML = "Team 1 Wins!";
    }
    else if(team2Goals.innerHTML > team1Goals.innerHTML){
        winner.innerHTML = "Team 2 Wins!";
    }
    else if(team2Goals.innerHTML = team1Goals.innerHTML){
        winner.innerHTML = "Draw!";
    }
    team1Goals.innerHTML = 0;
    team1ShotsTaken.innerHTML =0;
    team2Goals.innerHTML = 0;
    team2ShotsTaken.innerHTML = 0;
    resetCount.innerHTML ++;

}