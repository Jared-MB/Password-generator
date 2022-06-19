const btn = document.getElementById('btn')
const passwordField = document.getElementById('passwordField')
const rangeLabel = document.getElementById('rangeLabel')
const rangeInput = document.querySelector('input[type=range]')

btn && btn.addEventListener('click', () => {
    const length = +(rangeInput as HTMLInputElement).value
    const password = generatePassword(length)
    if (passwordField) passwordField.innerHTML = password
})

rangeInput && rangeInput.addEventListener('change', e => {
    if (rangeLabel) rangeLabel.innerHTML = (e?.target as HTMLInputElement)?.value
})

const generateRandomNumber = (first : boolean) : number => {
    let num = Math.floor(Math.random() * 10)
    if (num === 0 && first) return 1
    return num 
}

const mergeNumbers = (num1 : number, num2 : number, num3? : number) : number => {
    const fullNum = +((num1 + '') + (num2 + ''))
    if (num3 || num3 === 0) return +((fullNum + '') + (num3 + ''))
    return fullNum
}

const generatePassword = (length : number) : string => {
    let password = ''
    
    for (let i = 0; i < length; i++){
        const num1 = generateRandomNumber(true)
        const num2 = generateRandomNumber(false)
        let fullNum : number
        if (num1 === 1){
            const num3 = generateRandomNumber(false)
            fullNum = mergeNumbers(num1, num2, num3)
            if (fullNum > 126) fullNum = Math.floor(fullNum / 2) 
        }
        else if (num1 === 2){
            fullNum = mergeNumbers(num1, num2)
            fullNum += 13
        }
        else if (num1 === 3 && num2 < 3){
            fullNum = mergeNumbers(num1, num2)
            fullNum += (2 + generateRandomNumber(false)) 
        }
        else {
            fullNum = mergeNumbers(num1, num2)
        }
        password += String.fromCharCode(fullNum)
    }

    return password
} 