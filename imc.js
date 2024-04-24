const calcular = document.getElementByld('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = +document.getElementById('altura').value;
    const peso = +document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== "&& altura !==" && peso !== "){
        const valorIMC= (peso/(altura*altura)).toFixed(1);
        let classificao=";

        if(valorIMC<18.5){
            classificao='Abaixo do peso. Tenha foco!';
        }else if(valorIMC<25){
            classificao='Com o peso ideal. Esse é o caminho!';
        }else if(valorIMC<30){
            classificao='Levemente acima do peso. Dá pra melhorar!';
        }else if(valorIMC<35){
            classificao='Com obesidade grau I. Atenção!';
        }
    }

}