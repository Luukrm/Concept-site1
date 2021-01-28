
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


countingThroughWeight();
countingThroughFat();
countingThroughMuscle();

