var autoSlideFunc;
var autoPrevFont;
var slideIndex = 1;
var prevSlide = 0;
var slideStarted = false;
var currenEmojiScrnShot = 1;
var slides = document.getElementsByClassName("mySlides");
var dots = document.getElementsByClassName("dot");
var currentFontPrev = 1;
var currFont = document.getElementById("fontPreview");
var currEmojiPreview = document.getElementById("emojiPreview");

function animateHeading() {
    loadHome();
    showFirstSlide();
    autoSlideFunc = setInterval(doAutoSlide, 5000);
    autoPrevFont = setInterval(autoShowNextFontPrev, 4000);
}

function loadHome() {
    showHome();
    $("#homeLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
}

function showHome() {

    $("#content div").each(function () {
        $(this).hide();
    });

    $("#homeDiv").show();


    $("#homeDiv p").each(function () {
        $(this).show();
    });

    $("#homeDiv div").each(function () {
        $(this).show();
    });


    $(".headLink, .navLinks a").each(function () {
        $(this).not("#homeLink").css({ "text-decoration": "underline", "color": "blue" });
        $(this).not("#homeLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "blue" });
            }
        );
    });

    $("#homeLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
}

function showSuppDonate() {
    $("#content div").each(function () {
        $(this).not("#supp_donate").hide();
    });
    $("#supp_donate").show();

    $(".headLink, .navLinks a").each(function () {
        $(this).not("#supp_donate").css({ "text-decoration": "underline", "color": "blue" });
        $(this).not("#supp_donate").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "blue" });
            }
        );
    });

    $("#suppDonateLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#suppDonateLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });

    $("#helpLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#helpLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
}

function showDedCredit() {
    $("#content div").each(function () {
        $(this).not("#credits").hide();
    });
    $("#credits").show();
    $("#credits div").show();

    $(".headLink, .navLinks a").each(function () {
        $(this).not("#dedCredLink").css({ "text-decoration": "underline", "color": "blue" });
        $(this).not("#dedCredLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "blue" });
            }
        );
    });

    $("#dedCredLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#dedCredLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });

    $("#helpLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#helpLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
}

function showStandalonePage() {
    $("#content div").each(function () {
        $(this).not("#standalonePage").hide();
    });
    $("#standalonePage").show();

    $(".headLink, .navLinks a").each(function () {
        $(this).not("#standaloneLink").css({ "text-decoration": "underline", "color": "blue" });
        $(this).not("#standaloneLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "blue" });
            }
        );
    });

    $("#standaloneLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#standaloneLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });

    $("#downloadsLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#downloadsLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
}

function showSelfcontainedPage() {
    $("#content div").each(function () {
        $(this).not("#selfContainedPage").hide();
    });
    $("#selfContainedPage").show();

    $(".headLink, .navLinks a").each(function () {
        $(this).not("#selfContainedLink").css({ "text-decoration": "underline", "color": "blue" });
        $(this).not("#selfContainedLink").hover(
            function () {
                $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
            },
            function () {
                $(this).css({ "text-decoration": "underline", "color": "blue" });
            }
        );
    });

    $("#selfContainedLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#selfContainedLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });

    $("#downloadsLink").hover(
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
        function () {
            $(this).css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
        },
    );
    $("#downloadsLink").css({ "text-decoration": "none", "color": "rgb(255, 255, 0)" });
}

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

function showNextFontPrev(n){
   clearInterval(autoPrevFont);
   showNextPrev(n);
   autoPrevFont = setInterval(autoShowNextFontPrev, 4000);
}

function showNextPrev(n){
    currentFontPrev += n;
    if (currentFontPrev > 54){
        currentFontPrev = 1;
    } else if (currentFontPrev < 1){
        currentFontPrev = 54;
    } 
    var currSrc = "icons/fontDemo" + currentFontPrev + ".PNG";
    currFont.src = currSrc;
}

function autoShowNextFontPrev(){
    showNextPrev(1);
}

function showNextEmojiScrnShot(n){
    currenEmojiScrnShot += n;

    if (currenEmojiScrnShot > 2){
        currenEmojiScrnShot = 1;
    }

    if (currenEmojiScrnShot < 1){
        currenEmojiScrnShot = 2;
    }

    // icons/FT_emoji_screenshot.PNG
    var currSrc = "icons/FT_emoji_screenshot" + currenEmojiScrnShot + ".PNG";
    currEmojiPreview.src = currSrc;
}




