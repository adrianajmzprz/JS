console.log("**EJERCICIO 1**")
let fila =["Sofia", "David", "Juan"];
console.log("Parte #1");
console.log(fila);
fila.push("Sara");
fila.push("Agustin");
fila.shift();
console.log("Parte #2");
console.log(fila)
fila.splice(1,0, "Renata");
fila.push("Elena");
fila.shift();
console.log("Parte #3");
console.log(fila);

console.log("** EJERCICIO 2**")

for(let i = 1; i <= 5; ++i ) {
   let resultado = "";

   for(let j = 1; j <= i; ++j){
      resultado += "* ";
   }console.log(resultado);
}

console.log("***EJERCICIO 3**")

function ejercicio3 (n) {
   let xvalue = n;
while (xvalue >= 0){
   console.log (xvalue);
   xvalue -= 0.5;
  }
}
 function numerosImpares(){
   let index = 1
    for(index =1; index <= 100; index = 1+2) {
      console.log(index);
   }
 } numerosImpares();

