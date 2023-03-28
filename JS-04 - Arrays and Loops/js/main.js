console.log("**Ejercicio 1**")
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
console.log("Parte #1");

console.log("** Ejercicio 2**")

for(let i = 1; i <= 5; ++i ) {
   let resultado = "";

   for(let j = 1; j <= i; ++j){
      resultado += "* ";
   }console.log(resultado);
}

 
