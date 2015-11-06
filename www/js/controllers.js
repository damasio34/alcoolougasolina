angular.module("starter")
	.controller("MainController", function($scope) {
		$scope.Model = {
			Gasolina: { Preco: 3.56, Consumo: 12 },
			Alcool: { Preco: 2.59, Consumo: 8.5 },
			Diferenca: { Preco: 0, Consumo: 0 }
		};
		
		$scope.calcular = function() {
			$scope.Model.Diferenca.Preco = $scope.Model.Alcool.Preco / $scope.Model.Gasolina.Preco;
			$scope.Model.Diferenca.Consumo = $scope.Model.Gasolina.Consumo - $scope.Model.Alcool.Consumo;
			
			$scope.Model.Alcool.PrecoKm = $scope.Model.Alcool.Preco / $scope.Model.Alcool.Consumo;
			$scope.Model.Gasolina.PrecoKm = $scope.Model.Gasolina.Preco / $scope.Model.Gasolina.Consumo;
			
			$scope.Model.MelhorOpcaoPorCalculo = $scope.Model.Diferenca.Preco > 0.7 ? "Gasolina" : "Alcool"; 
			$scope.Model.MelhorOpcaoPorKmLitro = $scope.Model.Alcool.PrecoKm <= $scope.Model.Gasolina.PrecoKm ? "Alcool" : "Gasolina";
		}
	});