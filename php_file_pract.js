var randNo1, randNo2, ans;
var trials = 0;

function showFirstPage() {
    $("#formTitle").html("Registration Form");
    $("#content div").each(function () {
        $(this).toggle();
    });

    $("#secondPage").hide();
    $("#secondPage div").hide();

    $("#firstPage").show();
    $("#firstPage div").show();
}

function showSecPage() {
    $("#content div").each(function () {
        $(this).hide();
    });

    var passSrc = $("#passport").attr("src");
    $("#passportPrev").attr("src", passSrc);

    var pElem = document.getElementById("infoReview");
    pElem.innerHTML = "";

    $("#formTitle").html("Information Review");
    appendField("Full Name: ", document.getElementById("title"), document.getElementById("surName"),
        document.getElementById("firstName"), document.getElementById("otherNames"));
    appendLineBreak();
    appendField("Date Of Birth: ", document.getElementById("dob"));
    appendLineBreak();
    appendField("State of Origin: ", document.getElementById("stateOfOrigin"));
    appendLineBreak();
    appendField("LGA: ", document.getElementById("lga"));
    appendLineBreak();
    appendField("Gender: ", document.getElementById("gender"));
    appendLineBreak();
    appendField("Marital Status: ", document.getElementById("maritalStatus"));
    appendLineBreak();
    appendField("Permanent Address: ", document.getElementById("permAddress"));
    appendLineBreak();
    appendField("Mobile No.: ", document.getElementById("mobileNo"));
    appendLineBreak();
    appendField("Email: ", document.getElementById("email"));
    appendLineBreak();
    appendField("Education Level: ", document.getElementById("eduLevel"));
    appendLineBreak();
    appenCourses();

    $("#secondPage").show();
    $("#secondPage div").show();
}

function show3rdPage() {
    randNo1 = Math.round(Math.random() * 20);
    randNo2 = Math.round(Math.random() * 20);

    var str = "" + randNo1 + " + " + randNo2 + " = ";
    $("#question").html("");
    $("#question").html(str);

    $("#secondPage").hide();
    $("#secondPage div").hide();
    $("#thirdPage").show();
    $("#thirdPage div").show();
    $("#submitButt").hide();
}

function verifyCaptcha() {
    var ans = randNo1 + randNo2;
    var userAns = $("#answer").val();

    if (ans == userAns) {
        $("#captchaDiv").hide();
        $("#prompt").html("Please click the green Submit button below to submit the form.");
        $("#submitButt").show();
    } else {
        trials++;
        if (trials > 4) {
            history.go(0);
        } else {
            $("#captchaHeading").html("Sorry, wrong answer! Please try again.");
            $("#answer").val("");
            show3rdPage();
        }
    }
}

function appendField(fieldName, ...elems) {
    var pElem = document.getElementById("infoReview");
    var spanElem = document.createElement("span");
    var text1 = document.createTextNode("" + fieldName);
    spanElem.appendChild(text1);
    spanElem.classList.add("fieldName");
    pElem.appendChild(spanElem);

    elems.forEach(elem => {
        var text2 = document.createTextNode(" " + elem.value + "");
        pElem.appendChild(text2);
    });
}

function appendLineBreak() {
    var pElem = document.getElementById("infoReview");
    var lnBreak = document.createElement("br");
    pElem.appendChild(lnBreak);
}

function appenCourses() {
    var pElem = document.getElementById("infoReview");
    var spanElem = document.createElement("span");
    var text = document.createTextNode("Course(s) Selected: ");
    spanElem.appendChild(text);
    spanElem.classList.add("fieldName");
    pElem.appendChild(spanElem);
    var coursesSel =  "";
    $(".courseCB").each(function () {
        if ($(this).is(":checked")) {
            coursesSel += $(this).val();
            coursesSel += ", ";
            appendField("", this);
            var text = document.createTextNode(", ");
            pElem.appendChild(text);
        }
    });
    var courseElem = document.getElementById("courseSel");
    courseElem.value = coursesSel;
}

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $("#passport").attr("src", e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
    else {
        $("#passport").attr("src", "icons/uploadPhoto.PNG");
    }
}

function verifyReqFields() {
    var allCorect = true;

    $(".isRequired").each(function () {
        if ($(this).val() == null || $(this).val() == undefined || $(this).val() == "") {
            $(this).addClass("req");
            allCorect = false;
        } else {
            $(this).removeClass("req");
        }
    });

    var courseIsSelected = false;
    $(".courseCB").each(function () {
        if ($(this).is(":checked")) {
            courseIsSelected = true;
            return false;
        }
    });

    if (!courseIsSelected) {
        $("#coursesLabel").addClass("req");
    } else {
        $("#coursesLabel").removeClass("req");
    }

    if (allCorect && courseIsSelected) {
        var emailRE = /^.+@.+\..{2,4}$/;
        var emailObj = document.getElementById("email");
        var emailVal = emailObj.value;
        
        if(!emailVal.match(emailRE)){
            alert("Please enter a valid email.");
        } else {
            showSecPage();
        } 
    } else {
        alert("Please complete all required fields.");
    }
}

function appendSelectedCourses(){
    var selectedCourse = "";
    $(".courseCB").each(function () {
        if ($(this).is(":checked")) {
            selectedCourse += $(this).val();
            selectedCourse += ", ";
        }
    });
    $("#courseSel").val(selectedCourse);
}

function submitForm(){
    var frm = document.getElementById("mainForm");
    frm.submit();
    frm.reset();
    var pElem = document.getElementById("infoReview");
    pElem.innerHTML = "";
    $("#passport").attr("src", "icons/uploadPhoto.PNG");
    $("#prompt").html("");
    $("#submitButt").hide();
    showFirstPage();
}