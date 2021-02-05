var alpha = 1.0;
var decrsnAlpha = true;
var animFumc;
var cycle = 0;

function animateHeading(){
    animFumc = setInterval(glowHeading, 15);
}

function glowHeading(){
    console.log(alpha);
    
    if (decrsnAlpha){
        decrAlpha();
    } else {
        incrAlpha();
    }
    
    var welcomeHeading = document.getElementById('welcomeHeadingText');
    var colString = "rgba(0, 0, 255," + alpha + ")";
    welcomeHeading.style.color = colString; 

    if (cycle === 20){
        clearInterval(animFumc);
    }
}

function incrAlpha(){
    alpha += 0.025;
    if (alpha >= 1.0){
        decrsnAlpha = true;
        cycle += 1;
    }
}

function decrAlpha(){
    alpha -= 0.025;
    if (alpha <= 0.0){
        decrsnAlpha = false;
    }
}

