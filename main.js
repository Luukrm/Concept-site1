let i;

async function countingThroughWeight() {
    for (i = 0; i < 86; i++) {
        document.getElementById("weight").innerHTML = i + 'kg';
        await sleep(25);
    }
}

async function countingThroughFat() {
    for (i = 0; i < 18; i++) {
        document.getElementById("fat").innerHTML = i + '%';
        await sleep(35);
    }
}
async function countingThroughMuscle() {
    for (i = 0; i < 44; i++) {
        document.getElementById("muscle").innerHTML = i +1 + 'kg';
        await sleep(25);
    }
}


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


countingThroughWeight();
countingThroughFat();
countingThroughMuscle();
$(document).scroll(function () {
    var y = $(this).scrollTop();
    if (y > 50) {
        $('.stats-number').fadeIn();
    } else {
        $('.stats-number').fadeOut();
    }

});
