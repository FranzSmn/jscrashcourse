let paperPick = document.getElementById('paper');
let rockPick = document.getElementById('rock');
let scissorsPick = document.getElementById('scissors')

//query selector to select all the class with weapon name
let playerWeapon = document.querySelectorAll('.weapon');

//For each loop to loop through each button 
playerWeapon.forEach(weapons => {
    weapons.onclick = () => console.log(weapons.value);
});
