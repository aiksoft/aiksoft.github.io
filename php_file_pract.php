<!DOCTYPE html>
<html>

<head>
    <title>PHP File Practise</title>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="php_file_pract.css" />
</head>

<body>

    <div id="heading">
        <img src="icons/AikSoft_Logo.PNG" alt="logo" width="200">
        <p id="compName">Aikien Softwares Academy</p>
        <p id="moto">...easier with software.</p>
        <p id="formTitle">Student Information</p>
    </div>

    <?php
    $title = filter_input(INPUT_POST, "title");
    $surName = filter_input(INPUT_POST, "surName");
    $firstName = filter_input(INPUT_POST, "firstName");
    $otherNames = filter_input(INPUT_POST, "otherNames");
    $fullName = $title . " " . $surName . " " . $firstName . " " . $otherNames;
    $dob = filter_input(INPUT_POST, "dob");
    $stateOfOrigin = filter_input(INPUT_POST, "stateOfOrigin");
    $lga = filter_input(INPUT_POST, "lga");
    $gender = filter_input(INPUT_POST, "gender");
    $maritalStatus = filter_input(INPUT_POST, "maritalStatus");
    $permAddress = filter_input(INPUT_POST, "permAddress");
    $mobileNo = filter_input(INPUT_POST, "mobileNo");
    $email = filter_input(INPUT_POST, "email");
    $eduLevel = filter_input(INPUT_POST, "eduLevel");
    $courseSel = filter_input(INPUT_POST, "courseSel");
    $fileInput = filter_input(INPUT_POST, "fileInput");

    print "<h1> Hello $fullName </h1>";
    print "<p> Your application has been received </p>";
    print "<h1>Your Details: </h1>";
    $details = <<< HERE
        <p>
            <strong>Full Name:</strong> $fullName
        </p>

        <p>
            <strong>Date of Birth:</strong> $dob
        </p>

        <p>
            <strong>State of Origin:</strong> $stateOfOrigin
        </p>

        <p>
            <strong>Local Government Area:</strong> $lga
        </p>

        <p>
            <strong>Gender:</strong> $gender
        </p>

        <p>
            <strong>Marital Status:</strong> $maritalStatus
        </p>

        <p>
            <strong>Permanent Address:</strong> $permAddress
        </p>

        <p>
            <strong>Mobile No.:</strong> $mobileNo
        </p>

        <p>
            <strong>Email:</strong> $email
        </p>

        <p>
            <strong>Highest Education:</strong> $eduLevel
        </p>

        <p>
            <strong>Courses Selected:</strong> $courseSel
        </p>
HERE;
    print $details;
    // Check if the form was submitted
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Check if file was uploaded without errors
        if (isset($_FILES["fileInput"]) && $_FILES["fileInput"]["error"] == 0) {
            $allowed = array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");
            $filename = $_FILES["fileInput"]["name"];
            $filetype = $_FILES["fileInput"]["type"];
            $filesize = $_FILES["fileInput"]["size"];

            // Verify file extension
            $ext = pathinfo($filename, PATHINFO_EXTENSION);
            if (!array_key_exists($ext, $allowed)) {
                die("Error: Please select a valid file format.");
            }

            // Verify file size - 5MB maximum
            $maxsize = 5 * 1024 * 1024;
            if ($filesize > $maxsize) {
                die("Error: File size is larger than the allowed limit.");
            }

            // Verify MYME type of the file
            if (in_array($filetype, $allowed)) {
                // Check whether file exists before uploading it
                if (file_exists("upload/" . $filename)) {
                    echo $filename . " is already exists.";
                } else {
                    move_uploaded_file($_FILES["fileInput"]["tmp_name"], "upload/" . $filename);
                    $uploadedFileName = "upload/" . $filename;
                    $uploadedFileName2 = "upload/" . $surName . "_" . $firstName . "_" . $otherNames . "." . $ext;
                    rename($uploadedFileName, $uploadedFileName2);

                    $uploadedFile = <<<HERE
                    <p>
                        <img src= "$uploadedFileName2" alt="passport" height="120">
                    </p>
HERE;
                    print $uploadedFile;
                    echo "Your passport was uploaded successfully.";
                }
            } else {
                echo "Error: There was a problem uploading your file. Please try again.";
            }
        } else {
            echo "Error: " . $_FILES["fileInput"]["error"];
        }
    }
    print "<p> You will get an email shortly. </p>";
    ?>

    <div id="footer">
        <div id="socialMediaLinks">
            <a href="https://facebook.com" class="socialMediaHandle"><img src="icons/facebook_logo.png" alt="Facebook" width="25"></a>
            <a href="https://youtube.com" class="socialMediaHandle"><img src="icons/youtube_logo.png" alt="YouTube" width="25"></a>
            <a href="https://twitter.com" class="socialMediaHandle"><img src="icons/twitter_logo.png" alt="Twitter" width="25"></a>
            <a href="https://linkedin.com" class="socialMediaHandle"><img src="icons/linkedin_logo.png" alt="LinkedIn" width="25"></a>
            <a href="https://instagram.com" class="socialMediaHandle"><img src="icons/instagram_logo.png" alt="Instagram" width="25"></a>
        </div>
        <div id="footer_div">
            <div><img src="icons/AikSoft_Logo.PNG" alt="logo" width="75" height="50" class="logo" /></div>
            <p>Copyright(C) 2020. Aikien Softwares, Inc. All rights reserved.</p>
        </div>
    </div>
</body>

</html>