<?php
    $string1 = "Dit is ";
    $string2 = "een hele ";
    $string3 = "lange string.";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Oefening 1</title>
</head>
<body>
    <h1>3 strings</h1>
    <p><?= $string1; ?></p>
    <p><?= $string2; ?></p>
    <p><?= $string3; ?></p>
    <h1>Concatenation</h1>
    <p><?php echo $string1; echo $string2; echo $string3; ?></p>
</body>
</html>