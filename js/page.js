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
});