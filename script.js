var lastScrollPos =0;

$(window).on("scroll", function() {  
  var st = $(this).scrollTop();
  var docH = $(".main-contener").height() + $(".main-footer").height() + 245;
  var winH = $(this).height();
  var totalScroll = (st/(docH-winH))*100;
  $(".blackLine").val(totalScroll);
});
