const jogador1 = "X";
const jogador2 = "O";
var primeiraJogada = jogador1;
var fimdeJogo = false;
var images = new Array();

var sequencia = [];
var rodadaAtual = 0;
var sequenciaPosicao = 0;
var fimdeJogo = false;

preloadImages("imagens/x.png","imagens/o.png")
atualizaIndicador();
inicializarEspacos();

function preloadImages(){
	for (i = 0; i < preloadImages.arguments.length; i++) {
					images[i] = new Image()
					images[i].src = preloadImages.arguments[i]
				}
}

function atualizaIndicador(){

	if (fimdeJogo) { return;}

	if (primeiraJogada == jogador1) {

		var player = document.querySelectorAll("div#indicador img")[0];
		player.setAttribute("src", images[0].src);
	} else{

		var player = document.querySelectorAll("div#indicador img")[0];
		player.setAttribute("src", images[1].src);
	}
}

function inicializarEspacos(){

	var espacos = document.getElementsByClassName("espaco");
	for (var i = 0; i < espacos.length; i++) {

		espacos[i].innerHTML = "<img id='p1' src='"+images[0].src+"' border='0'><img id='p2' src='"+images[1].src+"' border='0'>";
		espacos[i].getElementsByTagName('img')[0].style.display = "none";
		espacos[i].getElementsByTagName('img')[1].style.display = "none";

		espacos[i].addEventListener("click", function(){

			if (fimdeJogo) {return;}



			if(this.getAttribute("jogada") == ""){

				if (primeiraJogada == jogador1) {
					this.getElementsByTagName('img')[0].style.display = "inline";
					//this.innerHTML = "<img src='"+images[0].src+"' border='0'>";
					this.setAttribute("jogada", jogador1);
					primeiraJogada = jogador2;

				}else{
					this.getElementsByTagName('img')[1].style.display = "inline";
					//this.innerHTML = "<img src='"+images[1].src+"' border='0'>";
					this.setAttribute("jogada", jogador2);
					primeiraJogada = jogador1;
				}
				atualizaIndicador();
				verificarVencedor();

			}

		});
	}
}
