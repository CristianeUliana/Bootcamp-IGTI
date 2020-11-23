//Qual a soma dos números primos menores que 15?


var primos = []

var y = 2

var i = 2

while (i < 15) {
    
    while (i > y) {
       if  (i % y === 0) {
        i++;
        y = 2;
        break;
        } else {
        y++;
        }
    }
    if (i === y) {    
        primos.push(i);
        i++;
        y = 2;
    }
}
console.log(primos);
console.log(i);

var sum = 0;

for (var j = 0; j < primos.length; j++) {
    sum += primos[j];
    }

    console.log("A soma é: " + sum);