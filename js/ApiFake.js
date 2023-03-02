const myArray = `{"nome1": "Neymar", "profissao1": "Jogador de futebol", "idade1": "31 Anos",
                  "nome2": "Selena Gomez", "profissao2": "Atriz", "idade2": "30 Anos",
                  "nome3": "Elon Musk", "profissao3": "Empresário", "idade3": "51 Anos",
                  "nome4": "Kylie Jenner", "profissao4": "Influenciadora digital", "idade4": "25 Anos",
                  "nome5": "Michael Jackson", "profissao5": "Cantor", "idade5": "50 Anos",                 
                  "nome6": "Bruno Messias", "profissao6": "Professor", "idade6": "36 Anos"}`

                const data = JSON.parse(myArray);

function api1(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome1;
    document.getElementById("profissao").innerHTML = `Profissão: ` + data.profissao1;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade1;
    document.getElementById("img").src = "imagens/neymar.jpg";
}

function api2(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome2;
    document.getElementById("profissao").innerHTML = `Profissão: ` + data.profissao2;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade2;
    document.getElementById("img").src = "imagens/selena gomez.webp";
}   

function api3(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome3;
    document.getElementById("profissao").innerHTML = `Profissão: ` + data.profissao3;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade3;
    document.getElementById("img").src = "imagens/elon musk.avif";
}

function api4(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome4;
    document.getElementById("profissao").innerHTML = `Profissão: ` + data.profissao4;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade4;
    document.getElementById("img").src = "imagens/kylie jenner.jpg";
}

function api5(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome5;
    document.getElementById("profissao").innerHTML = `Profissão: ` + data.profissao5;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade5;
    document.getElementById("img").src = "imagens/michael jakcson.webp";
}

function api6(){
    document.getElementById("nome").innerHTML = `Nome: ` + data.nome6;
    document.getElementById("profissao").innerHTML = `Profissão: ` + data.profissao6;
    document.getElementById("idade").innerHTML = `Idade: ` + data.idade6;
    document.getElementById("img").src = "imagens/bruno.jfif";
}
