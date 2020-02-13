function calcular() {
    const valor1 = Number.parseFloat(document.getElementById('valor1').value);
    const valor2 = Number.parseFloat(document.getElementById('valor2').value);
    const operador = document.getElementById('operador').value;
    const divResultado = document.getElementsByClassName('resultado')[0];
    let resultado;
    console.log(operador);
    if(operador == '+') {
        resultado = valor1 + valor2;
    } else if(operador == '-') {
        resultado = valor1 - valor2;
    } else if(operador == '*') {
        resultado = valor1 * valor2;
    } else if(operador == '/') {
        resultado = valor1 / valor2;
    }
    divResultado.innerHTML =  'RESULTADO: ' + resultado;
}