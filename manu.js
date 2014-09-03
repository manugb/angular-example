(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	app.controller('PanelController', function(){
		this.tab = 1;

		this.setTab = function(setTab){
			this.tab = setTab;
		}; 

		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
	});

	var gems = [
	{
		name: 'agus',
		price: 2.95,
		description: 'Ruby rocks',
		canPurchase: false,
	},
	{
		name: 'manu',
		price: 4,
		description: 'Shapping up with angular',
		canPurchase: false,
	},
	{
		name: 'jp',
		price: 7,
		description: 'La singleton-class de Class es @(Class:Class) y su class es Class',
		canPurchase: true,
	},
	{
		name: 'chano',
		price: 9,
		description: 'Vos fuma que lo saco andando decian',
		canPurchase: true,
	}
	];
})();