var app = angular.module('lojaApp', []);

app.controller('LojaController', function($scope) {
    
    var dadosPacotes = {
        italia: { nome: 'Itália', preco: 5000, passagem: 'Ida e Volta inclusa', hospedagem: 'Hotel Central com café', passeios: 'Coliseu e Fontes de Roma' },
        franca: { nome: 'França', preco: 6000, passagem: 'Ida e Volta inclusa', hospedagem: 'Hotel Premium em Paris', passeios: 'Torre Eiffel e Arco do Triunfo' },
        australia: { nome: 'Austrália', preco: 7500, passagem: 'Ida e Volta inclusa', hospedagem: 'Resort em Sydney', passeios: 'Opera House e Praias Locais' }
    };

    $scope.carrinho = [];

    $scope.adicionarAoCarrinho = function(id) {
        $scope.carrinho.push(angular.copy(dadosPacotes[id]));
    };

    $scope.calcularTotal = function() {
        return $scope.carrinho.reduce((total, item) => total + item.preco, 0);
    };


    $scope.finalizarReserva = function() {
        alert("☆ Pacote reservado com sucesso! Você receberá mais informações no email. Boa viagem!");
        $scope.carrinho = []; 
    };
});