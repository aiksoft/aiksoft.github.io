var alpha = 1.0;
function animateHeading(){
    setInterval(glowHeading, 100);
}

function glowHeading(){
    alpha -= 0.05;
    if (alpha <= 0.0){
        alpha = 1.0;
    }
    var welcomeHeading = document.getElementById('welcomeHeadingText');
    var colString = "rgba(0, 0, 255," + alpha + ")";
    welcomeHeading.style.color = colString;

}
