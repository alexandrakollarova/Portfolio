"use strict"

function handleAboutBtn() {

    $('head').append('<link rel="stylesheet" type="text/css" href="{main-about.css}">');

    $('#js-about-btn').on('click', function() {
        $("main").html(
            `
            <img src="images/poly-unicorn.jpg"/>
  
            <a href="index.html">
                <img id="close-btn" src="icons/dash.png" hidden>
            </a>

            <section class="about-intro">
                        
                <h1 class="hi">Hi.<br>
                I'm Alexandra.</h1>
                <h1 class="about-title" hidden>About</h1>
        
                <p>
                    I'm a web developer, recent graduate of the Full Stack Web Development boot camp at Bloc and
                    current graduate student working towards my Master's Degree in Web Development and Interactive Design Usability. 
                    <span>I love problem-solving and learning cool JavaScript libraries and frameworks. 
                    Some of my interests include coding, reading tech news, music, strength training, and cooking.
                    Feel free to contact me and browse some of my projects using the links below.</span>  
                </p>        
            </section> `
        );
    });
}

// function handleWorkBtn() {
//     $('#js-work-btn').on('click', function() {
        
//     });
// }

// function handleContactBtn() {
//     $('#js-contact-btn').on('click', function() {
        
//     });
// }

function handlePortfolio() {
    handleAboutBtn();
  }
  
  handlePortfolio();