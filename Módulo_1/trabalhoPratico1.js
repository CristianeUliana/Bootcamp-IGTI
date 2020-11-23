//O aluno deverá criar um programa que informará se determinado número é primo ou não. 
//Esse número deve ser definido diretamente em uma variável no código.


var x = 1597;
var y = 2;

while (y <= x) {
    if (y === x) {    
        console.log("O número " + x + " é primo");
        break;
    } else if  (x % y === 0) {
        console.log("O número " + x + " não é primo");
        break;
   } else {
        y++;
   }
     
}

