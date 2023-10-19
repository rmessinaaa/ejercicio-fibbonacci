let num = parseInt(prompt("Ingresa la cantidad de numeros que quiere de la serie de fibbonacci: "));
var listaFibbonacci = [0, 1];
for(var i = 2; i <= num - 1 ; i++){
    resultado = listaFibbonacci[i - 1] + listaFibbonacci[i - 2];
    listaFibbonacci.push(resultado);
    
}

console.log(listaFibbonacci);