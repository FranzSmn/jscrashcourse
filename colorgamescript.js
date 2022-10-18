let redBox = document.getElementById('red');
let yellowBox = document.getElementById('yellow');
let greenBox = document.getElementById('green');
let colorName = document.getElementById('color-name');
let redDivBox = document.getElementById("redDiv");

redBox.onclick = () => {
    colorName.innerHTML = 'Red';
    colorName.style.color = "red";
}

yellowBox.onclick = () => {
    colorName.innerHTML = 'Yellow';
    colorName.style.color = "yellow";
}

greenBox.onclick = () => {
    colorName.innerHTML = 'Green';
    colorName.style.color = "green";
}
