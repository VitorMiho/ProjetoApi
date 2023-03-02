const resultado = document.querySelector("[data-total]")
const real = document.querySelector('[data-real]')
    
function total(){
    fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {
        console.log(economia);
        var dolar = document.getElementById('dolar').value = economia.USDBRL.bid;
        let numberReal = Number(real.value);
        let resultadoFinal = numberReal/dolar;
        resultado.value = resultadoFinal.toFixed(2);    
    })    
}

fetch (`http://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta => {
        return resposta.json()
    }).then(economia => {
        var dolar = document.getElementById('dolar').value = economia.USDBRL.bid;
    })