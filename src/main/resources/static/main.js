paceOptions = {
    restartOnPushState: false,
}
$(document).scroll(function (){
    if (fullpage_api.getActiveSection().anchor== 'thirdPage'  || fullpage_api.getActiveSection().anchor == 'fourthPage' || fullpage_api.getActiveSection().anchor == 'lastPage') {
        $("#navbarDropdown").addClass("active");
    }
});
$(document).ready(function () {
    $("#world").hide();
    $(function () {
        $({blurRadius: 0}).delay(2500).animate({blurRadius: 5}, {
            duration: 1000,
            easing: 'swing', // or "linear"
                             // use jQuery UI or Easing plugin for more options
            step: function () {
                $('#code').css({
                    "-webkit-filter": "blur(" + this.blurRadius + "px)",
                    "filter": "blur(" + this.blurRadius + "px)"
                });
                $('#world').fadeIn(500);
            }
        });
    });
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'lastPage','footer'],
        menu: '#myMenu',
        responsiveHeight: 570,
        restartOnPushState: false,
        restartOnRequestAfter: false,
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            if (fullpage_api.getActiveSection().anchor== 'thirdPage'  || fullpage_api.getActiveSection().anchor == 'fourthPage' || fullpage_api.getActiveSection().anchor == 'lastPage') {
                $("#navbarDropdown").addClass("active");
            }
            //using anchorLink
            if(window.innerHeight >570) {
                if (destination.anchor == 'secondPage') {
                    $("#photo1").show().addClass("animate__animated animate__fadeInLeftBig");
                    $(".selective").show().addClass("animate__animated animate__fadeInRightBig");
                } else if (destination.anchor == 'thirdPage') {
                        $(".proj1").show(1000);
                    } else if (destination.anchor == 'fourthPage') {
                        $("#photo2").show().addClass("animate__animated animate__backInRight");
                        $(".proj2").show().addClass("animate__animated animate__backInLeft");
                    } else {
                        $("#photo3").show().addClass("animate__animated animate__zoomIn");
                        $(".proj3").show().addClass("animate__animated animate__zoomIn");
                    }
            }else{
                $("#photo1").show();
                $(".selective").show();
                $(".proj1").show();
                $("#photo2").show();
                $(".proj2").show();
                $("#photo3").show();
                $(".proj3").show();
            }
        },
        });

});