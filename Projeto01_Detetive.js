let resposta1 = prompt('Telefonou para a vítima? ("SIM" ou "NÃO")');
console.log();
let resposta2 = prompt('Esteve no local do crime? ("SIM" ou "NÃO")');
console.log();
let resposta3 = prompt('Mora perto da vítima? ("SIM" ou "NÃO")');
console.log();
let resposta4 = prompt('Devia para a vítima? ("SIM" ou "NÃO")');
console.log();
let resposta5 = prompt('Já trabalhou com a vítima? ("SIM" ou "NÃO")');

let soma = 0;

if (resposta1.toUpperCase() == 'SIM') {
  soma = soma + 1;
}
if (resposta2.toUpperCase() == 'SIM') {
  soma = soma + 1;
}
if (resposta3.toUpperCase() == 'SIM') {
  soma = soma + 1;
}
if (resposta4.toUpperCase() == 'SIM') {
  soma = soma + 1;
} 
if (resposta5.toUpperCase() == 'SIM') {
 soma = soma + 1;
}

console.log();

if (soma <= 1){
  console.log('Classificação: INOCENTE');
}
if (soma == 2){
  console.log('Classificação: SUSPEITO');
}
if (soma == 3 || soma == 4){
  console.log('Classificação: CÚMPLICE');
}
if (soma == 5){
  console.log('Classificação: ASSASSINO');
}
