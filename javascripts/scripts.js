$(document).ready(function(){
  $('.modal-trigger').leanModal();
  function isiPhone(){
      return (
          //Detect iPhone
      //var isiPad = navigator.userAgent.match(/iPad/i) != null;
          (navigator.platform.indexOf("iPhone") != -1) ||
          //Detect iPod
          (navigator.platform.indexOf("iPad") != -1)
      );
  }
  $('.parallax').parallax();
  $('.slider').slider({full_width: true});
  $('.btn-flat').on('touchend', function(){
      $('#dropdown1').css({display:'none'});
  });
});
