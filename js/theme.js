(function ($) {
  'use strict';
  var $upBtn = $('.topBtn'),
    $downBtn = $('.nextBtn'),
    $navBar = $('#primary-nav'),
    $navLinks = $('#primary-nav').find('a'),
    $sections = $('.content-section'),
    $sectionIDs = [],
    i = 0;

    $sections.each(function() {
      $sectionIDs.push($(this).attr('id'));
    });

    $navLinks.click(function(event) {
      /* Act on the event */
      var link = $(this).attr('href'),
        section = $(link),
        i = 0;

      scrollToElement(section, 750, $navBar.outerHeight() - 10);
      event.preventDefault();
    });

    $upBtn.click(function(event) {
      /* Act on the event */
      /*
      if (i < 0) {
        i = 0;
      }  
      --i;
      console.log(i);
      
      var elemID = $sectionIDs[i],
        scrollElem = $('#' + elemID);
        if (i < 0) {
          i = 0;
        }  
        console.log(scrollElem);  */

      i = 0;
      scrollToElement($('.container'), 750, $navBar.outerHeight() - 10);

      console.log('Up button clicked');
      event.preventDefault();
    });

    $downBtn.click(function(event) {
      /* Act on the event */
      if (i > $sections.length) {
        i = $sections.length;
      } 

      console.log(i);

      var elemID = $sectionIDs[i],
        scrollElem = $('#' + elemID);

      i++;
      scrollToElement(scrollElem, 750, $navBar.outerHeight() - 10);

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
