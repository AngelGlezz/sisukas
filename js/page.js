$(document).ready(function(){
    $("#origen").click(function(){
        $(".principal-section").hide();
        $("#origin").fadeIn("slow");
    });

    $("#iniciacion").click(function(){
        $(".principal-section").hide();
        $("#start").fadeIn("slow");
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
                slidesToShow: 3,
                slidesToScroll: 1,
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
});