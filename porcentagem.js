
const porcentagem = (a,b) => {
    let resul = 0
    if(a == b){
       console.log(`B é 100% de A`) 
    }else if(b < a){
        resul = (b * 100) / a;
    }else if ( b > a){
        resul = (a * 100 )/ b
    }
    
}
porcentagem(50,50);