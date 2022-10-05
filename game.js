let background = document.querySelector('#background');
let controlPannel = document.getElementById('controlPannel');
let upButton = document.getElementById('upButton');
let leftButton = document.getElementById('leftButton');
let rightButton = document.getElementById('rightButton');
let downButton = document.getElementById('downButton');

function responsiveWindow() {
    if (window.innerWidth >= 600) {
        background.style.width = "50vh";
        background.style.height = "75vh";
        background.style.marginLeft = "auto";
        background.style.marginRight = "auto";
        background.style.marginUp = "2vh";
        
        gridthing.style.width = "50vh";
        gridthing.style.height = "50vh";
    }
    else if (window.innerWidth < 600 && window.innerWidth > 350) {
        background.style.width = "44vh";
        background.style.height = "66vh";
        background.style.marginLeft = "auto";
        background.style.marginRight = "auto";
        background.style.marginTop = "2vh";

        gridthing.style.width = "44vh";
        gridthing.style.height = "44vh";
    }
    else {
        background.style.width = "30vh";
        background.style.height = "45vh";
        background.style.marginLeft = "auto";
        background.style.marginRight = "auto";
        background.style.marginTop = "1vh";

        gridthing.style.width = "30vh";
        gridthing.style.height = "30vh";
    }
}

responsiveWindow();

function validate(input) {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}

function nextinp() {
    if (this.value.length == this.maxLength) {
        
    }
}

$("#gridinp").keyup(function () {
    if (this.value.length == this.maxLength) {
        $(this).nextAll('.inputs:enabled:first').focus();
    }
});

window.addEventListener('resize', () => {
    responsiveWindow();
})