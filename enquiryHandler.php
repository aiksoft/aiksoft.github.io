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
            $custName = filter_input(INPUT_POST, "custname");
            $custPhoneNo = filter_input(INPUT_POST, "custPhoneNo");
            $custEmail = filter_input(INPUT_POST, "custEmail");
            $subject = filter_input(INPUT_POST, "subject");
            $enquiryDetails = filter_input(INPUT_POST, "enquiryDetails");

            $summary = <<< HERE

            <p>
                Hello $title $custName!!!
            </p>

            <p>
                Thanks for contacting AikSoft. We will attend to your enquiry/request and get back
                to you in the shortest possible time.
            </p>
HERE;
            print $summary;
        ?>
    </body>

</html>