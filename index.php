<?php

function validEmail()
{
    $getEmail = $_POST["email"];

    if (filter_var($getEmail, FILTER_VALIDATE_EMAIL)) {
        $message = "Email Cadastrado com Sucesso!";
        echo $message;
    } else {
        $message = "Email Invalido!";
        echo $message;
    }
}

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <style>
        #cadEmail {
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>

    <title>Document</title>
</head>

<body>
    <div id="cadEmail">
        <h1><?= validEmail() ?></h1>
    </div>
</body>

</html>