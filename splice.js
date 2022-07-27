// Crie uma lista de chamada com os seguintes alunos:
// 'João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'

// Porém Ana e Caio mudaram de escola e o Rodrigo entrou nesta sala.
// Atualiza a lista de chamada.

// splice (método) serve para retirar e adicionar algum elemento da array em qualquer posição

const listaDeChamada = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo']

//Será informado três parâmetros,
// o primeiro parâmetro informa qual o índice onde começamos a remover 
// o segundo parâmetro informa até qual índice iremos remover
// o terceiro parâmetro informa qual elemento iremos adicionar
listaDeChamada.splice(1, 2, 'Rodrigo','Henrique');

// Apenas para adiconar elementos sem remover nenhum índice,
// informamos a partir de qual índice queremos adiconar e no 
// lugar de informar o índice de término da remoção, informamos
// 0.
listaDeChamada.splice(3, 0, 'Pedro')

console.log(`Lista de chamada: ${listaDeChamada}`)
