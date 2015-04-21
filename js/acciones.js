// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btndatos').on('click',function(){
		//alert('Hola')
		$('body').pagecontainer("change", "#datos", 
		{transition:"flip"});
	});//click btndatos
//}); 
});
// JavaScript Document
$(document).ready(function(e) {
//document.addEventListener("deviceready",function(){
	$('#btnresultado').on('click',function(){
		//alert('Hola')
		$('body').pagecontainer("change", "#resultado", 
		{transition:"flip"});
		var imc;
		var nombre = $('#txtnombre').val();
		var peso = $('#txtpeso').val();
		var talla = $('#txttalla').val();
		imc=(peso/(talla*talla));
		$('#imc').text('nombre: ' + $('#txtnombre').val() + ' imc= '+ imc);
		//alert (peso);
		//alert (talla);
	});//click btndatos
//}); 
});

