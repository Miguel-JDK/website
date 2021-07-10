/*efectos de jquery en la pagina de cafe rock, el aparece y desaparece*/

$(document).ready(function(){
// efecto menu
// accedemos al menu y sus enlaces .metodo(ejecutar la funcion(del archivo index,elemento){

//$(este elemento actual.estilo)
   $('.menu a').each(function(index2 , elemento){
   	$(this).css({
   		'top': '-200px'
//(este elemento actual).animacion({objeto},tiempo);
   	});
   	$(this).animate({
   		top:'0' //----> objeto
   	},1500 + (index2 * 500))//----->tiempo

   	//el index es como los arreglos

   });
   //efecto header
   if($(window).width()> 800){
   	  $('header .textos').css({
   	  	opacity:0,
   	  	margintop:0   //---->son los objetos
   	  })

   	  $('header .textos').animate({
   	  	opacity:2,
   	  	margintop:'-80px'   //---->son los objetos
   	  },4000); //-----> los 2000 son 2 segundos.

   }

   //scroll elemntos menu

   var acercaDe = $('#acerca-de').offset().top,
       menu =  $('#platillos').offset().top,
       galeria = $('#galeria').offset().top,
       ubicacion =   $('#ubicacion').offset().top;
    
       
         $('#btn-acerca-de').on('click',function(e){
       	      e.preventDefault();


       	 $('html, body').animate({
       	 	scrollTop:acercaDe -130
       	 },500);
S
       });

         $('#btn-menu').on('click',function(e){
       	      e.preventDefault();


       	 $('html, body').animate({
       	 	scrollTop:menu
       	 },500);

       });

            $('#btn-galeria').on('click',function(e){
       	      e.preventDefault();


       	 $('html, body').animate({
       	 	scrollTop:galeria
       	 },500);

       });

          $('#btn-ubicacion').on('click',function(e){
       	      e.preventDefault();


       	 $('html, body').animate({
       	 	scrollTop:ubicacion
       	 },500);

       });
      
});