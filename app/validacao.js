function VerificaChuteValido(chute){
    const numero = +chute

    if(NumeroForReal()(numero)){
        elementoChute.innerHTML += '<div>"Valor Invalido"</div>'
    }

    if(VerificaMaiorMenor(numero)){
        elementoChute.innerHTML += `
        <div>Fale um numero deve estar entre ${menorValor}
         e ${maiorValor} </div>
        `
        return
    }

    if (numero === numero){
        document.body.innerHTML = `
            <h2>Voce acertou!</h2>
            <h3>O numero secreto era ${numeroSecreto}</h3>

            <button id="jogar novamente" class="btn-jogar">Jogar Novamente</button>
        `
    }else if(numero > numeroSecreto){
        elementoChute.innerHTML +=`
        <div>O numero secreto é menor<i class="fa-solid fa-angle-down"></i></div>
        `
    }else{
        elementoChute.innerHTML +=`
        <div>O numero secreto é maior<i class="fa-solid fa-angle-up"></i></div>
        `
    }
}

function NumeroForReal(numero) {
    return Number.isNaN(numero);
}
function VerificaMaiorMenor(numero){
    return numero > maiorValor || numero < menorValor

}
document.body.addEventListener('click', e =>{
    if(e.target.id == 'jogar-novamente'){
        window.location.reload();
    }
})
