/* Desafio ponto extra. 
Um aluno recebeu um ponto extra nas suas notas,
adicione esse ponto extra.
- 10, 9, 8, 7, 6
*/

const notas = [10, 9, 8, 7, 6]

let notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)

console.log(notasAtualizadas)


    


