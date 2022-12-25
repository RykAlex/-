

openPopUp();
function openPopUp() {
  let btn = document.querySelector('.btn-care.main-btn');
  let popUpBody = document.querySelector('.popup-main');
  btn.addEventListener('click', function () {
    popUpBody.classList.toggle('show-form');
  })

}

window.addEventListener("DOMContentLoaded", function() {
    [].forEach.call( document.querySelectorAll('.tel'), function(input) {
    var keyCode;
    function mask(event) {
        event.keyCode && (keyCode = event.keyCode);
        var pos = this.selectionStart;
        if (pos < 3) event.preventDefault();
        var matrix = "+7 (___) ___ __-__",
            i = 0,
            def = matrix.replace(/\D/g, ""),
            val = this.value.replace(/\D/g, ""),
            new_value = matrix.replace(/[_\d]/g, function(a) {
                return i < val.length ? val.charAt(i++) || def.charAt(i) : a
            });
        i = new_value.indexOf("_");
        if (i != -1) {
            i < 5 && (i = 3);
            new_value = new_value.slice(0, i)
        }
        var reg = matrix.substr(0, this.value.length).replace(/_+/g,
            function(a) {
                return "\\d{1," + a.length + "}"
            }).replace(/[+()]/g, "\\$&");
        reg = new RegExp("^" + reg + "$");
        if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = new_value;
        if (event.type == "blur" && this.value.length < 5)  this.value = ""
    }

    input.addEventListener("input", mask, false);
    input.addEventListener("focus", mask, false);
    input.addEventListener("blur", mask, false);
    input.addEventListener("keydown", mask, false)

  });

});

  document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide('.splide', {
      perPage: 2,
      gap: 20,
      pagination: false
    } );
    splide.mount();
  });
  
openNav();
function openNav() {
  let humburger = document.querySelector('.header__humburger');
  let navMenuMobile = document.querySelector('.header__nav');
  let closeNav = document.querySelector('.header__close');
  humburger.addEventListener('click', function () {
    navMenuMobile.classList.toggle('show-nav');
    humburger.classList.toggle('change');
    closeNav.classList.toggle('show');
  })
  
}