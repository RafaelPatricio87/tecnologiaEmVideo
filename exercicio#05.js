
let preco = 60;
let deconto = 10;
let parcelado = preco / 3
let avista ;

avista = preco - (deconto/100) * preco;

console.log(`Preço:   R$${(preco.toFixed(2).replace('.',','))}`);
console.log(`Á vista: R$${(avista.toFixed(2).replace('.',','))}`);
console.log(`Preço:   R$${(parcelado.toFixed(2).replace('.',','))}`)