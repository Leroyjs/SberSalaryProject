<?php
// Получаем значения переменных из пришедших данных

$name = $_POST['name'];

$method = $_SERVER['REQUEST_METHOD'];
var_dump($name);
$email = "jenkinstix@gmail.com";


$phone = $_POST['phone'];

$header = $_POST['header'];


// Формируем сообщение для отправки, в нём мы соберём всё, что ввели в форме

$mes = "Имя: $name \nТелефон: $phone \nТема: $header ";




$send = mail ($email,$mes,"Content-type:text/plain; charset = UTF-8\r\nFrom:$email");

// Если отправка прошла успешно — так и пишем

if ($send == 'true')

{echo "Сообщение отправлено";}

// Если письмо не ушло — выводим сообщение об ошибке

else {echo "Ой, что-то пошло не так";}
