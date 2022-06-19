"use strict";
const btn = document.getElementById('btn');
const passwordField = document.getElementById('passwordField');
const rangeLabel = document.getElementById('rangeLabel');
const rangeInput = document.querySelector('input[type=range]');
btn && btn.addEventListener('click', e => {
    e.preventDefault();
    const length = +rangeInput.value;
    const password = generatePassword(length);
    if (passwordField)
        passwordField.innerHTML = password;
});
rangeInput && rangeInput.addEventListener('change', e => {
    var _a;
    if (rangeLabel)
        rangeLabel.innerHTML = (_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.value;
});
const generateRandomNumber = (first) => {
    let num = Math.floor(Math.random() * 10);
    if (num === 0 && first)
        return 1;
    return num;
};
const mergeNumbers = (num1, num2, num3) => {
    const fullNum = +((num1 + '') + (num2 + ''));
    if (num3 || num3 === 0)
        return +((fullNum + '') + (num3 + ''));
    return fullNum;
};
const generatePassword = (length) => {
    let password = '';
    for (let i = 0; i < length; i++) {
        const num1 = generateRandomNumber(true);
        const num2 = generateRandomNumber(false);
        let fullNum;
        if (num1 === 1) {
            const num3 = generateRandomNumber(false);
            fullNum = mergeNumbers(num1, num2, num3);
            if (fullNum > 126)
                fullNum = Math.floor(fullNum / 2);
        }
        else if (num1 === 2) {
            fullNum = mergeNumbers(num1, num2);
            fullNum += 13;
        }
        else if (num1 === 3 && num2 < 3) {
            fullNum = mergeNumbers(num1, num2);
            fullNum += (2 + generateRandomNumber(false));
        }
        else {
            fullNum = mergeNumbers(num1, num2);
        }
        password += String.fromCharCode(fullNum);
    }
    return password;
};
document.addEventListener('DOMContentLoaded', () => {
    const main = document.querySelector('main');
    if (main) {
        main.style.width = window.innerWidth + 'px';
        main.style.height = window.innerHeight + 'px';
    }
});
