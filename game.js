let background = document.querySelector('#background');
let controlPannel = document.getElementById('controlPannel');
let upButton =  document.getElementById('upButton');
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let downButton = document.getElementById('downButton');


if (window.innerWidth>=600) {
    background.style.width = "50vh";
    background.style.height = "50vh";
    background.style.marginLeft = "auto";
    background.style.marginRight = "auto";
    background.style.marginUp = "2vh";
}
else if (window.innerWidth<600 && window.innerWidth>400) {
    background.style.width = "44vh";
    background.style.height = "44vh";
    background.style.marginLeft = "auto";
    background.style.marginRight = "auto";
    background.style.marginTop = "2vh";
}
else {
    background.style.width = "30vh";
    background.style.height = "30vh";
    background.style.marginLeft = "auto";
    background.style.marginRight = "auto";
    background.style.marginTop = "1vh";
}