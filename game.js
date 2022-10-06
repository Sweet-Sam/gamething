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

const pickedWord = dataBank[Math.floor(Math.random() * dataBank.length)];
console.log(pickedWord)

let attemptedWord

function validate(input) {
    input.value = input.value.replace(/\W|\d/g, '').substr(0, 1).toUpperCase();
}

//death field (aka the part where I turn input values into variables(it' called that because its probably gonna turn ugly))
let A1, A2, A3, A4, A5, A6, B1, B2, B3, B4, B5, B6, C1, C2, C3, C4, C5, C6, D1, D2, D3, D4, D5, D6, E1, E2, E3, E4, E5, E6, F1, F2, F3, F4, F5, F6;

let PW;

let missCounter = 0;
let wrongLetter = 0;

let verificationStage = 0;

//dear christ i thought the variables field was gonna be awful. i was not ready for this:


function correctAnswerLine1() {
    document.getElementById('gridposA1').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpA1').style.color = "white";
    document.getElementById('gridposA2').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpA2').style.color = "white";
    document.getElementById('gridposA3').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpA3').style.color = "white";
    document.getElementById('gridposA4').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpA4').style.color = "white";
    document.getElementById('gridposA5').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpA5').style.color = "white";
    document.getElementById('gridposA6').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpA6').style.color = "white";
}

function correctAnswerLine2() {
    document.getElementById('gridposB1').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpB1').style.color = "white";
    document.getElementById('gridposB2').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpB2').style.color = "white";
    document.getElementById('gridposB3').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpB3').style.color = "white";
    document.getElementById('gridposB4').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpB4').style.color = "white";
    document.getElementById('gridposB5').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpB5').style.color = "white";
    document.getElementById('gridposB6').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpB6').style.color = "white";
}

function correctAnswerLine3() {
    document.getElementById('gridposC1').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpC1').style.color = "white";
    document.getElementById('gridposC2').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpC2').style.color = "white";
    document.getElementById('gridposC3').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpC3').style.color = "white";
    document.getElementById('gridposC4').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpC4').style.color = "white";
    document.getElementById('gridposC5').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpC5').style.color = "white";
    document.getElementById('gridposC6').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpC6').style.color = "white";
}

function correctAnswerLine4() {
    document.getElementById('gridposD1').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpD1').style.color = "white";
    document.getElementById('gridposD2').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpD2').style.color = "white";
    document.getElementById('gridposD3').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpD3').style.color = "white";
    document.getElementById('gridposD4').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpD4').style.color = "white";
    document.getElementById('gridposD5').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpD5').style.color = "white";
    document.getElementById('gridposD6').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpD6').style.color = "white";
}

function correctAnswerLine5() {
    document.getElementById('gridposE1').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpE1').style.color = "white";
    document.getElementById('gridposE2').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpE2').style.color = "white";
    document.getElementById('gridposE3').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpE3').style.color = "white";
    document.getElementById('gridposE4').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpE4').style.color = "white";
    document.getElementById('gridposE5').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpE5').style.color = "white";
    document.getElementById('gridposE6').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpE6').style.color = "white";
}

function correctAnswerLine6() {
    document.getElementById('gridposF1').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpF1').style.color = "white";
    document.getElementById('gridposF2').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpF2').style.color = "white";
    document.getElementById('gridposF3').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpF3').style.color = "white";
    document.getElementById('gridposF4').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpF4').style.color = "white";
    document.getElementById('gridposF5').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpF5').style.color = "white";
    document.getElementById('gridposF6').style.backgroundColor = "mediumseagreen";
    document.getElementById('gridInpF6').style.color = "white";
}



function regLine1Answer() {
    A1 = document.getElementById('gridInpA1').value;
    A2 = document.getElementById('gridInpA2').value;
    A3 = document.getElementById('gridInpA3').value;
    A4 = document.getElementById('gridInpA4').value;
    A5 = document.getElementById('gridInpA5').value;
    A6 = document.getElementById('gridInpA6').value;

    console.log(A1 + " A1");
    console.log(A2 + " A2");
    console.log(A3 + " A3");
    console.log(A4 + " A4");
    console.log(A5 + " A5");
    console.log(A6 + " A6");
}

