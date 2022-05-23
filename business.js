/* START: maintain cover image aspect ratio 16:9 */
$(document).ready(function() {
   var w = $(window).width();
   var f_h = (w/16)*9;
   if ($(window).width() > 801) {
    f_h = f_h-(f_h/10*4);
    w = w-(w/10*2);

}
else if ($(window).width() < 801 && $(window).width() > 501) {
 f_h = f_h-65;
 w = w-(w/10+30);
}
else if ($(window).width() < 501 && $(window).width() > 401) {
    w = $(window).width();
    f_h = 300;
}
else if ($(window).width() < 401) {
    w = $(window).width();
    f_h = 250;
}
   $("#sabiduria-video").css("width", w);
   $("#sabiduria-video").css("height", f_h);
   $(window).resize(function() {
    w = $(window).width();
    f_h = (w/16)*9;
    if ($(window).width() > 801) {
        f_h = f_h-(f_h/10*4);
        w = w-(w/10*2);
 
    }
    else if ($(window).width() < 801 && $(window).width() > 501) {
     f_h = f_h-65;
     w = w-(w/10+30);
    }
    else if ($(window).width() < 501 && $(window).width() > 401) {
        w = $(window).width();
        f_h = 300;
    }
    else if ($(window).width() < 401) {
        w = $(window).width();
        f_h = 250;
    }
    $("#sabiduria-video").css("width", w);
    $("#sabiduria-video").css("height", f_h);
   });
});
/* END: maintain cover image aspect ratio 16:9 */
