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

      scrollToElement(section, 750, -$navBar.outerHeight());
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
      scrollToElement($('.container'), 750, -$navBar.outerHeight());

      $upBtn.velocity({
        right: 30,
        bottom: 30
      }, 1000);

      $downBtn.velocity({
        opacity: 1
      }, 1000);

      $navBar.velocity({
        height: 40
      }, 1000);

      console.log('Up button clicked');
      event.preventDefault();
    });

    $downBtn.click(function(event) {
      /* Act on the event */
      if (i > $sections.length) {
        i = $sections.length;
      } 

      console.log(i);

      //var elemID = $sectionIDs[i],
      var elemID = 'finContain',
        scrollElem = $('#' + elemID);

      i++;

      console.log('Down button clicked');
      event.preventDefault();


      if (elemID == 'finContain') {
        scrollToElement(scrollElem, 750, 0);
        setTimeout(function() {
          $navBar.velocity({
            height: 0
          }, 1000);

          $downBtn.velocity({
            opacity: 0
          }, 1000);


          $upBtn.velocity({
            right: 47.95 + '%',
            bottom: 45 + '%'
          }, 1000);


        }, 1000);
      } else {
        scrollToElement(scrollElem, 750, -$navBar.outerHeight());
      }
    });

    $(window).scroll(function() {
      var scrolled = $(window).scrollTop();


      onResize(function () {
        $('body').css({
          'background-position': '0%' + -scrolled/15 + '%',
        });  
       }, 10, 'scroll-delay');
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

  var onResize = (function () {
    var timers = {};
    return function (callback, ms, uniqueId) {
      if (!uniqueId) {
        uniqueId = "ID already in use";
      }
      if (timers[uniqueId]) {
        clearTimeout(timers[uniqueId]);
      }
      timers[uniqueId] = setTimeout(callback, ms);
    };
  })();
})(jQuery);
