// let remove = document.getElementById('remove');
// let add = document.getElementById('add');
// let number = document.getElementById('num');

// let num = 0;



// add.onclick = function () {
//     num++;
//     number.innerHTML = num;
//     console.log('click')
// }


// remove.onclick = function () {
//     if (num < 1) {
//         num = 0;
//     }
//     else {
//         num--;
//         number.innerHTML = num;
//         console.log('click')
//         // add.style.backgroundColor = 'red';
//     }
// }

let firstNumber = document.getElementById('first-num');
let secondNumber = document.getElementById('second-num');

let result = document.getElementById('result');
let sum = document.getElementById('sum');
let minus = document.getElementById('minus');
let multiply = document.getElementById('multiply');
let devide = document.getElementById('devide');


sum.onclick = function () {
    let first = Number(firstNumber.value);
    let second = Number(secondNumber.value);
    result.innerHTML = first + second;

    // firstNumber.value = '';
    // secondNumber.value = '';
    // console.log('click')
};

minus.onclick = function () {
    let first = Number(firstNumber.value);
    let second = Number(secondNumber.value);
    result.innerHTML = first - second;

    // firstNumber.value = '';
    // secondNumber.value = '';
    // console.log('click')
};

multiply.onclick = function () {
    let first = Number(firstNumber.value);
    let second = Number(secondNumber.value);
    result.innerHTML = first * second;

    // firstNumber.value = '';
    // secondNumber.value = '';
    // console.log('click')
};
devide.onclick = function () {
    let first = Number(firstNumber.value);
    let second = Number(secondNumber.value);
    if (second == 0) {
        alert('không thể chia cho 0')
    } else {
        result.innerHTML = first / second;

        // firstNumber.value = '';
        // secondNumber.value = '';
        // console.log('click')
    }

};
