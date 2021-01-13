paceOptions = {
    restartOnPushState: false,
    eventLag: false
}
$(document).scroll(function (){
    if (fullpage_api.getActiveSection().anchor== 'this'  || fullpage_api.getActiveSection().anchor == 'rurl' || fullpage_api.getActiveSection().anchor == 'vgg'||fullpage_api.getActiveSection().anchor == 'footer') {
        $("#navbarDropdown").addClass("active");
    }
});
$(document).ready(function () {
    var data= [{
        name: 'Java',
        weight: 5,
    }, {
        name: 'Python',
        weight: 2,
    }, {
        name: 'C',
        weight: 1,
    },{
        name: 'Prolog',
        weight: 1,
    },{
        name: 'JavsScript',
        weight: 3,
    },{
        name: 'Haskell',
        weight: 1,
    },{
        name: 'Dreamweaver',
        weight: 5,
    },{
        name: 'HTML',
        weight: 5,
    },{
        name: 'CSS',
        weight: 3,
    },{
        name: 'UiPath',
        weight: 1,
    },{
        name: 'Spring',
        weight: 2,
    },{
        name: 'Bootstrap',
        weight: 2,
    },{
        name: 'React',
        weight: 1,
    },{
        name: 'jQuery',
        weight: 3,
    },{
        name: 'Maven',
        weight: 1,
    },{
        name: 'Junit',
        weight: 1,
    },{
        name: 'Javafx',
        weight: 1,
    },{
        name: 'AndroidStudio',
        weight: 1,
    },{
        name: 'Tensorflow',
        weight: 2,
    },{
        name: 'Keras',
        weight: 2,
    },{
        name: 'Pandas',
        weight: 2,
    },{
        name: 'Altair',
        weight: 1,
    },{
        name: 'Git',
        weight: 2,
    },{
        name: 'MySQL',
        weight: 3,
    },{
        name: 'MongoDB',
        weight: 1,
    }]
    Highcharts.chart('graph', {
        series: [{
            rotation: {
                from: 0,
                to: 0,
                orientations: 5
            },
            type: 'wordcloud',
            data: data,
            name: 'Experience(Year)'
        }],
        title: {
            text: 'My Skills',
            style:{
                fontSize:"5vmin"
            }
        },
    });
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
        anchors: ['welcome', 'info', 'skill', 'this', 'rurl','vgg','footer'],
        menu: '#myMenu',
        responsiveHeight: 570,
        responsiveWidth: 369,
        restartOnPushState: false,
        restartOnRequestAfter: false,
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            if (fullpage_api.getActiveSection().anchor== 'this'  || fullpage_api.getActiveSection().anchor == 'rurl' || fullpage_api.getActiveSection().anchor == 'vgg'|| fullpage_api.getActiveSection().anchor == 'footer') {
                $("#navbarDropdown").addClass("active");
            }
            //using anchorLink
            if(window.innerHeight >570 && window.innerWidth>369) {
                if (destination.anchor == 'info') {
                    $("#photo1").show().addClass("animate__animated animate__fadeInLeftBig");
                    $("#intro").show().addClass("animate__animated animate__fadeInRightBig");
                }else if(destination.anchor == 'skill'){
                    $("#graph").fadeIn(1000);
                } else if (destination.anchor == 'this') {
                        $(".proj1").show(1000);
                } else if (destination.anchor == 'rurl') {
                        $("#photo2").show().addClass("animate__animated animate__backInRight");
                        $(".proj2").show().addClass("animate__animated animate__backInLeft");
                } else if (destination.anchor == 'vgg'|| destination.anchor =='footer'){
                        $("#photo3").show().addClass("animate__animated animate__zoomIn");
                        $(".proj3").show().addClass("animate__animated animate__zoomIn");
                }
            }else{
                $("#photo1").show();
                $("#graph").show();
                $("#intro").show();
                $(".proj1").show();
                $("#photo2").show();
                $(".proj2").show();
                $("#photo3").show();
                $(".proj3").show();
            }
        },
        });
});
