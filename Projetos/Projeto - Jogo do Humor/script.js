const imagem1 = document.getElementById('imgform')
const botao1 = document.getElementById('botao')

botao1.onclick = function(){
    if (botao1.value === "estado1"){
        imagem1.src='img/feliz.jpg';
        botao1.value ="estado2";
    }
    else if (botao1.value === "estado2"){
        imagem1.src='img/triste.jpg';
        botao1.value ="estado1";
    }
}
