$(document).ready(function(){
  burger();
  function burger(){
    const   burgerBtn = $('.burger'),
            burgerItem = $('.burger-nav__link'),
            burgerMenu = $('.mob-menu');

    burgerBtn.on('click', function(){
      burgerBtn.toggleClass('burger--active');
      burgerMenu.toggleClass('mob-menu--active');
      if(burgerBtn.hasClass('burger--active')){
        $('body').addClass('body-hidden');
      } else {
        $('body').removeClass('body-hidden');
      }
    });

    burgerMenu.on('click', function(event){
      var target = event.target;

      for(var i = 0; i < burgerItem.length; i++){
        if(target == burgerItem[i]){
          burgerBtn.removeClass('burger--active');
          burgerMenu.removeClass('mob-menu--active');
          $('body').removeClass('body-hidden');
          scroll(burgerItem[i]);
        }
      }
    });
  }
});