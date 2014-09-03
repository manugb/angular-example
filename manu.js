(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', ['$http', function($http){
		var store = this; 

		store.products = [];

		$http.get('http://apicaba.com.ar/api/recursos/puntos-wifi-publicos').
			success(function(data){
				data.datos.shift();
				store.products = data.datos;
			});
	}]);

	app.controller('PanelController', function(){
		this.tab = 1;

		this.setTab = function(setTab){
			this.tab = setTab;
		}; 

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

})();