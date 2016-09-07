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
  dynHeight();
  wtf();
  mobileMagic();
});

// Navigation triggered
function navigation() {

  var trigger = $('#trigger');
  var elements = $('.navigation-bar, .col-9, .trigger.close');

  $(trigger).on('click', function() {

    $(elements).toggleClass('close');

  });

}

  /*$("#trigger").on("click", function() {
    
    $(".navigation-bar").toggleClass("closeMe");

    $(".col-9").toggleClass("positionMe");

    $(".triggerInactive").show();

    $(".triggerInactive").on("click", function() {

      $(".navigation-bar").removeClass("closeMe");

      $(".col-9").removeClass("positionMe");

      $(this).hide();

    });

  });*/

// Dynamic height of navigation bar
function dynHeight() {
  
  $(document).ready(dynamicHeight());

  $(window).resize(dynamicHeight());
  
  
  var htmlHeight = $('html').height();

  function dynamicHeight() {
    var newHeight = htmlHeight + 'px';
    $(".navigation-bar").css("height", newHeight);
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