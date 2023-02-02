const dados = {
    nome: null,
    sobrenome: 'Patricio',
    idade:35,
    cep:null
}


const faxina = (dados) => {
   for(let obj in dados){
    if(dados[obj]=== null){
         delete dados[obj] 
    }
   }
   console.log(dados)
}
faxina(dados)