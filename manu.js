(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', ['$http', function($http){
		var store = this; 

		store.products = [];

		$http.get('http://localhost:9000/mostrar').
			success(function(data){
				store.products = data;
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