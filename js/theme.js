(function ($) {
  'use strict';
  var $upBtn = $('.topBtn'),
    $downBtn = $('.nextBtn'),
    $navBar = $('#primary-nav'),
    $navLinks = $('#primary-nav').find('a'),
    $sections = $('.content-section'),
    i = 0;

    $navLinks.click(function(event) {
      /* Act on the event */
      var link = $(this).attr('href'),
        section = $(link);


      scrollToElement(section, 750, $navBar.outerHeight());
      event.preventDefault();
    });

    $upBtn.click(function(event) {
      /* Act on the event */
      var $scrollElem = $sections[i];
      console.log($scrollElem);

      i--;
      console.log('Up button clicked');
      event.preventDefault();
    });

    $downBtn.click(function(event) {
      /* Act on the event */
      var $scrollElem = $sections[i];
      console.log($scrollElem);

      scrollToElement($scrollElem, 750, $navBar.outerHeight());
      i++;
      console.log('Down button clicked');
      event.preventDefault();
    });



  /*
   * This function takes the parameters of an 
   * element object, speed in ms, and offset in pixels
   */
  function scrollToElement(element, speed, offset) {
    element.velocity('scroll', { 
      duration: speed, 
      offset: offset 
    });
  }

  /* starting to write a parralax function but want
   * make sure that we are actually going to use it

  function parralax(element, speed) {
    $('*[class^="prlx"]').each(function(r){
      var pos = $(this).offset().top;
      var scrolled = $(window).scrollTop();
      $('*[class^="prlx"]').css('top', -(scrolled * 0.2) + 'px');         
    });
  }
  */
})(jQuery);