function regLine2Answer() {
    B1 = document.getElementById('gridInpB1').value;
    B2 = document.getElementById('gridInpB2').value;
    B3 = document.getElementById('gridInpB3').value;
    B4 = document.getElementById('gridInpB4').value;
    B5 = document.getElementById('gridInpB5').value;
    B6 = document.getElementById('gridInpB6').value;

    console.log(B1 + " B1");
    console.log(B2 + " B2");
    console.log(B3 + " B3");
    console.log(B4 + " B4");
    console.log(B5 + " B5");
    console.log(B6 + " B6");
}
function regLine3Answer() {
    C1 = document.getElementById('gridInpC1').value;
    C2 = document.getElementById('gridInpC2').value;
    C3 = document.getElementById('gridInpC3').value;
    C4 = document.getElementById('gridInpC4').value;
    C5 = document.getElementById('gridInpC5').value;
    C6 = document.getElementById('gridInpC6').value;

    console.log(C1 + " C1");
    console.log(C2 + " C2");
    console.log(C3 + " C3");
    console.log(C4 + " C4");
    console.log(C5 + " C5");
    console.log(C6 + " C6");
}
function regLine4Answer() {
    D1 = document.getElementById('gridInpD1').value;
    D2 = document.getElementById('gridInpD2').value;
    D3 = document.getElementById('gridInpD3').value;
    D4 = document.getElementById('gridInpD4').value;
    D5 = document.getElementById('gridInpD5').value;
    D6 = document.getElementById('gridInpD6').value;

    console.log(D1 + " D1");
    console.log(D2 + " D2");
    console.log(D3 + " D3");
    console.log(D4 + " D4");
    console.log(D5 + " D5");
    console.log(D6 + " D6");
}
function regLine5Answer() {
    E1 = document.getElementById('gridInpE1').value;
    E2 = document.getElementById('gridInpE2').value;
    E3 = document.getElementById('gridInpE3').value;
    E4 = document.getElementById('gridInpE4').value;
    E5 = document.getElementById('gridInpE5').value;
    E6 = document.getElementById('gridInpE6').value;

    console.log(E1 + " E1");
    console.log(E2 + " E2");
    console.log(E3 + " E3");
    console.log(E4 + " E4");
    console.log(E5 + " E5");
    console.log(E6 + " E6");
}
function regLine6Answer() {
    F1 = document.getElementById('gridInpF1').value;
    F2 = document.getElementById('gridInpF2').value;
    F3 = document.getElementById('gridInpF3').value;
    F4 = document.getElementById('gridInpF4').value;
    F5 = document.getElementById('gridInpF5').value;
    F6 = document.getElementById('gridInpF6').value;

    console.log(F1 + " F1");
    console.log(F2 + " F2");
    console.log(F3 + " F3");
    console.log(F4 + " F4");
    console.log(F5 + " F5");
    console.log(F6 + " F6");
}

function attemptedWordConcat() {
    regLine1Answer();
    attemptedWord = A1.concat(A2, A3, A4, A5, A6);
    console.log(attemptedWord);
}

function attemptedWordConcat2() {
    regLine1Answer();
    attemptedWord = B1.concat(B2, B3, B4, B5, B6);
    console.log(attemptedWord);
}

function attemptedWordConcat3() {
    regLine1Answer();
    attemptedWord = C1.concat(C2, C3, C4, C5, C6);
    console.log(attemptedWord);
}

function attemptedWordConcat4() {
    regLine1Answer();
    attemptedWord = D1.concat(D2, D3, D4, D5, D6);
    console.log(attemptedWord);
}

function attemptedWordConcat5() {
    regLine1Answer();
    attemptedWord = E1.concat(E2, E3, E4, E5, E6);
    console.log(attemptedWord);
}

function attemptedWordConcat6() {
    regLine1Answer();
    attemptedWord = F1.concat(F2, F3, F4, F5, F6);
    console.log(attemptedWord);
}


