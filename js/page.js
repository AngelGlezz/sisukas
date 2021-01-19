$(document).ready(function(){
    $(".winner_group").fancybox();
	$(".disney_group").fancybox();
    $(".english_group").fancybox();
    
    $(".origen").click(function(){
        $(".principal-section").hide();
        $("#origin").fadeIn("slow");
        $('.carousel').slick();
        $('#navbarTogglerDemo02').removeClass('show');
    });

    $(".iniciacion").click(function(){
        $(".principal-section").hide();
        $("#start").fadeIn("slow");
        $('#navbarTogglerDemo02').removeClass('show');
    });

    $("#text-cover").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
    });

    $("#player").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
    });

    $(".selecciones").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
        $('#navbarTogglerDemo02').removeClass('show');
    });

    $(".more-info").click(function(){
        $(".principal-section").hide();
        $("#select").fadeIn("slow");
    });

    $(".exalumnos").click(function(){
        $(".principal-section").hide();
        $("#student").fadeIn("slow");
        $('#navbarTogglerDemo02').removeClass('show');
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

    $(".contacto").click(function(){
        $(".principal-section").hide();
        $("#contact").fadeIn("slow");
        $('#navbarTogglerDemo02').removeClass('show');
    });

    $(".faqs").click(function(){
        $(".principal-section").hide();
        $("#faq").fadeIn("slow");
        $('#navbarTogglerDemo02').removeClass('show');
    });

    $(".eventos").click(function(){
        $(".principal-section").hide();
        $("#galery").fadeIn("slow");
        $('#navbarTogglerDemo02').removeClass('show');

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

    $("#quest-3").click(function() {
        $("#answer-3").slideToggle( "slow" );
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

    $("#form-register").validate({
        rules: {
            name: {
                required: true,
                minlength: 2,
                maxlength: 100
            },
            lastname: {
                required: true,
                minlength: 2,
                maxlength: 100
            },
            email: {
                required: true,
                email: true
            },
            comment: { 
                required: true,
                minlength: 2,
                maxlength: 1000
            }
        },
        errorPlacement: function( error, element ) {
            error.insertAfter(element);
        }
    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#mask, .window').hide();
    });

    $('#mask').click(function (){
        $(this).hide();
        $('.window').hide();
    });

    $('#button-send').click(function(e){
        e.preventDefault();
        $('#form-register').submit();
    });

    $('#form-register').submit(function(event) {
        event.preventDefault();

        if($(this).valid()){
            var formData = $(this).serialize();
       
            $.ajax({
                type: 'POST',
                url: $(this).attr('action'),
                data: formData,
                beforeSend: function(){
                    $('#form-loader').show();
                    $('#button-send').hide();
                }
            }).done(function(data) {
                var json = jQuery.parseJSON(data);
                if(json.error === undefined || json.error === ""){
                    showBox("¡Registro exitoso!");
                }else{
                    showBox("Invalid data, please try again.");
                }

                $('#form-loader').hide();
                $('#button-send').show();

                clearForm();
            });
        }
    });

	function showBox(msg){
	    var id = $('#dialog');

	    $("#box-msg").text(msg);

	    var maskHeight = $(document).height();
	    var maskWidth = $(window).width();

	    $('#mask').css({'width':maskWidth,'height':maskHeight});

	    $('#mask').fadeTo("fast",0.8);
	    $('#mask').fadeIn();

	    var winH = $(window).height();
	    var winW = $(window).width();

	    $(id).css('top',  winH/2-$(id).height()/2);
	    $(id).css('left', winW/2-$(id).width()/2);

	    $(id).fadeIn();
	}

	function clearForm(){
	    $("input[name='name']").val("");
	    $("input[name='lastname']").val("");
	    $("input[name='email']").val("");
	    $("textarea[name='comment']").val("");
    }
});