
function adicao(){
    let num1 = parseInt(document.getElementById('n1').value);
    let num2 = parseInt(document.getElementById('n2').value);
    if(!isNaN(num1) && !isNaN(num2)){
    let soma = num1+num2;
    document.getElementById('final').textContent = 'A soma desses numero :'+soma
}
    else{
        document.getElementById('final').textContent = 'Entradas Inválida!';
    }
}
function sub(){
    let num1 =  parseInt(document.getElementById('n1').value);
    let num2 =  parseInt(document.getElementById('n2').value);
    if(!isNaN(num1) && !isNaN(num2)){
    let subt = num1-num2;
    document.getElementById('final') .textContent = 'A subtração desses numero :'+subt}
    else{
        document.getElementById('final') .textContent = 'Entradas Inválida!';
    }
}
function multiplicacao(){
    let num1 =  parseInt(document.getElementById('n1').value);
    let num2 =  parseInt(document.getElementById('n2').value);
    if(!isNaN(num1) && !isNaN(num2)){
    let mult = num1*num2;
    document.getElementById('final') .textContent = 'A multiplicação desses numero :' + mult}
    else{
        document.getElementById('final') .textContent = 'Entradas Inválida!';
    }
}
function div(){
    let num1 =  parseInt(document.getElementById('n1').value);
    let num2 =  parseInt(document.getElementById('n2').value);
    if(!isNaN(num1) && !isNaN(num2)){
    let razao = num1/num2;
    document.getElementById('final') .textContent = 'A divisão desses numero :' + razao}
    else{
        document.getElementById('final') .textContent = 'Entradas Inválida!';
    }
}