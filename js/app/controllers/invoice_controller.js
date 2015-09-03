(function() {
	define(['angular'], function() {
		'use strict';
		angular.module('invoice_controller', []).controller('InvoiceController', function($scope) {
		 	console.log('controller loaded!');
			this.pay = function() {
				alert('paidd!');
				console.log('paid!');				
			}
  		});
		angular.bootstrap(document, ['invoice_controller']);
	});
})();
