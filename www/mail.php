<?php

$name = $_POST['name'];
$email = "jenkinstix@gmail.com";
$phone = $_POST['phone'];
$header = $_POST['company'];


$mes = "Имя: $name \nТелефон: $phone \nКомпания: $header ";
$send = mail($email, $name, $mes);


if ($send) {
    echo "Сообщение отправлено";
} else {
    echo "Ой, что-то пошло не так";
}
