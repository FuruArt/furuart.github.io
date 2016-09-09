/* 
  @Functions created by Furu.Art - please, don"t rip my hard work ;) 
  @Copyright 2016 Furu.Art
  -----------------------------------
  @FB: https://fb.com/furuart
  @Github: https://github.com/furuart
  @mail: kontakt@furuart.pl
*/

// Load created functions

$(document).ready(function() {
  navigation();
  wtf();
  mobileMagic();
  dynHeight();
  nightMode();
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

  var trigger = "#drop>#triggerNight, .mobile-trigger>#triggerNight",
      elements = ".body-custom, .logo, .navigation-bar, #drop, .data, .title, .description, footer, .article, .article-body",
      elementS = "html, .body-custom";

      $(trigger).on('click', function() {
        // $(elements).toggleClass("night");
        $(elementS).toggleClass('night');
      });
}

// Dynamic height of navigation bar
function dynHeight() {

  var htmlHeight = $('html').height(),
      navigationBar = ".navigation-bar";

  $(navigationBar).css('height', htmlHeight + 'px');
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
