<!DOCTYPE html>

<html>
    <head>
        <title>Enquiry Handler</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>

    <body>
        <?php

            $title = filter_input(INPUT_POST, "title");
            $custName = filter_input(INPUT_POST, "custName");
            $custPhoneNo = filter_input(INPUT_POST, "custPhoneNo");
            $custEmail = filter_input(INPUT_POST, "custEmail");
            $subject = filter_input(INPUT_POST, "subject");
            $enquiryDetails = filter_input(INPUT_POST, "enquiryDetails");

            $summary = <<< HERE

            <p>
                Hello <b>$title $custName!!!</b>
            </p>

            <p>
                Thanks for contacting AikSoft!
            </p>

            <p>
                We will attend to your enquiry/request as soon as possible and get back to you in the shortest possible time.
            </p>
HERE;
            print $summary;

            $status = mail("abasiaikien@gmail.com", "Testing PHP", "Hello Mr. Abasi Aikien. FancyText is cool");

            if ($status == true){
                echo "Message has been sent";
            } else {
                echo "An error occured while sending message. Please try again!!!";
            }
        ?>
    </body>

</html>