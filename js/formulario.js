const cpf = document.querySelector("#cpf");

cpf.addEventListener("blur", () => {
  let value = cpf.value.replace(/^([\d]{3})([\d]{3})([\d]{3})([\d]{2})$/, "$1.$2.$3-$4");
  
  cpf.value = value;
});

const rg = document.querySelector("#rg");

rg.addEventListener("blur", () => {
  let value = rg.value.replace(/^([\d]{2})([\d]{3})([\d]{3})([\d]{1})$/, "$1.$2.$3-$4");
  
  rg.value = value;
});

const telefone = document.querySelector("#telefone");

telefone.addEventListener("blur", () => {
  let value = telefone.value.replace(/^([\d]{2})([\d]{5})([\d]{4})$/, "($1) $2-$3");
  
  telefone.value = value;
});

//Função para o Botão

const botao = document.querySelector("#formularioPreenchido")

botao.addEventListener('submit', (evento) => {
    // function guardaFormulario(){
        //Capturar valores e criar vareiavel para novo objeto (json)

        evento.preventDefault()
        var formCliente = new Object();
    
        formCliente.nome = document.getElementById("nome").value;
        formCliente.sobrenome = document.getElementById("sobrenome").value;
        formCliente.idade = document.getElementById("idade").value;
        formCliente.cpf = document.getElementById("cpf").value;
        formCliente.rg = document.getElementById("rg").value;
        formCliente.profissao = document.getElementById("profissao").value;
        formCliente.email = document.getElementById("email").value;
        formCliente.telefone = document.getElementById("telefone").value;
    
        //Converter para String JSON
        var json = JSON.stringify(formCliente)
        console.log(json);
    
        //Retorna o valor primitivo de um objeto
        console.log(formCliente.valueOf())
    
        //IMPRIMIR OU CTRL P
        document.getElementById('Nome').innerHTML = `Nome: ` + formCliente.nome;
        document.getElementById('Sobrenome').innerHTML = `Sobrenome: ` + formCliente.sobrenome;
        document.getElementById('Idade').innerHTML = `Idade: ` + formCliente.idade;
        document.getElementById('Cpf').innerHTML = `CPF: ` + formCliente.cpf;
        document.getElementById('Rg').innerHTML = `RG: ` + formCliente.rg;
        document.getElementById('Profissao').innerHTML = `Profissão: ` + formCliente.profissao;
        document.getElementById('Email').innerHTML = `E-mail: ` + formCliente.email;
        document.getElementById('Telefone').innerHTML = `Telefone: ` + formCliente.telefone;    
  
        window.print();

})