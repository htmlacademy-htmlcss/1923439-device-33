
var button_catalog = document.querySelector('.navigation_catalog_link_popover');
var popover_catalog = document.querySelector('.popover_catalog_list');
var button_basket = document.querySelector('.navigation_link_basket');
var popover_basket = document.querySelector('.popover_basket');
var button_delivery = document.querySelector('.delivery_link');
var delivery_card = document.querySelector('.delivery_card');
var button_garanty = document.querySelector('.garanty_link');
var garanty_card = document.querySelector('.garanty_card');
var button_credit = document.querySelector('.credit_link');
var credit_card = document.querySelector('.credit_card');
var modal_delivery = document.querySelector('.modal_close');
var button_modal = document.querySelector('.delivery_article_description');
var button_modal_close = document.querySelector('.close_button');
var slider_button_next = document.querySelector('.slider_button_next');
var slider_button_prev = document.querySelector('.slider_button_previos');
var slider_1 = document.querySelector('.slider_1');
var slider_2 = document.querySelector('.slider_2');
var slider_3 = document.querySelector('.slider_3');




button_catalog.addEventListener('click', function() {
  popover_catalog.classList.toggle('popover_catalog_off');
});

button_basket.addEventListener('click', function() {
  popover_basket.classList.toggle('popover_basket_off');
});

button_delivery.addEventListener('click', function() {
  button_delivery.classList.remove('services_link_current');
  button_garanty.classList.remove('services_link_current');
  button_credit.classList.remove('services_link_current');
  button_delivery.classList.add('services_link_current');
  garanty_card.classList.add('delivery_description_none');
  credit_card.classList.add('delivery_description_none');
  delivery_card.classList.remove('delivery_description_none');
});

button_garanty.addEventListener('click', function() {
  button_delivery.classList.remove('services_link_current');
  button_garanty.classList.remove('services_link_current');
  button_credit.classList.remove('services_link_current');
  button_garanty.classList.add('services_link_current');
  credit_card.classList.add('delivery_description_none');
  delivery_card.classList.add('delivery_description_none');
  garanty_card.classList.remove('delivery_description_none');
});

button_credit.addEventListener('click', function() {
  button_delivery.classList.remove('services_link_current');
  button_garanty.classList.remove('services_link_current');
  button_credit.classList.remove('services_link_current');
  button_credit.classList.add('services_link_current');
  delivery_card.classList.add('delivery_description_none');
  garanty_card.classList.add('delivery_description_none');
  credit_card.classList.remove('delivery_description_none');
});

button_modal.addEventListener('click', function() {
  modal_delivery.classList.toggle('modal_close')
});

button_modal_close.addEventListener('click', function() {
  modal_delivery.classList.toggle('modal_close')
});





