<?php
    $formSubmit = isset($_REQUEST['form-submitted']);
    
    if($formSubmit) {
        $searchResult = isset($_GET['searchQuery']) && !empty($_GET['searchQuery'])
        ? $_GET['searchQuery']
        : 'undefined';
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Results for: <?=$searchResult ?></title>
    <link rel="stylesheet" href="../css/oefening1.css">
</head>
<body>
    <h1>Found results for: <?=$searchResult ?></h1>
    <a href="../oefening1.html">Back to search</a>
</body>
</html>