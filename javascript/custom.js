$(window).ready(function () {
  if ($(window).width() < 980) {
    $('#logo').hide();
    $('#home').show();
    $("#jumbotron-text h1").css({"font-size":"60px"});
    $("h1.ada-text").css({"font-size":"80px"});
    $(".page-header h1").css({"font-size":"40px"});
    $(".footer-email-form").css("cssText", "text-align: center !important; margin-right: 0px;");
    $(".center-nav").css("cssText", "padding-left: 0px !important;");
    $(".social").css({"text-align":"center"});
    $("body").css({"padding":"0px"});
    $(".sponsors").css({"text-align":"center"});
  }
  else {
    $('#home').hide();
  }
});

$(window).resize(function() {
  if ($(window).width() < 980) {
    $('#logo').hide();
    $('#home').show();
    $("#jumbotron-text h1").css({"font-size":"60px"});
    $("h1.ada-text").css({"font-size":"80px"});
    $(".page-header h1").css({"font-size":"40px"});
    $(".footer-email-form").css("cssText", "text-align: center !important; margin-right: 0px;");
    $(".center-nav").css("cssText", "padding-left: 0px !important;");
    $(".social").css({"text-align":"center"});
    $("body").css({"padding":"0px"});
    $(".sponsors").css({"text-align":"center"});
  } 
  else {
    $('#logo').show();
    $('#home').hide();
    $("#jumbotron-text h1").attr("style", "");
    $("h1.ada-text").attr("style", "");
    $(".page-header h1").attr("style", "");
    $(".footer-email-form").attr("style", "");
    $(".center-nav").css("cssText", "padding-left: 70px !important;");
    $(".social").attr("style", "");
    $(".sponsors").attr("style", "");
  }
});

// 
