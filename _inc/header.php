<?php

  $page_name = basename($_SERVER['SCRIPT_NAME'], '.php');
  if ( $page_name == 'index' ) $page_name = 'O nás';
  if ( $page_name == 'cenik' ) $page_name = 'Ceník';
  if ( $page_name == 'mestoaokoli' ) $page_name = 'Město a okolí';
  

?>
<!DOCTYPE html>
<html lang="cs">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo ucfirst($page_name); ?> / Eurohotel</title>

    <!-- font awesome -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- stylesheet bootstrap -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <!-- stylesheet style.scc -->
    <link rel="stylesheet" href="./assets/style.css">

</head>
<body>
      <header>
        <?php include './_inc/menu.php'?>
      </header>