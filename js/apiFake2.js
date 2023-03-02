//Metodo fetch() para buscar o arquivo dados.json ou qualquer API externa, transformando o resultado em um objeto, usando outro método response.json.

fetch('/json/dados.json')
.then(response => response.json())
.then(corpo => {
    
    //Acessando os dados do objeto JSON e adicionando ao HTML dentro do elemento DIV usando a propriedade innerHTML.
    document.getElementById('imagemRock').innerHTML = corpo.rock.imagem;
    document.getElementById('nomeRock').innerHTML = corpo.rock.name;
    document.getElementById('discoRock').innerHTML = corpo.rock.album;
    document.getElementById('estiloRock').innerHTML = corpo.rock.style;
    document.getElementById('precoRock').innerHTML = corpo.rock.price;

    document.getElementById('imagemSamba').innerHTML = corpo.samba.imagem;
    document.getElementById('nomeSamba').innerHTML = corpo.samba.name;
    document.getElementById('discoSamba').innerHTML = corpo.samba.album;
    document.getElementById('estiloSamba').innerHTML = corpo.samba.style;
    document.getElementById('precoSamba').innerHTML = corpo.samba.price;

    document.getElementById('imagemPop').innerHTML = corpo.pop.imagem;
    document.getElementById('nomePop').innerHTML = corpo.pop.name;
    document.getElementById('discoPop').innerHTML = corpo.pop.album;
    document.getElementById('estiloPop').innerHTML = corpo.pop.style;
    document.getElementById('precoPop').innerHTML = corpo.pop.price;

    document.getElementById('imagemPagode').innerHTML = corpo.pagode.imagem;
    document.getElementById('nomePagode').innerHTML = corpo.pagode.name;
    document.getElementById('discoPagode').innerHTML = corpo.pagode.album;
    document.getElementById('estiloPagode').innerHTML = corpo.pagode.style;
    document.getElementById('precoPagode').innerHTML = corpo.pagode.price;
});
