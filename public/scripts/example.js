/****************************************************
 * You can use client side scripts by placing them in
 * the public/scripts folder. They can then be linked
 * to your EJS files and used there.
 ****************************************************/
$(document).ready(function () {
  $('.dropdown-submenu a.sub-toggle').on("click", function (e) {
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});