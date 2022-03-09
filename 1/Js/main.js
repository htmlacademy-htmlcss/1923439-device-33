
var button = document.querySelector('.navigation_catalog_link_popover');
var popover = document.querySelector('.popover_catalog_list');
button.addEventListener('click', function() {
  popover.classList.toggle('popover_catalog_off');
});
