type FizzBuzzType = number | string;

let numbers: {[key: string]: any} = {
    '3': 'Fizz',
    '5': 'Buzz',
    '7': 'Whizz'
}

const fizzBuzzConverter = (number: number): FizzBuzzType => {
    let res = ''
    let keys = Object.keys(numbers)
    if (number > 2) {
        keys.forEach((i) => {
            res += number % +i === 0 || JSON.stringify(number).indexOf(i) !== -1 ? numbers[i] : ''
        })
    } else {
        res = JSON.stringify(number)
    }
    return res
}


console.log(fizzBuzzConverter(30));