
const cacaLetra = (letra , frase) => {
    let contLetra = 0;
    for(let i = 0  ; i < frase.length; i ++){
        if(frase[i].includes(letra)){
        contLetra = contLetra + 1
    }
}
  console.log(contLetra)
}
cacaLetra('a','Rafael')