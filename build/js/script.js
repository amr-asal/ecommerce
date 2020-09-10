$(document).ready(function(){
   $('[data-toggle="tooltip"]').tooltip();

$('[data-add-to-cart]').click (function(e){
   alert('اضيف الى عربة الشراء');
   e.stopPropagation();
});
$('.product-option input[type="radio"]').change(function(){
   $(this).parents('.product-option').siblings().removeClass('active');
   $(this).parents('.product-option').addClass('active');
});

$('[data-remove-from-cart]').click(function(){
   $(this).parents('[data-product-info]').remove();
   calculateTotalPrice(); 
});


//عندما تتغير كمية المنتج
$('[data-product-quantity]').change(function() {

   //اجلب الكمية الجديده
 var newQuantity = $(this).val();
   //ابحث عن السطر الذي يحتوي معلومات المنتج
var $parent = $(this).parents('[data-product-info]');

   //اجلب سعر القطعه الواحده من معلومات المنتج
var priceForProduct = $parent.attr('data-product-price');

   //السعر الاجمالي للمنتج هو سعر المنتج مضروبا في عددها
   var totalPriceForProduct = newQuantity * priceForProduct;

   //عين السعر الاجمالي ضمن خلية السعر الاجمالي
   $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');
  
  
  
   calculateTotalPrice(); 
});

$('[data-product-quantity]').change(function(){

   //الكميه

   var newQuantity = $(this).val();

   //السطر

   var $parent = $(this).parents('[data-product-info]');

   //السعر

   var priceForProduct = $parent.attr('data-product-price');

   //المجموع

   var totalPriceForProduct = newQuantity  *  priceForProduct;

   //وضع المجموع

   $parent.find('.total-price-for-product').text(totalPriceForProduct + '$');
  
   calculateTotalPrice();
});

function calculateTotalPrice(){;
var totalPriceForAllProducts = 0;
$('[data-product-info]').each(function(){
   var Price = $(this).attr('data-product-price');
   var quantity = $(this).find('[data-product-quantity]').val();
   var AllPrice = Price * quantity;
   totalPriceForAllProducts = totalPriceForAllProducts +(AllPrice);
});
$('#total-price-for-all-products').text(totalPriceForAllProducts + '$');
}
   });
   
       

       



