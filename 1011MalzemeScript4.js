var select = document.querySelector(".form-control[data-group-id='12']");

select.addEventListener('change', () => 

    setTimeout(function(){
        location.reload(),
        console.log('refreshed')
    }, 2000)

);



// $(function(){
//     $(".form-control[data-group-id='12']").trigger('change'); 
//     $(".form-control[data-group-id='12']").change(function(){
//         location.reload(),
//         console.log('refreshed')          
//     });
// });






// $(document).ready(() => {

//     if($(".form-control[data-group-id='12']").length > 0){

//         $(".form-control[data-group-id='12']").trigger('change');


//     }

//     if(window.location.href.indexOf("/sepet") !== -1){
//         cartEdit();
//     }

// });$(document).ready(() => {

//     if($(".product-customization-group[data-group-id='2']").length > 0){

//         $(".product-right .product-cart-buttons .product-qty[data-selector='qty-wrapper'] [data-selector='decrease-qty']").addClass("disabled");
//         $(".product-right .product-cart-buttons .product-qty[data-selector='qty-wrapper'] [data-selector='qty']").addClass("disabled");
//         $(".product-right .product-cart-buttons .product-qty[data-selector='qty-wrapper'] [data-selector='increase-qty']").addClass("disabled");
//         $(".product-customization-group[data-group-id='2']").find(".product-customization-field[data-field-id='15']").addClass("d-none");
//         $(".product-right .quick-order-button[data-selector='add-to-cart']").removeAttr("data-selector").attr("style", "cursor: not-allowed !important;");


//         $(".product-customization-group[data-group-id='2']").find(".product-customization-field[data-field-id='5'] input").attr("id", "quantity");
//         $(".product-customization-group[data-group-id='2']").find(".product-customization-field[data-field-id='6'] input").attr("id", "length");
//         $(".product-customization-group[data-group-id='2']").find(".product-customization-field[data-field-id='15'] input").addClass("disabled").attr("id", "customizationID");

//         setInputFilter($(".product-customization-group[data-group-id='2'] #quantity"), function(value) {
//             return /^\d*\.?\d*$/.test(value);
//         });

//         setInputFilter($(".product-customization-group[data-group-id='2'] #length"), function(value) {
//             return /^\d*\.?\d*$/.test(value);
//         });

//         $(".product-right .product-cart-buttons").before(`<div class="alert alert-warning text-center" data-selector="ext-info" role="alert">
//             Ürünün uzunluk ve adet bilgilerini yukarıdaki kutucuğa giriniz.
//         </div>`);

//     }

//     if(window.location.href.indexOf("/sepet") !== -1){
//         cartEdit();
//     }

// });