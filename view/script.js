function load() {
    console.log("js");

    roun
}

function calculate() {
    var maxPoints = document.getElementById('pointBox').value;
    var onePercent = maxPoints / 100;

    var max1 = round(onePercent * 100, 0.5);
    var min1 = round(onePercent * 95, 0.5);
    var max2 = round(onePercent * 94.5, 0.5);
    var min2 = round(onePercent * 85, 0.5);
    var max3 = round(onePercent * 84.5, 0.5);
    var min3 = round(onePercent * 70, 0.5);
    var max4 = round(onePercent * 69.5, 0.5);
    var min4 = round(onePercent * 50, 0.5);
    var max5 = round(onePercent * 49.5, 0.5);
    var min5 = round(onePercent * 25, 0.5);
    var max6 = round(onePercent * 24.5, 0.5);
    var min6 = round(onePercent * 0, 0.5);

    if (min1 == max2) {
        max2 -= 0.5;
    }
    if (min2 == max3) {
        max3 -= 0.5;
    }
    if (min3 == max4) {
        max4 -= 0.5;
    }
    if (min4 == max5) {
        max5 -= 0.5;
    }
    if (min5 == max6) {
        max6 -= 0.5;
    }


    document.getElementById('mark1').innerHTML = max1 + ' - ' + min1;
    document.getElementById('mark2').innerHTML = max2 + ' - ' + min2;
    document.getElementById('mark3').innerHTML = max3 + ' - ' + min3;
    document.getElementById('mark4').innerHTML = max4 + ' - ' + min4;
    document.getElementById('mark5').innerHTML = max5 + ' - ' + min5;
    document.getElementById('mark6').innerHTML = max6 + ' - ' + min6;
}

//My own step method for rounding to either .0 or .5 (Stole it from here :D https://stackoverflow.com/questions/6137986/javascript-roundoff-number-to-nearest-0-5)
function round(value, step) {
    step || (step = 1.0);
    var inv = 1.0 / step;
    return Math.round(value * inv) / inv;
}