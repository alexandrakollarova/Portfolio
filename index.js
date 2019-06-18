"use strict"

function handleAboutBtn() {    

    $('#js-about-btn').on('click', function() {
        
        $(".main-home").hide();
        $(".work-content").hide();
        $(".footer-content").hide();      
        $(".about-content").show();        
        $(".footer-home").show();
       
        $(".about").css(
            {"text-decoration-line": "line-through",
            "font-style": "italic"}
        );
        $("#line-separator").css("display", "none");
        $("body").css("background-color", "#CCD1D1");
        
        $("header button").css("position", "static");
        
        $('#about-close-btn').on('click', function() {
            $(".about-content").hide();
            $(".footer-content").hide();
            $(".main-home").show();
            $(".footer-home").show();
    
            $("#line-separator").css("display", "none");
            $("body").css("background-color", "#F2F4F4");
            $("#background-red").css(
                {"background-color": "#EF5350;"}
            );
        });      
     
    });
}

function handleWorkBtn() {   

    $('#js-work-btn').on('click', function() {        

        $(".main-home").hide();        
        $(".work-content").show();
        $(".footer-content").hide();
        $(".footer-home").show();

        $(".work").css(
            {"text-decoration-line": "line-through",
            "font-style": "italic"}
        );
        $("body").css("background-color", "#CCD1D1");
        $("#line-separator").css("display", "none");
        $("main").css(
            {"margin-bottom": "50px"}
        );
        $(".projects button").css("display", "block");
        $("h3").css(
            {"margin-bottom": "5px",
            "margin-top": "10px"}
            );       

    });

    $('#work-close-btn').on('click', function() {
        $(".work-content").hide();
        $(".main-home").show();
        $(".footer-content").hide(); 
        $(".footer-home").show();

        $("body").css("background-color", "#F2F4F4");

    });      

}


function handleContactBtn() {

    $('#js-contact-btn').on('click', function() {

        $(".footer-home").hide();
        $(".footer-content").show();

        $("#contact-btn").css(
            {"text-decoration-line": "line-through",
            "font-style": "italic"}
        );        
      
    });

    $("#contact-close-btn").on('click', function() {
        $(".footer-content").hide();
        $(".footer-home").show(); 

    });
}

function handlePortfolio() {
    handleAboutBtn();
    handleWorkBtn();
    handleContactBtn();
}
  
handlePortfolio();

  