var cont=0;
const botao = document.getElementById("button");
botao.addEventListener("click",mudarImagem);

function mudarImagem(){
    cont++;
    console.log(cont);
    if(cont==1){
        document.getElementById("tenis1").src= "./MEDIA/IMG/tenis2.jpeg";
        document.getElementById("text").innerText = "MODELO: ROUBADO";
        document.getElementById("text1").innerText = "VALOR: R$  349,90 conto";
        document.getElementById("text2").innerText = "TAMANHO: 36 até 42";
    }
    else if (cont == 2) {
        document.getElementById("tenis1").src ="./MEDIA/IMG/tenis3.jpg";
        document.getElementById("text").innerText = "MODELO: CÓPIA";
        document.getElementById("text1").innerText = "VALOR: R$ 149,90 conto";
        document.getElementById("text2").innerText = "TAMANHO: 31 até 43";
    } else if (cont == 3) {
        document.getElementById("tenis1").src ="./MEDIA/IMG/tenis4.jpg";
        document.getElementById("text").innerText = "MODELO: CARÍSSIMO";
        document.getElementById("text1").innerText = "VALOR: R$ 229,90 conto";
        document.getElementById("text2").innerText = "TAMANHO: 31 até 38";
    }
    else {
        document.getElementById("tenis1").src ="./MEDIA/IMG/tenis1.jpg";
        document.getElementById("text").innerText = "MODELO: FEIO, APENAS";
        document.getElementById("text1").innerText = "VALOR: R$ 499,99 conto";
        document.getElementById("text2").innerText = "TAMANHO: CONSULTAR";
        cont=0;
    }
}