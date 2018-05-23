<?php
  $formSubmit = isset($_REQUEST['submitted']);
  
  if($formSubmit) {
      $name = isset($_POST['naam']) && !empty($_POST['naam'])
      ? $_POST['naam']
      : 'Geen naam';

      $email = isset($_POST['email']) && !empty($_POST['email'])
      ? $_POST['email']
      : 'Geen email';

      $comment = isset($_POST['comment']) && !empty($_POST['comment'])
      ? $_POST['comment']
      : 'Geen comment';

  }
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Resultaat</title>
    <style>
        html, body {
            font-family: sans-serif;
        }
    </style>
</head>
<body>
    <h1>Resultaat</h1>
   <p>Naam: <?=$name ?></p>
   <p>Email: <?=$email ?></p> 
   <p>Comment: <?=$comment ?></p>
   <a href="../oefening2.html">Back to form</a>
</body>
</html>