function ideka() {
    for (let i = 0; i < 6; i++) {
        let stylechange = i;
        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (stylechange) {
                case 0:
                    document.getElementById('gridposA1').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpA1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposA2').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpA2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposA3').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpA3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposA4').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpA4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposA5').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpA5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposA6').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpA6').style.color = "white";
                    break;
            }

        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposA1').style.backgroundColor = "indianred";
                    document.getElementById('gridInpA1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposA2').style.backgroundColor = "indianred";
                    document.getElementById('gridInpA2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposA3').style.backgroundColor = "indianred";
                    document.getElementById('gridInpA3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposA4').style.backgroundColor = "indianred";
                    document.getElementById('gridInpA4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposA5').style.backgroundColor = "indianred";
                    document.getElementById('gridInpA5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposA6').style.backgroundColor = "indianred";
                    document.getElementById('gridInpA6').style.color = "white";
                    break;
            }
        }
        else {
            wrongLetter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposA1').style.backgroundColor = "white";
                    document.getElementById('gridInpA1').style.color = "dimgray";
                    break;

                case 1:
                    document.getElementById('gridposA2').style.backgroundColor = "white";
                    document.getElementById('gridInpA2').style.color = "dimgray";
                    break;
                    
                case 2:
                    document.getElementById('gridposA3').style.backgroundColor = "white";
                    document.getElementById('gridInpA3').style.color = "dimgray";
                    break;

                case 3:
                    document.getElementById('gridposA4').style.backgroundColor = "white";
                    document.getElementById('gridInpA4').style.color = "dimgray";
                    break;

                case 4:
                    document.getElementById('gridposA5').style.backgroundColor = "white";
                    document.getElementById('gridInpA5').style.color = "dimgray";
                    break;

                case 5:
                    document.getElementById('gridposA6').style.backgroundColor = "white";
                    document.getElementById('gridInpA6').style.color = "dimgray";
                    break;
            }
        }
    }
    enableInputsB();
}

function ideka2() {
    for (let i = 0; i < 6; i++) {
        let stylechange = i;
        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (stylechange) {
                case 0:
                    document.getElementById('gridposB1').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpB1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposB2').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpB2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposB3').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpB3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposB4').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpB4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposB5').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpB5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposB6').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpB6').style.color = "white";
                    break;
            }

        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposB1').style.backgroundColor = "indianred";
                    document.getElementById('gridInpB1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposB2').style.backgroundColor = "indianred";
                    document.getElementById('gridInpB2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposB3').style.backgroundColor = "indianred";
                    document.getElementById('gridInpB3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposB4').style.backgroundColor = "indianred";
                    document.getElementById('gridInpB4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposB5').style.backgroundColor = "indianred";
                    document.getElementById('gridInpB5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposB6').style.backgroundColor = "indianred";
                    document.getElementById('gridInpB6').style.color = "white";
                    break;
            }
        }
        else {
            wrongLetter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposB1').style.backgroundColor = "white";
                    document.getElementById('gridInpB1').style.color = "dimgray";
                    break;

                case 1:
                    document.getElementById('gridposB2').style.backgroundColor = "white";
                    document.getElementById('gridInpB2').style.color = "dimgray";
                    break;

                case 2:
                    document.getElementById('gridposB3').style.backgroundColor = "white";
                    document.getElementById('gridInpB3').style.color = "dimgray";
                    break;

                case 3:
                    document.getElementById('gridposB4').style.backgroundColor = "white";
                    document.getElementById('gridInpB4').style.color = "dimgray";
                    break;

                case 4:
                    document.getElementById('gridposB5').style.backgroundColor = "white";
                    document.getElementById('gridInpB5').style.color = "dimgray";
                    break;

                case 5:
                    document.getElementById('gridposB6').style.backgroundColor = "white";
                    document.getElementById('gridInpB6').style.color = "dimgray";
                    break;
            }
        }
    }
    enableInputsC();
}

