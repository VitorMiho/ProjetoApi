//Biblioteca Axios para realizar uma requisição HTTP a API da OpenWeatherMAP e obter uma previsão.

//Esta linha define a função getWeather como uma função assincrona. Esperando uma resposta da API.
async function getWeather(){
    var cidade = document.getElementById("temperatura").value;
        //Nesta linha fazendo uma chamada a API usando a biblioteca AXIOS. A URL da API inclui as informações da localização(Mogi das Cruzes), a unidade de medida (Celsius) e a chave API KEY.
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=64ed82577ced7f69cb1687f0ce536131`);

        //Resposta em (Celsius e a localização) e armazenar na variavel tempCelsius

        const tempCelsius = response.data.main.temp;

        document.querySelector('#resposta').innerHTML = `Á temperatura atual é em ` + cidade + ` é de ${tempCelsius.toFixed(2)}°C.`;
    }
getWeather();
