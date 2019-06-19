"use strict"

function handleAboutBtn() {    

    $('.js-about-btn').on('click', function() {
        
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
            $("body").css("background-color", "#EF5350");
            // $("#background-red").css("background-color", "#EF5350");
            // $("#background-greyish").css("display", "none");
            $("#background-whitish").css("display", "block");
        });      
     
    });
}

function handleWorkBtn() {   

    $('.js-work-btn').on('click', function() {        

        $(".main-home").hide();
        $(".about-content").hide(); 
        $(".footer-content").hide();       
        $(".work-content").show();        
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
     

    });

    $('#work-close-btn').on('click', function() {
        $(".work-content").hide();
        $(".main-home").show();
        $(".footer-content").hide(); 
        $(".footer-home").show();

        $("body").css("background-color", "#EF5350");
        $("#line-separator").css("display", "none");
        $("#background-whitish").css("display", "block");

    });
    
    viewProjects();
}

function viewProjects() {
    $('#css-quiz-project').on('click', function() {
             
        $("#css-quiz-selected").show();
        $("#room-planner-selected").hide();
    }); 

    $('#room-planner-project').on('click', function() {
             
        $("#room-planner-selected").show();
        $("#css-quiz-selected").hide();
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

  