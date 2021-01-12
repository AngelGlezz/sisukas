$(document).ready(function(){
    $("#origen").click(function(){
        $(".principal-section").hide();
        $("#origin").fadeIn("slow");
        $('.carousel').slick();
    });

    $("#iniciacion").click(function(){
        $(".principal-section").hide();
        $("#start").fadeIn("slow");
    });

    $("#text-cover").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
    });

    $("#player").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
    });

    $("#selecciones").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
    });

    $("#exalumnos").click(function(){
        $(".principal-section").hide();
        $("#student").fadeIn("slow");
    });

    $("#logo-main").click(function(){
        $(".principal-section").hide();
        $("#cover").fadeIn("slow");
    });

    $("#disney-galery").click(function(){
        $(".principal-section").hide();
        $("#disney-comp").fadeIn("slow");
    });

    $("#english-galery").click(function(){
        $(".principal-section").hide();
        $("#english-comp").fadeIn("slow");
    });

    $("#winner-galery").click(function(){
        $(".principal-section").hide();
        $("#winner-comp").fadeIn("slow");
    });

    $("#contacto").click(function(){
        $(".principal-section").hide();
        $("#contact").fadeIn("slow");
    });

    $("#eventos").click(function(){
        $(".principal-section").hide();
        $("#galery").fadeIn("slow");

        $('.lazy').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 10,
        }).slick('unslick');
    
        setTimeout(function() {
            $('.lazy').slick({
                slidesToShow: 2,
                slidesToScroll: 1,
                responsive: [
                    {
                      breakpoint: 1001,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                      }
                    }
                ]
            })
        }, 20);
    });

    $("#text-cover").mouseenter(function(){
        $("#text-cover").css({"z-index": "3", "background-image": "url(images/conocenos-a.png)"});
    }).mouseleave(function(){
        $("#text-cover").css({"z-index": "1", "background-image": "url(images/conocenos.png)"});
    });

    $("#player").mouseenter(function(){
        $("#text-cover").css({"z-index": "3", "background-image": "url(images/conocenos-a.png)"});
    }).mouseleave(function(){
        $("#text-cover").css({"z-index": "1", "background-image": "url(images/conocenos.png)"});
    });

    $(".winner_group").fancybox();
	$(".disney_group").fancybox();
    $(".english_group").fancybox();
});