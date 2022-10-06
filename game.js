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

window.addEventListener('resize', () => {
    responsiveWindow();
})


let dataBank = ['ROCKER', 'BANANA', 'ACCEPT', 'CASTLE', 'DEGREE', 'EMPLOY', 'HOLDER', 'HIDDEN', 'LEADER', 'MANNER', 'SCHOOL', 'SILENT', 'STRONG', 'THANKS', 'WRITER', 'WEEKLY', 'WRIGHT', 'VISION', 'TRYING', 'THREAT', 'TENNIS', 'SISTER', 'PRINCE', 'NATURE', 'MURDER', 'LEGACY', 'GROWTH', 'ESCAPE', 'DEPEND', 'CUSTOM', 'BUREAU', 'BECAME', 'AFFECT', 'ACROSS'];

let pickedWord;

function pickWord() {
    pickedWord = dataBank[Math.floor(Math.random() * dataBank.length)];
    console.log(pickedWord);
}

pickWord();

let attemptedWord

function validate(input) {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}

function verifyAnswer1() {
    if (document.getElementById('gridInpA1').value.length == 1 && document.getElementById('gridInpA2').value.length == 1 && document.getElementById('gridInpA3').value.length == 1 && document.getElementById('gridInpA4').value.length == 1 && document.getElementById('gridInpA5').value.length == 1 && document.getElementById('gridInpA6').value.length == 1) {

        attemptedWord.concat(document.getElementById('gridInpA1').innerText, document.getElementById('gridInpA2').innerText, document.getElementById('gridInpA3').innerText, document.getElementById('gridInpA4').innerText, document.getElementById('gridInpA5').innerText, document.getElementById('gridInpA6').innerText);
        console.log(attemptedWord);

    }

}