function ideka3() {
    for (let i = 0; i < 6; i++) {
        let stylechange = i;
        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (stylechange) {
                case 0:
                    document.getElementById('gridposC1').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpC1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposC2').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpC2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposC3').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpC3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposC4').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpC4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposC5').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpC5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposC6').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpC6').style.color = "white";
                    break;
            }

        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposC1').style.backgroundColor = "indianred";
                    document.getElementById('gridInpC1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposC2').style.backgroundColor = "indianred";
                    document.getElementById('gridInpC2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposC3').style.backgroundColor = "indianred";
                    document.getElementById('gridInpC3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposC4').style.backgroundColor = "indianred";
                    document.getElementById('gridInpC4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposC5').style.backgroundColor = "indianred";
                    document.getElementById('gridInpC5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposC6').style.backgroundColor = "indianred";
                    document.getElementById('gridInpC6').style.color = "white";
                    break;
            }
        }
        else {
            wrongLetter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposC1').style.backgroundColor = "white";
                    document.getElementById('gridInpC1').style.color = "dimgray";
                    break;

                case 1:
                    document.getElementById('gridposC2').style.backgroundColor = "white";
                    document.getElementById('gridInpC2').style.color = "dimgray";
                    break;

                case 2:
                    document.getElementById('gridposC3').style.backgroundColor = "white";
                    document.getElementById('gridInpC3').style.color = "dimgray";
                    break;

                case 3:
                    document.getElementById('gridposC4').style.backgroundColor = "white";
                    document.getElementById('gridInpC4').style.color = "dimgray";
                    break;

                case 4:
                    document.getElementById('gridposC5').style.backgroundColor = "white";
                    document.getElementById('gridInpC5').style.color = "dimgray";
                    break;

                case 5:
                    document.getElementById('gridposC6').style.backgroundColor = "white";
                    document.getElementById('gridInpC6').style.color = "dimgray";
                    break;
            }
        }
    }
    enableInputsD();
}

function ideka4() {
    for (let i = 0; i < 6; i++) {
        let stylechange = i;
        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (stylechange) {
                case 0:
                    document.getElementById('gridposD1').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpD1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposD2').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpD2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposD3').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpD3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposD4').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpD4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposD5').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpD5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposD6').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpD6').style.color = "white";
                    break;
            }

        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposD1').style.backgroundColor = "indianred";
                    document.getElementById('gridInpD1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposD2').style.backgroundColor = "indianred";
                    document.getElementById('gridInpD2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposD3').style.backgroundColor = "indianred";
                    document.getElementById('gridInpD3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposD4').style.backgroundColor = "indianred";
                    document.getElementById('gridInpD4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposD5').style.backgroundColor = "indianred";
                    document.getElementById('gridInpD5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposD6').style.backgroundColor = "indianred";
                    document.getElementById('gridInpD6').style.color = "white";
                    break;
            }
        }
        else {
            wrongLetter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposD1').style.backgroundColor = "white";
                    document.getElementById('gridInpD1').style.color = "dimgray";
                    break;

                case 1:
                    document.getElementById('gridposD2').style.backgroundColor = "white";
                    document.getElementById('gridInpD2').style.color = "dimgray";
                    break;

                case 2:
                    document.getElementById('gridposD3').style.backgroundColor = "white";
                    document.getElementById('gridInpD3').style.color = "dimgray";
                    break;

                case 3:
                    document.getElementById('gridposD4').style.backgroundColor = "white";
                    document.getElementById('gridInpD4').style.color = "dimgray";
                    break;

                case 4:
                    document.getElementById('gridposD5').style.backgroundColor = "white";
                    document.getElementById('gridInpD5').style.color = "dimgray";
                    break;

                case 5:
                    document.getElementById('gridposD6').style.backgroundColor = "white";
                    document.getElementById('gridInpD6').style.color = "dimgray";
                    break;
            }
        }
    }
    enableInputsE();
}

