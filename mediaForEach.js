// Calcule a media entre as notas usando o foreach;
// 10, 6.5, 8, 7.5

let notas = [10, 6.5, 8, 7.5];

let somaNotas = 0;

// for(i = 0; i < notas.length; i++){
//     somaNotas = somaNotas + notas[i]
// }

//callback - chame de volta
notas.forEach(i => {
    somaNotas += i
    
});

media = somaNotas / notas.length;

console.log(media)