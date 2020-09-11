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


var citiesByCountry = {
    sa:['جده','الرياض'],
    eg:['القاهره','الاسكندرية','دمياط'],
    jo:['الزرقاء','عمان'],
    sy:['حلب','حماه','عمان']
};

$('#form-checkout select[name="country"]').change(function(){
   var country = $(this).val();
   var cities = citiesByCountry[country]
   $('#form-checkout select[name="city"]').empty();
   $('#form-checkout select[name="city"]').append(
      '<option selected disabled value="">اختر المدينة</option>'
   );
   cities.forEach(function(city){
     var $newOption = $('<option></option>');
     $newOption.text(city);
     $newOption.val(city);
     $('#form-checkout select[name="city"]').append($newOption);
   });
});

$('#form-checkout input[name="payment_method"]').change(function(){
   var paymentMethod =$(this).val();
   if(paymentMethod==='on_delivery'){
      $('#credit-card-info input').prop('disabled',true)
   }else{
      $('#credit-card-info input').prop('disabled',false)
   }
   $('#credit-card-info input').toggle();
});

   });
   
       

       



