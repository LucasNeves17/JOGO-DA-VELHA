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