function ideka5() {
    for (let i = 0; i < 6; i++) {
        let stylechange = i;
        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (stylechange) {
                case 0:
                    document.getElementById('gridposE1').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpE1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposE2').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpE2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposE3').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpE3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposE4').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpE4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposE5').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpE5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposE6').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpE6').style.color = "white";
                    break;
            }

        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposE1').style.backgroundColor = "indianred";
                    document.getElementById('gridInpE1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposE2').style.backgroundColor = "indianred";
                    document.getElementById('gridInpE2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposE3').style.backgroundColor = "indianred";
                    document.getElementById('gridInpE3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposE4').style.backgroundColor = "indianred";
                    document.getElementById('gridInpE4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposE5').style.backgroundColor = "indianred";
                    document.getElementById('gridInpE5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposE6').style.backgroundColor = "indianred";
                    document.getElementById('gridInpE6').style.color = "white";
                    break;
            }
        }
        else {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposE1').style.backgroundColor = "white";
                    document.getElementById('gridInpE1').style.color = "dimgray";
                    break;

                case 1:
                    document.getElementById('gridposE2').style.backgroundColor = "white";
                    document.getElementById('gridInpE2').style.color = "dimgray";
                    break;

                case 2:
                    document.getElementById('gridposE3').style.backgroundColor = "white";
                    document.getElementById('gridInpE3').style.color = "dimgray";
                    break;

                case 3:
                    document.getElementById('gridposE4').style.backgroundColor = "white";
                    document.getElementById('gridInpE4').style.color = "dimgray";
                    break;

                case 4:
                    document.getElementById('gridposE5').style.backgroundColor = "white";
                    document.getElementById('gridInpE5').style.color = "dimgray";
                    break;

                case 5:
                    document.getElementById('gridposE6').style.backgroundColor = "white";
                    document.getElementById('gridInpE6').style.color = "dimgray";
                    break;
            }
        }
    }
    enableInputsF();
}

function ideka6() {
    for (let i = 0; i < 6; i++) {
        let stylechange = i;
        if (attemptedWord.substr(i, 1) === pickedWord[i]) {

            switch (stylechange) {
                case 0:
                    document.getElementById('gridposF1').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpF1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposF2').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpF2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposF3').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpF3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposF4').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpF4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposF5').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpF5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposF6').style.backgroundColor = "mediumseagreen";
                    document.getElementById('gridInpF6').style.color = "white";
                    break;
            }

        } else if (pickedWord.includes(attemptedWord.substr(i, 1))) {
            missCounter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposF1').style.backgroundColor = "indianred";
                    document.getElementById('gridInpF1').style.color = "white";
                    break;

                case 1:
                    document.getElementById('gridposF2').style.backgroundColor = "indianred";
                    document.getElementById('gridInpF2').style.color = "white";
                    break;

                case 2:
                    document.getElementById('gridposF3').style.backgroundColor = "indianred";
                    document.getElementById('gridInpF3').style.color = "white";
                    break;

                case 3:
                    document.getElementById('gridposF4').style.backgroundColor = "indianred";
                    document.getElementById('gridInpF4').style.color = "white";
                    break;

                case 4:
                    document.getElementById('gridposF5').style.backgroundColor = "indianred";
                    document.getElementById('gridInpF5').style.color = "white";
                    break;

                case 5:
                    document.getElementById('gridposF6').style.backgroundColor = "indianred";
                    document.getElementById('gridInpF6').style.color = "white";
                    break;
            }
        }
        else {
            wrongLetter++;
            switch (stylechange) {
                case 0:
                    document.getElementById('gridposF1').style.backgroundColor = "white";
                    document.getElementById('gridInpF1').style.color = "dimgray";
                    break;

                case 1:
                    document.getElementById('gridposF2').style.backgroundColor = "white";
                    document.getElementById('gridInpF2').style.color = "dimgray";
                    break;

                case 2:
                    document.getElementById('gridposF3').style.backgroundColor = "white";
                    document.getElementById('gridInpF3').style.color = "dimgray";
                    break;

                case 3:
                    document.getElementById('gridposF4').style.backgroundColor = "white";
                    document.getElementById('gridInpF4').style.color = "dimgray";
                    break;

                case 4:
                    document.getElementById('gridposF5').style.backgroundColor = "white";
                    document.getElementById('gridInpF5').style.color = "dimgray";
                    break;

                case 5:
                    document.getElementById('gridposF6').style.backgroundColor = "white";
                    document.getElementById('gridInpF6').style.color = "dimgray";
                    break;
            }
        }
    }
}







