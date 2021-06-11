<?php
 
    $servidor = "Localhost";
    $usuario = "root";
    $senha = "12345";
    $banco = "phptcm";

    $cn = new PDO("mysql:host=$servidor;dbname=$banco", $usuario, $senha);
?>