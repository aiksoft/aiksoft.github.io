var navBar;
var navBarX;
var navbarLines;
var navbarIsVisible;
var navBarShown = false;

function loadHome() {
    navBar = document.getElementById("navBar");
    navBarX = document.getElementById("navbarXIcon");
    navbarLines = document.getElementsByClassName("navbarLines");
    navbarIsVisible = false;
    showHome();
    $("#homeLink").css({ "text-decoration": "none", "color": "rgb(126, 167, 126)" });

    $(window).resize(function () {
        var width = $(window).width();
        if (width > 736) {
            navBar.style.display = "block";
        } else {
            hideNavbar();
        }
    });
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
}

function showContact() {
    $("#content div").each(function () {
        $(this).not("#contact").hide();
    });
    $("#contact").show();

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
}

$("img").mousedown(function (e) {
    if (e.button == 2) {
        return false;
    }
});

function toggleNavbarVisibility(){
    if (navBarShown){
        hideNavbar();
        navBar.style.height = "0";
    } else {
        navBar.style.height = "160px";
        for (var i = 0; i < navbarLines.length; i++) {
            navbarLines[i].style.display = "none";
        }
        navBarX.style.display = "block";
        navBarShown = true;
    }
    
}

function hideNavbar() {
    for (var i = 0; i < navbarLines.length; i++) {
        navbarLines[i].style.display = "block";
    }
    navBarX.style.display = "none";
    navBarShown = false;
}

function hidNav(){
    var width = $(window).width();
    if (width <= 736 &&  navBarShown){
        hideNavbar();
        navBar.style.height = "0";
    }
}