function enableInputsB() {
    document.getElementById('gridInpA1').disabled = true;
    document.getElementById('gridInpA2').disabled = true;
    document.getElementById('gridInpA3').disabled = true;
    document.getElementById('gridInpA4').disabled = true;
    document.getElementById('gridInpA5').disabled = true;
    document.getElementById('gridInpA6').disabled = true;

    document.getElementById('gridInpB1').disabled = false;
    document.getElementById('gridInpB2').disabled = false;
    document.getElementById('gridInpB3').disabled = false;
    document.getElementById('gridInpB4').disabled = false;
    document.getElementById('gridInpB5').disabled = false;
    document.getElementById('gridInpB6').disabled = false;
}

function enableInputsC() {
    document.getElementById('gridInpB1').disabled = true;
    document.getElementById('gridInpB2').disabled = true;
    document.getElementById('gridInpB3').disabled = true;
    document.getElementById('gridInpB4').disabled = true;
    document.getElementById('gridInpB5').disabled = true;
    document.getElementById('gridInpB6').disabled = true;

    document.getElementById('gridInpC1').disabled = false;
    document.getElementById('gridInpC2').disabled = false;
    document.getElementById('gridInpC3').disabled = false;
    document.getElementById('gridInpC4').disabled = false;
    document.getElementById('gridInpC5').disabled = false;
    document.getElementById('gridInpC6').disabled = false;
}

function enableInputsD() {
    document.getElementById('gridInpC1').disabled = true;
    document.getElementById('gridInpC2').disabled = true;
    document.getElementById('gridInpC3').disabled = true;
    document.getElementById('gridInpC4').disabled = true;
    document.getElementById('gridInpC5').disabled = true;
    document.getElementById('gridInpC6').disabled = true;

    document.getElementById('gridInpD1').disabled = false;
    document.getElementById('gridInpD2').disabled = false;
    document.getElementById('gridInpD3').disabled = false;
    document.getElementById('gridInpD4').disabled = false;
    document.getElementById('gridInpD5').disabled = false;
    document.getElementById('gridInpD6').disabled = false;
}

function enableInputsE() {
    document.getElementById('gridInpD1').disabled = true;
    document.getElementById('gridInpD2').disabled = true;
    document.getElementById('gridInpD3').disabled = true;
    document.getElementById('gridInpD4').disabled = true;
    document.getElementById('gridInpD5').disabled = true;
    document.getElementById('gridInpD6').disabled = true;

    document.getElementById('gridInpE1').disabled = false;
    document.getElementById('gridInpE2').disabled = false;
    document.getElementById('gridInpE3').disabled = false;
    document.getElementById('gridInpE4').disabled = false;
    document.getElementById('gridInpE5').disabled = false;
    document.getElementById('gridInpE6').disabled = false;
}

function enableInputsF() {
    document.getElementById('gridInpE1').disabled = true;
    document.getElementById('gridInpE2').disabled = true;
    document.getElementById('gridInpE3').disabled = true;
    document.getElementById('gridInpE4').disabled = true;
    document.getElementById('gridInpE5').disabled = true;
    document.getElementById('gridInpE6').disabled = true;

    document.getElementById('gridInpF1').disabled = false;
    document.getElementById('gridInpF2').disabled = false;
    document.getElementById('gridInpF3').disabled = false;
    document.getElementById('gridInpF4').disabled = false;
    document.getElementById('gridInpF5').disabled = false;
    document.getElementById('gridInpF6').disabled = false;
}


function verifyAnswer1() {

    regLine1Answer();

    if (A1.length == 1 && A2.length == 1 && A3.length == 1 && A4.length == 1 && A5.length == 1 && A6.length == 1) {

        attemptedWordConcat();
        verificationStage++;

        if (attemptedWord == pickedWord) {
            correctAnswerLine1();
            document.getElementById('result').innerHTML = "Congrats! You won on the first word! Refresh to play again!";
            document.getElementById('buttonDiv').style.display = "none";

        } else {
            ideka();
            document.getElementById('result').innerHTML = "Keep trying!";
        }

    }

}

