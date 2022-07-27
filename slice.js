//slice serve para cortar/dividir uma array

const nomes = ['João', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marjorie',
'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia',
'Vivian', 'Isabel', 'Vinicius', 'Renan', 'Renata', 'Daisy', 'Camilo'
]
nomes.push('Pedro', 'Julia');

//console.log(nomes);

const sala1 = nomes.slice(0, nomes.length/2);
const sala2 = nomes.slice(nomes.length/2);

const totSala1 = nomes.length/2;
const totSala2 = nomes.length/2;

console.log(`Total de Alunos somando as tumas: ${nomes.length}`)
console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Quantidade de alunos sala 1: ${totSala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
console.log(`Quantidade alunos sala 2: ${totSala2}`)