document.addEventListener('DOMContentLoaded', function () {


  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);


  if ($navbarBurgers.length > 0) {


    $navbarBurgers.forEach(function ($el) {
      $el.addEventListener('click', function () {


        var target = $el.dataset.target;
        var $target = document.getElementById(target);


        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');

      });
    });
  }

});

document.querySelectorAll('.navbar-link').forEach(function(navbarLink){
  navbarLink.addEventListener('click', function(){
    navbarLink.nextElementSibling.classList.toggle('is-hidden-mobile');
  })
});

$('.navbar-item').click(function (e) {
    var li = $(this).closest('li');
    if (li.hasClass('active')) {
        li.css('background-color', '#1A1C23');
    }
});
