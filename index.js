"use strict"

function closeBtn() {

    $("#close-btn").on('click', function() {
        $(".footer-content").hide();
        $(".footer-home").show(); 

        $("#line-separator").css("display", "block");
    });
}

function handleAboutBtn() {    

    $('#js-about-btn').on('click', function() {       

        $("main").html(            
            `
            <img id="poly-unicorn" src="images/poly-unicorn.jpg"/>
  
            <button>
                <img id="close-btn" src="icons/dash.png" hidden>
            </button>

            <section class="about-intro">
                        
                <h1 class="hi">Hi.<br>
                I'm Alexandra.</h1>
                <h1 class="about-title" hidden>About</h1>
        
                <p>I'm a web developer, recent graduate of the Full Stack Web Development boot camp at Bloc and
                    current graduate student working towards my Master's Degree in Web Development and Interactive Design Usability. 
                    <span>I love problem-solving and learning cool JavaScript libraries and frameworks. 
                    Some of my interests include coding, reading tech news, music, strength training, and cooking.
                    Feel free to contact me and browse some of my projects using the links below.</span>
                </p>        
            </section>
        `);

        $(".about").css(
            {"text-decoration-line": "line-through",
            "font-style": "italic"}
        );
        $("#line-separator").css("display", "none");
        $("body").css("background-color", "#CCD1D1");
        $("main").css(
            {"margin-top": "50px",
            "margin-bottom": "50px"}
        );

        closeBtn();
        
    });
}

function handleWorkBtn() {   

    $('#js-work-btn').on('click', function() {        

        $("main").html(            
            `
             <button">
                <img id="close-btn" src="icons/dash.png" hidden>
            </button>

            <section class="projects">         
                <h1>Projects</h1>

                <button class="project">
                    <h3>CSS Quiz</h3>
                </button>
                <button class="project">
                    <h3>Room Planner</h3>
                </button>
                <button class="project">
                    <h3>Project 3</h3>
                </button>
                <button class="project">
                    <h3 class="project4">Project 4</h3>
                </button>
            </section>

            <section class="project-selected">

                <h3>CSS Quiz</h3>

                <img src="images/css-quiz-img1.jpg" alt="css-quiz-interface" id="project-img">

                <p>This app allows you to test your CSS skills.</p>

                <section class="live-repo">
                    <h4>LIVE:</h4>

                    <a href="https://alexandrakollarova.github.io/CSS-Quiz/">CSS Quiz</a>            
                        
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        
                    <h4>CODE:</h4>
                        
                    <a href="https://github.com/alexandrakollarova/CSS-Quiz">GitHub</a>           
                    
                </section>

                <section class="tech-used">

                    <h4>Tech Used</h4>

                    <i class="devicon-html5-plain"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-javascript-plain"></i>
                    <i class="devicon-jquery-plain"></i>                    
                
                </section>    
            </section>
    
        `);

        $(".work").css(
            {"text-decoration-line": "line-through",
            "font-style": "italic"}
        );
        $("body").css("background-color", "#CCD1D1");
        $("#line-separator").css("display", "none");
        $("main").css(
            {"margin-top": "50px",
            "margin-bottom": "50px"}
        );
        $(".projects button").css("display", "block");
        $("h3").css(
            {"margin-bottom": "5px",
            "margin-top": "10px"}
            );

        closeBtn();
        viewProjects();

    });
}


// object constructor for project

function Project(name, imgURL, description, liveURL, liveName, codeURL, codeName, tech) {

    this.name = name;
    this.img = imgURL;
    this.description = description;
    this.live = liveURL;
    this.liveName = liveName;
    this.code = codeURL;
    this.codeName = codeName;
    this.tech = tech;

};

// object types / projects

const CSSQuizTechUsed = `
                        <i class="devicon-html5-plain"></i>
                        <i class="devicon-css3-plain"></i>
                        <i class="devicon-javascript-plain"></i>
                        <i class="devicon-jquery-plain"></i>
                        `;

const CSSQuiz = new Project("CSS Quiz", 
                            "images/css-quiz-img1.jpg", 
                            "This app allows you to test your CSS skills.",
                            "https://alexandrakollarova.github.io/CSS-Quiz/",
                            "CSS Quiz",
                            "https://github.com/alexandrakollarova/CSS-Quiz",
                            "GitHub",
                            CSSQuizTechUsed);

const RoomPlannerTechUsed = `
                            <i class="devicon-html5-plain"></i>
                            <i class="devicon-css3-plain"></i>
                            <i class="devicon-javascript-plain"></i>
                            <i class="devicon-jquery-plain"></i>
                            `;

const roomPlanner = new Project("Room Planner", 
                                "images/room-planner-img1.png", 
                                "This app allows you to oraganize your room.",
                                "https://alexandrakollarova.github.io/Room-Planner/",
                                "Room Planner",
                                "https://github.com/alexandrakollarova/Room-Planner",
                                "GitHub",
                                RoomPlannerTechUsed);

function viewProjects(Project) {

    $('.project').on('click', function() {        

        $(".project-selected").html(`

                <h3>${this.name}</h3>

                <img src="${this.img}" alt="project-image" id="project-img">

                <p>${this.description}</p>

                <section class="live-repo">
                    <h4>LIVE:</h4>

                    <a href="${this.live}">${this.liveName}</a>            
                        
                    &nbsp;&nbsp;&nbsp;&nbsp;
                        
                    <h4>CODE:</h4>
                        
                    <a href="${this.code}">${this.codeName}</a>           
                    
                </section>

                <section class="tech-used">

                    <h4>Tech Used</h4>
                    
                    <i>${this.tech}</i>
                
                </section>    
        `);
    });
}


function handleContactBtn() {

    $('#js-contact-btn').on('click', function() {

        $(".footer-home").hide();

        $("footer").html(            
            `
            <section class="footer-content">
                <div class="contact">CONTACT</div>
                
                <p id="copyright-desktop" hidden>&copy; 2019</p>
        
                <button>
                    <img id="close-btn" src="icons/dash.png">
                </button>
        
                <section class="contact-info">
        
                    <div class="phone">
                        <h5>PHONE</h5>
                        <p>781 609 8428</p>
                    </div>
        
                    <p id="get-in-touch" hidden>Get in touch</p>
                    
                    <div class="email">
                        <h5>EMAIL</h5>
                        <p>
                            <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=alexandrakollarova91@gmail.com&su=Subject&body=Hi%20Alexandra,&tf=1" class="linkGmail">ALEXANDRAKOLLAROVA@GMAIL.COM</a>
                        </p>
                    </div>
                    
                    <div class="contact-icons">
                        <a href="https://www.github.com/alexandrakollarova">
                            <img src="icons/github.png" alt="github-pages" id="gh-icon">
                        </a>
                        <a href="https://www.linkedin.com/in/alexandrakollarova">
                            <img src="icons/li.png" alt="linkedin-profile" id-"li-icon">
                        </a>
                        <a href="https://www.facebook.com/alexandra.kollarova.90">
                            <img src="icons/fb.png" alt="facebook=profile" id="fb-icon">
                        </a>                       
                    </div>
        
                    <p id="copyright">&copy; 2019</p>       
                    
                </section>
            </section>
        `);

        $(".contact").css(
            {"text-decoration-line": "line-through",
            "font-style": "italic"}
        );        

        $(".footer-content").css("height", "270px");
        $("#line-separator").css("display", "none");

        closeBtn();
    });
}

function handlePortfolio() {

    handleAboutBtn();
    handleWorkBtn();
    handleContactBtn();

}

  
handlePortfolio();

  