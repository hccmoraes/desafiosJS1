//Exiba apenas os que estão na lista abaixo usando foreach callback
//'Henrique', 'Fabiana', 'Julia', 'Pedro'

const nomes = ['Henrique', 'Fabiana', 'Julia', 'Pedro']

nomes.forEach(imprimeNomes);

function imprimeNomes(nome){
    console.log(nome)
}


// nomes.forEach(nome => {
//     console.log(nome)
    
// });