var deadElem = document.getElementById("dead");
var lostElem = document.getElementById("lost");
var dead = Number(deadElem.textContent);
var lost = Number(lostElem.textContent);

for (i = 1; i <= 9; i++) 
  document.getElementById("hole" + i).onclick = hole_OnClick;


function hole_OnClick() {
  if (this.classList.contains('hole_has-mole')) {
    dead++;
    deadElem.textContent = dead;
  } else {
    lost++;
    lostElem.textContent = lost;
  }
  
  setTimeout(() => {
    if (dead === 10) endGame("You WIN! =)");
    if (lost === 5)  endGame("You LOSE! =(");
  }, 50);
}

const endGame = (str) => {
  alert(str);
  dead = 0;
  lost = 0;
  deadElem.textContent = dead;
  lostElem.textContent = lost;
}
