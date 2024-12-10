
var randomNumbers = [];

for (var i = 0; i < 5; i++) { 
    var randomNumber = Math.floor(Math.random() * 100); 
    randomNumbers.push(randomNumber); 
}

document.write("Случайные числа: " + randomNumbers.join(', ') + "<br>");

var sum = 0;
for (var i = 0; i < randomNumbers.length; i++) {
    sum += randomNumbers[i];
}

document.write("Сумма случайных чисел: " + sum);