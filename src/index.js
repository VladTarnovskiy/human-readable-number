module.exports = function toReadable (number) {
    let beforeTwenty = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 
    'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let beforeHundred = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    
    if (number === 0){
        return "zero";
    }

    let str = '';
    let ones = number%10;
    let dozens = Math.trunc(number%100/10);
    let hudreds = Math.trunc(number/100);

    if (hudreds >= 1){
        str = str + beforeTwenty[hudreds] + ' hundred' + (number % 100 === 0 ? '' : ' ');
    }

    if (dozens > 1){
        str = str + beforeHundred[dozens] + (number % 10 === 0 ? '' : ' ') + beforeTwenty[ones];
    } else {
        str = str + beforeTwenty[number%100]; 
    }

    return str;
}
