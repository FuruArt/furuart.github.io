/* 
  @Functions created by Furu.Art - please, don"t rip my hard work ;) 
  @Copyright 2016 Furu.Art
  -----------------------------------
  @FB: https://fb.com/furuart
  @Github: https://github.com/furuart
  @mail: kontakt@furuart.pl
*/

// Load created functions

$(function() {
  navigation();
  wtf();
  mobileMagic();
  dynHeight();
  nightMode();
  alerting();
});

// Navigation triggered
function navigation() {

  var trigger = '#drop>#trigger, .triggerClosed';
  var elements = '.navigation-bar, .col-9, .triggerClosed, #drop>#trigger';

  $(trigger).on('click', function() {

    $(elements).toggleClass('close');

  });

}

function nightMode() {

  var trigger = "#drop>#triggerNight, .mini-navigation>#triggerNight",
      elementS = "html, .body-custom";

      $(trigger).on('click', function() {
        $(elementS).toggleClass('night');
      });
}

// Dynamic height of navigation bar
function dynHeight() {

  var htmlHeight = $('html').height(),
      disqusHeight = $('#disqus_thread').height(),
      newHeight = htmlHeight + disqusHeight,
      navigationBar = ".navigation-bar";

      if ( disqusHeight == undefined ) {
        $(navigationBar).css('height', htmlHeight + 'px');
      }

      else if ( disqusHeight != undefined ) {
        $(navigationBar).css('height', newHeight + 'px');
      }
}

function wtf() {
  // I don"t have any ideas why .md, make ### as id... I give a fuck, let"s make function!
  $("h3").removeAttr("id");
}

function mobileMagic() {

  $(".mobile-trigger, .htmlMask").on("click", function() {
    $(".mobile-navigation-bar > .navigation-bar").toggleClass("runMe");
    $(".mobile-trigger").toggleClass("activated");
    $(".mobile-trigger > i").toggleClass("closed");
    $(".htmlMask").toggleClass("disable");
    $("html").toggleClass("clicked");
  });
}

function alerting() {
  var alert = ".alert";

  $(alert).on('click', function() {
    $(this).hide(1000);
  });
}