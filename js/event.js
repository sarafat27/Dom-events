function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}

//handle green button click by setting function name

const greenButton = document.getElementById('make-green-button');
//just set the name of the function,dont call the function
greenButton.onclick = makeGreen;

function makeGreen() {
    document.body.style.backgroundColor = 'green';
}
//handle event using anonymous function
const grayButton = document.getElementById('make-gray-button');
//anonymous function
grayButton.onclick = function () {
    document.body.style.backgroundColor = 'gray';
}

//handle event by using addeventlistener()
const goldenButton = document.getElementById('make-goldenrod');
goldenButton.addEventListener('click', makeGoldenRod)

function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod';
}

//another way by addeventlistener
const indigoButton = document.getElementById('make-indigo');
indigoButton.addEventListener('click', function () {
    document.body.style.backgroundColor = 'indigo';
})

//direct shortcut
document.getElementById('make-lightblue').addEventListener('click', function () {
    document.body.style.backgroundColor = 'lightblue';
})