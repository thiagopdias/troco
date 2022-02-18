let produto = document.querySelector('input#produto')
let recebido = document.querySelector('input#recebido')
let resposta = document.querySelector('div#resposta')



function calcularTroco() {
    if(produto.value.length == 0) {
        alert('Preencha todos os campos!')
    } else if(recebido.value.length == 0) {
        alert('Preencha todos os campos!')
    }

    let prod = Number(produto.value)
    let recebido2 = Number(recebido.value)
    let resultadoTroco = recebido2 - prod
    let troco = resultadoTroco.toFixed(2)
    resposta.innerHTML = ''
    resposta.innerHTML += `<p>Seu troco é: ${troco}</p>`

    let cincoCentavos = 0
    let dezCentavos = 0
    let vinteCincoCentavos = 0
    let ciquentaCentavos = 0
    let umReal = 0
    

    while(resultadoTroco > 0) {
        if(resultadoTroco > 0.99) {
            resultadoTroco = resultadoTroco - 1
            umReal++
        } else if(resultadoTroco > 0.49) {
            resultadoTroco = resultadoTroco - 0.50
            ciquentaCentavos++
        } else if(resultadoTroco > 0.24) {
            resultadoTroco = resultadoTroco - 0.25
            vinteCincoCentavos++
        } else if(resultadoTroco > 0.09) {
            resultadoTroco = resultadoTroco - 0.10
            dezCentavos++
        } else if(resultadoTroco > 0.04) {
            resultadoTroco = resultadoTroco - 0.05
            cincoCentavos++
        } else {
            resultadoTroco = resultadoTroco - 0.01
            resposta.innerHTML = ''
            resposta.innerHTML += `<p>Infelizmente no Brasil não temos mais a moeda de R$0,01 centavo. Seu troco é R$ ${troco}. Então você poderá receber:</p>`
        }
    }

    resposta.innerHTML += `<p>Você poderá receber ${umReal} moedas de R$1,00</p>`
    resposta.innerHTML += `<p>Você poderá receber ${ciquentaCentavos} moedas de R$0,50<p/>`
    resposta.innerHTML += `<p>Você poderá receber ${vinteCincoCentavos} moedas de R$0,25<p/>`
    resposta.innerHTML += `<p>Você poderá receber ${dezCentavos} moedas de R$0,10<p/>`
    resposta.innerHTML += `<p>Você poderá receber ${cincoCentavos} moedas de R$0,05<p/>`
}