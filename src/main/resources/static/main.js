// Get the current year
const d = new Date();
let year = d.getFullYear();

// Pace.js config
paceOptions = {
    restartOnPushState: false,
    eventLag: false
}

// Navbar active
$(document).scroll(function (){
    $(".collapse").collapse('hide');
    if (fullpage_api.getActiveSection().anchor=== 'this'  || fullpage_api.getActiveSection().anchor === 'kinship'|| fullpage_api.getActiveSection().anchor === 'rurl' || fullpage_api.getActiveSection().anchor === 'vgg'||fullpage_api.getActiveSection().anchor === 'footer') {
        $("#navbarDropdown").addClass("active");
    }
});

// main
$(document).ready(function () {

    // Highcharts Config
    var data= [{
        name: 'Java',
        weight: year-2016,
    }, {
        name: 'Python',
        weight: year-2018,
    }, {
        name: 'C',
        weight: year-2019,
    },{
        name: 'Prolog',
        weight: 1,
    },{
        name: 'JavsScript',
        weight: year-2018,
    },{
        name: 'Haskell',
        weight: 1,
    },{
        name: 'Dreamweaver',
        weight: 5,
    },{
        name: 'HTML',
        weight: year-2016,
    },{
        name: 'CSS',
        weight: year-2018,
    },{
        name: 'UiPath',
        weight: 1,
    },{
        name: 'Spring',
        weight: year-2019,
    },{
        name: 'Bootstrap',
        weight: year-2019,
    },{
        name: 'React',
        weight: 1,
    },{
        name: 'jQuery',
        weight: year-2018,
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
        weight: year-2019,
    },{
        name: 'Pytorch',
        weight: year-2020,
    },{
        name: 'Pandas',
        weight: year-2019,
    },{
        name: 'Altair',
        weight: 1,
    },{
        name: 'Git',
        weight: 2,
    },{
        name: 'SQL',
        weight: year-2018,
    },{
        name: 'NoSQL',
        weight: year-2019,
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

    // Welcome page animation
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

    // fullpage.js config
    $('#fullpage').fullpage({
        //options here
        autoScrolling: true,
        anchors: ['welcome', 'info', 'skill', 'this','kinship', 'rurl','vgg','footer'],
        menu: '#myMenu',
        responsiveHeight: 568,
        responsiveWidth: 320,
        restartOnPushState: false,
        restartOnRequestAfter: false,
        onLeave:function(origin, destination, direction){
            $(".collapse").collapse('hide');
        },
        afterLoad: function(origin, destination, direction){
            var loadedSection = this;
            if (fullpage_api.getActiveSection().anchor=== 'this'  || fullpage_api.getActiveSection().anchor=== 'kinship'  || fullpage_api.getActiveSection().anchor === 'rurl' || fullpage_api.getActiveSection().anchor === 'vgg'|| fullpage_api.getActiveSection().anchor === 'footer') {
                $("#navbarDropdown").addClass("active");
            }
            //using anchorLink
            if(window.innerHeight >568 && window.innerWidth>320) {
                if (destination.anchor === 'info') {
                    $("#photo1").show().addClass("animate__animated animate__fadeInLeftBig");
                    $("#intro").show().addClass("animate__animated animate__fadeInRightBig");
                }else if(destination.anchor === 'skill'){
                    $("#graph").fadeIn(1000);
                } else if (destination.anchor === 'this') {
                        $(".proj1").show(1000);
                } else if (destination.anchor === 'kinship') {
                    $("#photo2").show().addClass("animate__animated animate__zoomIn");
                    $(".proj2").show().addClass("animate__animated animate__zoomIn");
                }else if (destination.anchor === 'rurl') {
                        $("#photo3").show().addClass("animate__animated animate__backInRight");
                        $(".proj3").show().addClass("animate__animated animate__backInLeft");
                } else if (destination.anchor === 'vgg'|| destination.anchor ==='footer'){
                        $("#photo4").show().addClass("animate__animated animate__zoomIn");
                        $(".proj4").show().addClass("animate__animated animate__zoomIn");
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
                $("#photo4").show();
                $(".proj4").show();
            }
        },
        });

});
