/* Crie uma função que receba por argumento o nome de uma aluno.
Verifique se o aluno está na lista e retorne a média final que se encontra no mesmo índice
Caso o nome do aluno não esteja na lista, retorne uma mensagem de que o aluno não foi encontrado */

let listaAlunos = ['Henrique', 'Fabiana', 'Julia', 'Pedro']
let media = [8, 9, 9.5, 10]

let listaDimensionais = [listaAlunos, media]

// includes sempre retorno um booleano
// indexOf = vai buscar o indice um parametro informado

function procuraAluno(nomeDoAluno) {
    if(listaDimensionais[0].includes(nomeDoAluno)){
       let indice = listaDimensionais[0].indexOf(nomeDoAluno)
       
        return listaDimensionais[0][indice] + 'sua nota foi ' + listaDimensionais[1][indice]
    } else{
        return "Aluno não cadastrado"
    }
}

console.log(procuraAluno('Henrique'))

