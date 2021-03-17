var navBar;
var navBarX;
var navbarLines;
var navbarIsVisible;
var navBarShown = false;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var autoSlideFunc;
var autoPrevFont;
var slideIndex = 1;
var prevSlide = 0;
var slideStarted = false;

function loadHome() {
    navBar = document.getElementById("navBar");
    navBarX = document.getElementById("navbarXIcon");
    navbarLines = document.getElementsByClassName("navbarLines");

    navbarIsVisible = false;
    showHome();
    $("#homeLink").css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });

    showFirstSlide();
    autoSlideFunc = setInterval(doAutoSlide, 5000);

    /*
        $(window).resize(function () {
        var width = $(window).width();
        var navBarWrapper = document.getElementById("navBarWrapper");

        if (width > 736) {
            hideNavBar();
            navBarShown = false;
            navBarWrapper.style.display = "block";
        } 
    });
    */
}

function showHome() {

    $("#content div").each(function () {
        $(this).hide();
    });

    $("#homePage").show();
    $("#homePage div").each(function () {
        $(this).show();
    });

    $(".headLink").each(function () {
        $(this).not("#homeLink").css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
        $(this).not("#homeLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
            }
        );
    });

    $("#homeLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
    );

    closeMenu();
}

function showContact() {
    $("#content div").each(function () {
        $(this).not("#contact").hide();
    });
    
    $("#contact").show();
    $("#contact div").each(function () {
        $(this).show();
    });

    $(".headLink").each(function () {
        $(this).not("#contactLink").css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
        $(this).not("#contactLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
            }
        );
    });

    $("#contactLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
    );

    closeMenu();
}

function showAbout() {
    $("#content div").each(function () {
        $(this).not("#about").hide();
    });

    $("#about").show();

    $(".headLink").each(function () {
        $(this).not("#aboutLink").css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
        $(this).not("#aboutLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
            }
        );
    });

    $("#aboutLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
    );

    closeMenu();
}

function showDeskMobServ() {
    $("#content div").each(function () {
        $(this).not("#servicesDiv").hide();
    });

    $("#servicesDiv").show();
    $("#servicesDiv div").show();

    $(".headLink").each(function () {
        $(this).not("#servLink").css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
        $(this).not("#servLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "rgb(39, 3, 39)" });
            }
        );
    });

    $("#servLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });
        },
    );

    closeMenu();
}

$("img").mousedown(function (e) {
    if (e.button == 2) {
        return false;
    }
});

function toggleNavbarVisibility(){
    if (navBarShown){
        navBar.style.height = "0";
        hideNavBar();
    } else {
        navBar.style.height = "160px";
        for (var i = 0; i < navbarLines.length; i++) {
            navbarLines[i].style.display = "none";
        }
        navBarX.style.display = "block";
        navBarShown = true;
    }
}

function hideNavBar() {
    for (var i = 0; i < navbarLines.length; i++) {
        navbarLines[i].style.display = "block";
    }
    navBarX.style.display = "none";
    navBarShown = false;
}

function hidNav(){
    var width = $(window).width();
    if (width <= 736 &&  navBarShown){
        hideNavBar();
        navBar.style.height = "0";
    }
}

function closeMenu(){
    var width = $(window).width();
    if (navBarShown && width <=736){
        navBar.style.height = "0";
        hideNavBar();
    }
}

// Functions for slide show
function plusSlides(n) {
    slideIndex += n;
    showSlides(slideIndex);
}

function nextSlide(n){
    clearInterval(autoSlideFunc);
    plusSlides(n);
    autoSlideFunc = setInterval(doAutoSlide, 5000);
}

function currentSlide(n){
    clearInterval(autoSlideFunc);
    slideIndex = n;
    showSlides(slideIndex);
    autoSlideFunc = setInterval(doAutoSlide, 5000);
}
function showSlides(n) {
    var i;

    if (n > slides.length) {
        slideIndex = 1;
    }

    else if (n < 1) {
        slideIndex = slides.length;
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }  

    slides[prevSlide - 1].className = slides[prevSlide - 1].className.replace("showSlide", "");    
    dots[slideIndex - 1].className += " active";
    slides[slideIndex - 1].className += " showSlide";
    prevSlide = slideIndex;
}

function showFirstSlide() {

    slides[slideIndex - 1].className += " showSlide";
    dots[slideIndex - 1].className += " active";
    prevSlide = slideIndex;
}

function doAutoSlide() {
    plusSlides(1);
}
// Slide show functions