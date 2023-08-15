module.exports = function toReadable (number) {
    if(number === 0){
        return 'zero'
    }
  
    let ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
    let teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let tens = ["twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
    let tensDigit =   Math.floor(number /10)
    let hundredsDigit =   Math.floor(number /100)
    let onesDigit = number % 10
    let hunDigit = number % 100
  
    if(number < 10){
      return ones[number -1]
    } else if(number >= 10 && number < 20){
      return teens[number % 10]
    } else if(number >= 20 && number < 100){
      if (onesDigit === 0){
        return tens[tensDigit - 2]
      } else{
        return tens[tensDigit - 2] + ' ' + ones[onesDigit - 1]
      }
    } else if (number >= 100) {
      if (hunDigit === 0){
        return ones[hundredsDigit - 1] + ' ' + 'hundred'
     } else{
      return  ones[hundredsDigit - 1] + ' ' + 'hundred' + ' ' + toReadable(hunDigit)
     }
    }
}
