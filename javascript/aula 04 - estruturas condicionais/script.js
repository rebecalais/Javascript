var time1 = 0;
var time2 = 0;
var placar;

//aninhamento de ifs
 /* if (time1 != -1) {
    if (time1 > 0) {
        console.log('Time 1 marcou ponto!');
    }
    else if (time2 > 0) {
        console.log('Time 2 marcou ponto');
    }
    else {
        console.log('Ninguém marcou ponto');
    }
} */

// if ternário
/* time1 != -1 && time2 != -1 ? console.log('Os times são válidos') : console.log('Os times são inválidos');
//usando if
if (time1 > 0 && time2 == 0) {
    console.log('Time 1 marcou ponto!');
    placar = time1 > time2;
}
//usando else if
else if (time2 > 0 && time1 == 0) {
    console.log('Time 2 marcou ponto');
    placar = time2 > time1;
}
//usando else
else {
    console.log('Ninguém marcou ponto');
}

switch (placar) {
    case placar = time1 > time2:
        console.log('Time1 ganhou!');
        break;
    case placar = time2 > time1:
        console.log('Time2 ganhou!');
        break;
    default: 
    console.log('Ninguém ganhou!')
} */

//Estruturas de repetição

let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5',];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3',};

// for executa uma instrução até que ela seja falsa
/* for (let indice = 0; indice < array.length; indice ++) {
    console.log(indice);
} */

// for/in executa repetição a partir de uma propriedade 

//com array
/* for (let i in array) {
    console.log(i);
} */

//com object
/* for (i in object) {
    console.log(i);
} */

// for/of executa repetição a partir de um valor
//com array
/* for (i of array) {
    console.log(i);
} */

//com object
/* for (i of object.propriedade1) {
    console.log(i);
} */

// while
/*var a = 0;
/* while (a < 10) {
    a++;
    console.log(a);
} */

// Do/while
/* do {
    a++;
    console.log(a);
} while (a < 10) */

