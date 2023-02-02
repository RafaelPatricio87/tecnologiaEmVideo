
const dados = [
    {itsMe: true,admin:true,name:'Rafael'},
    {itsMe: false,admin:false,name:'Cris'},
    {itsMe: false,admin:true,name:'Kainan'}
]

const organizador = (dados) => {
    let resultado= []
    for(let index = 0; index < dados.length; index++){
        if(dados[index].itsMe && dados[index].admin){
               dados.unshift(dados.index)
            
        }
        console.log(resultado)
    }
//  console.log(dados[0].itsMe)
//  console.log(dados[0].admin)
}
organizador(dados)