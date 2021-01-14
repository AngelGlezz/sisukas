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

    $(".more-info").click(function(){
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

    $("#faqs").click(function(){
        $(".principal-section").hide();
        $("#faq").fadeIn("slow");
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

    $("#social-fb").mouseenter(function() {
        $("#social-fb img").attr('src', 'images/facebook-a.png');
    }).mouseleave(function() {
        $("#social-fb img").attr('src', 'images/facebook.png');
    });

    $("#social-in").mouseenter(function() {
        $("#social-in img").attr('src', 'images/instagram-a.png');
    }).mouseleave(function() {
        $("#social-in img").attr('src', 'images/instagram.png');
    });

    $("#social-yt").mouseenter(function() {
        $("#social-yt img").attr('src', 'images/youtube-a.png');
    }).mouseleave(function() {
        $("#social-yt img").attr('src', 'images/youtube.png');
    });

    $("#social-tw").mouseenter(function() {
        $("#social-tw img").attr('src', 'images/twitter-a.png');
    }).mouseleave(function() {
        $("#social-tw img").attr('src', 'images/twitter.png');
    });

    $("#quest-1").click(function() {
        $("#answer-1").slideToggle( "slow" );
        if ($(this).find('span').hasClass('arrow-right'))
            {
            $(this).find('span').removeClass('arrow-right');
            $(this).find('span').addClass('arrow-down');
        }
        else {
            $(this).find('span').addClass('arrow-right');
            $(this).find('span').removeClass('arrow-down');
        }
    });

    $("#quest-2").click(function() {
        $("#answer-2").slideToggle( "slow" );
        if ($(this).find('span').hasClass('arrow-right'))
            {
            $(this).find('span').removeClass('arrow-right');
            $(this).find('span').addClass('arrow-down');
        }
        else {
            $(this).find('span').addClass('arrow-right');
            $(this).find('span').removeClass('arrow-down');
        }
    });

    $(".winner_group").fancybox();
	$(".disney_group").fancybox();
    $(".english_group").fancybox();
});