function verifyAnswer2() {

    regLine2Answer();

    if (B1.length == 1 && B2.length == 1 && B3.length == 1 && B4.length == 1 && B5.length == 1 && B6.length == 1) {

        attemptedWordConcat2();
        verificationStage++;

        if (attemptedWord == pickedWord) {
            correctAnswerLine2();
            document.getElementById('result').innerHTML = "Congrats! You won on the second try! You missed the position of letters " + missCounter + " times, and got the wrong letters " + wrongLetter + " times. Refresh to play again!" ;
            document.getElementById('buttonDiv').style.display = "none";

        } else {
            ideka2();
            document.getElementById('result').innerHTML = "Keep trying!";
        }

    }

}

function verifyAnswer3() {

    regLine3Answer();

    if (C1.length == 1 && C2.length == 1 && C3.length == 1 && C4.length == 1 && C5.length == 1 && C6.length == 1) {

        attemptedWordConcat3();
        verificationStage++;

        if (attemptedWord == pickedWord) {
            correctAnswerLine3();
            document.getElementById('result').innerHTML = "Congrats! You won on the third try! You missed the position of letters " + missCounter + " times, and got the wrong letters " + wrongLetter + " times. Refresh to play again!";
            document.getElementById('buttonDiv').style.display = "none";

        } else {
            ideka3();
            document.getElementById('result').innerHTML = "Keep trying!";
        }

    }

}

function verifyAnswer4() {

    regLine4Answer();

    if (D1.length == 1 && D2.length == 1 && D3.length == 1 && D4.length == 1 && D5.length == 1 && D6.length == 1) {

        attemptedWordConcat4();
        verificationStage++;

        if (attemptedWord == pickedWord) {
            correctAnswerLine4();
            document.getElementById('result').innerHTML = "Congrats! You won on the fourth try! You missed the position of letters " + missCounter + " times, and got the wrong letters " + wrongLetter + " times. Refresh to play again!";
            document.getElementById('buttonDiv').style.display = "none";
        } else {
            ideka4();
            document.getElementById('result').innerHTML = "Keep trying!";
        }

    }

}

function verifyAnswer5() {

    regLine5Answer();

    if (E1.length == 1 && E2.length == 1 && E3.length == 1 && E4.length == 1 && E5.length == 1 && E6.length == 1) {

        attemptedWordConcat5();
        verificationStage++;

        if (attemptedWord == pickedWord) {
            correctAnswerLine5();
            document.getElementById('result').innerHTML = "Congrats! You won on the fith try! You missed the position of letters " + missCounter + " times, and got the wrong letters " + wrongLetter + " times. Refresh to play again!";
            document.getElementById('buttonDiv').style.display = "none";

        } else {
            ideka5();
            document.getElementById('result').innerHTML = "Keep trying!";
        }

    }

}

function verifyAnswer6() {

    regLine5Answer();

    if (F1.length == 1 && F2.length == 1 && F3.length == 1 && F4.length == 1 && F5.length == 1 && F6.length == 1) {

        attemptedWordConcat6();
        verificationStage++;

        if (attemptedWord == pickedWord) {
            correctAnswerLine6();
            document.getElementById('result').innerHTML = "Congrats! You won on the last try! You missed the position of letters " + missCounter + " times, and got the wrong letters " + wrongLetter + " times. Refresh to play again!";
            document.getElementById('buttonDiv').style.display = "none";

        } else {
            ideka6();
            document.getElementById('result').innerHTML = "You lost! The correct word was: " + pickedWord + " You missed the position of letters " + missCounter + " times, and got the wrong letters " + wrongLetter + " times. Refresh to play again!";
            document.getElementById('buttonDiv').style.display = "none";
        }

    }

}



function verifyStack() {

    switch (verificationStage) {

        case 0:
            verifyAnswer1();
            break;

        case 1:
            verifyAnswer2();
            break;

        case 2:
            verifyAnswer3();
            break;

        case 3:
            verifyAnswer4();
            break;

        case 4:
            verifyAnswer5();
            break;

        case 5:
            verifyAnswer6();
            break;
    }


}