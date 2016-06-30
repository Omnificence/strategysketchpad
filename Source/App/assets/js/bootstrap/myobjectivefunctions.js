
$(document).ready(function () {

    //if you wish to keep both the divs hidden by default then dont forget to hide //them           
    $("#objectivetoggle1").show();
    $("#objectivetoggle2").hide();

    $("#objectiverightclick").click(function () {
        $("#objectivetoggle1").hide();
        $("#objectivetoggle2").show();
    });

    $("#objectiveleftclick").click(function () {
        $("#objectivetoggle2").hide();
        $("#objectivetoggle1").show();
        
    });
});


function getSSP(ele) {
    smps.innerHTML = "";
    var $this = $('#carousel-main-objective');
    if ($('.carousel-inner.myobj .item.first').hasClass('first')) {
        $this.children('.myleft.left.carousel-control').hide();
        $this.children('.myright.right.carousel-control').show();
    }
    //smps.hide();
    //var xy = $('a.left.carousel-control').attr('value');
    var xy = $(ele).parent().find('.carousel-inner .item.active').data('value');
    //var xy = $('a.right.carousel-control').find(div .item #q2).attr('value');
    ssp.innerHTML = xy-1;


}
function getSSP1(ele) {
    smps.innerHTML = "";
    //ssp=document.getElementById("ssp");
    //var xy = $("a#carousel-main").find('.right.carousel-control').attr('value');
    var $this = $('#carousel-main-objective');
    if ($('.carousel-inner.myobj .item.last').hasClass('last')) {
        $this.children('.myright.right.carousel-control').hide();
        $this.children('.myleft.left.carousel-control').show();
    }

    //var xy = $('a.right.carousel-control').attr('value');
    var xy = $(ele).parent().find('.carousel-inner .item.active').data('value');
    ssp.innerHTML = xy+1;
}