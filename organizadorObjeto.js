
const dados = [
    { itsMe: true, admin: false, name: 'thiel' },
    { itsMe: true, admin: true, name: 'Rafael' },
    { itsMe: false, admin: false, name: 'Cris' },
    { itsMe: false, admin: true, name: 'Kainan' },
    { itsMe: true, admin: true, name: 'nicollas' }
]

const organizador = (dados) => {
    let newArray1 = [];
    let newArray2= [];
    let newArray3 = []
    for (let index = 0; index < dados.length; index++) {
        if (dados[index].itsMe && dados[index].admin) {
            newArray1.push(dados[index])
        }else if(!dados[index].itsMe && dados[index].admin){
            newArray2.push(dados[index])
        }else if(!dados[index].itsMe && !dados[index].admin){
            newArray3.push(dados[index])
        }
    }
     
     console.log(newArray1.concat(newArray2,newArray3))
}
organizador(dados)