function setHpWidth(){
    const hp = document.querySelector(".hpP");
    const hpValue = hp.textContent.trim();
    const hpBar = document.querySelector(".hpBar");
    const temp = parseInt(hpValue)/150*15
    const finalValue = `${temp}vw`;
    hpBar.style.width = finalValue;
    return;
}

function setSpeedWidth(){
    const speed = document.querySelector(".speedP");
    const speedValue = speed.textContent.trim();
    const speedBar = document.querySelector(".speedBar");
    const temp = parseInt(speedValue)/150*15
    const finalValue = `${temp}vw`;
    speedBar.style.width = finalValue;
    return;
}

function setAttackWidth(){
    const attack = document.querySelector(".attackP");
    const attackValue = attack.textContent.trim();
    const attackBar = document.querySelector(".attackBar");
    const temp = parseInt(attackValue)/150*15
    const finalValue = `${temp}vw`;
    attackBar.style.width = finalValue;
    return;
}

function setDefenseWidth(){
    const defense = document.querySelector(".defenseP");
    const defenseValue = defense.textContent.trim();
    const defenseBar = document.querySelector(".defenseBar");
    const temp = parseInt(defenseValue)/150*15
    const finalValue = `${temp}vw`;
    defenseBar.style.width = finalValue;
    return;
}

function setSpaWidth(){
    const spa = document.querySelector(".spaP");
    const spaValue = spa.textContent.trim();
    const spaBar = document.querySelector(".spaBar");
    const temp = parseInt(spaValue)/150*15
    const finalValue = `${temp}vw`;
    spaBar.style.width = finalValue;
    return;
}

function setSpdWidth(){
    const spd = document.querySelector(".spdP");
    const spdValue = spd.textContent.trim();
    const spdBar = document.querySelector(".spdBar");
    const temp = parseInt(spdValue)/150*15
    const finalValue = `${temp}vw`;
    spdBar.style.width = finalValue;
    return;
}

function setExpWidth(){
    const exp = document.querySelector(".expP");
    const expValue = exp.textContent.trim();
    const expBar = document.querySelector(".expBar");
    const temp = parseInt(expValue)/300*15
    const finalValue = `${temp}vw`;
    expBar.style.width = finalValue;
    return;
}

setHpWidth();
setSpeedWidth()
setAttackWidth();
setDefenseWidth();
setSpaWidth();
setSpdWidth();
setExpWidth();

const idP = document.querySelector(".currentID");
const currentID = parseInt(idP.textContent);
var prevBtn = document.querySelector('.prevBtn');
prevBtn.onclick = function() {
  location.assign('http://localhost:3000/pokemon/' + (currentID-1));
}
var nextBtn = document.querySelector('.nextBtn');
nextBtn.onclick = function() {
  location.assign('http://localhost:3000/pokemon/' + (currentID+1));
}

var searchBar = document.querySelector(".searchbar");
var searchBtn = document.querySelector(".searchBtn");
searchBtn.onclick = function() {
    location.assign('http://localhost:3000/pokemon/' + (searchBar.value));
}