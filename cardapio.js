total = 0;
	compra = []
	function preco(lanche){
		compra.push(lanche)
		quantidade = prompt("Digite a quantidade que deseja comprar");
	}
	function produtos(valor) {
		total += parseInt(valor)*parseInt(quantidade);
		alert("Seu carrinho: "+compra+"\nR$ "+total);
	}	
	function finalizar() {
		alert('Você finalizou o seu pedido e o total foi de: R$ ' +total + "\nOs seus produtos foram: " + compra +"\nQuantidade de produtos: ");
	}