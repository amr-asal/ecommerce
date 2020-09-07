$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();
});
$('[data-add-to-cart]').click (function(e){
   alert('اضيف الى عربة الشراء');
   e.stopPropagation();
});
