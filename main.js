async function countingThroughWeight() {
    for (let i = 0; i < 99; i++) {
        document.getElementById("weight").innerHTML = i + 'Kg';
        await sleep(25);
    }
}

async function countingThroughFat() {
    for (let i = 0; i < 99; i++) {
        document.getElementById("fat").innerHTML = i + '%';
        await sleep(35);
    }
}

async function countingThroughMuscle() {
    for (let i = 0; i < 99; i++) {
        document.getElementById("muscle").innerHTML = i + 'Kg';
        await sleep(25);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.onscroll = function () {
    myFunction()
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
        console.log("yeetus");
    }
}


$(document).scroll(function () {
    let y = $(this).scrollTop();
    if (y > 50) {
        $('.stats-number').fadeIn();
    } else {
        $('.stats-number').fadeOut();
    }
});

function roundToTwo(num) {
    return +(Math.round(num + "e+2") + "e-2");
}

function calcBMI() {
    let height = document.getElementById("inputHeight").value;
    let weight = document.getElementById("inputWeight").value;
    let result = roundToTwo(weight / (height * height) * 10000);

    if (result < 18.5) {
        document.getElementById('category').innerHTML = "You are underweight";
        document.getElementById('header').style.backgroundColor = '#ff1f0a';
        document.getElementById('title').style.color = '#ffffff';

    } else if (result > 18.5 && result < 25) {
        document.getElementById('category').innerHTML = "You have a healthy weight";
        document.getElementById('header').style.backgroundColor = '#11ff00';
        document.getElementById('title').style.color = '#ffffff';

    } else if (result > 25 && result < 30) {
        document.getElementById('category').innerHTML = "You are overweight";
        document.getElementById('header').style.backgroundColor = '#ff9100';
        document.getElementById('title').style.color = '#ffffff';

    } else {
        document.getElementById('category').innerHTML = "You are obese";
        document.getElementById('header').style.backgroundColor = '#ff1f0a';
        document.getElementById('title').style.color = '#ffffff';

    }
    document.getElementById('result').innerHTML = "Result: " + result;

}

countingThroughWeight();
countingThroughFat();
countingThroughMuscle();

