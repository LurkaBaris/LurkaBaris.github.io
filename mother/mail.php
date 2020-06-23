<?php

$method = $_SERVER['REQUEST_METHOD'];

//Script Foreach
$c = true;

if ( $method === 'POST' ) {

	$admin_email  = 'oleganwork@yandex.ru';

    $obj = json_decode($_POST['data']);
    $price = $obj -> price;
    $client = $obj -> client;
    $tel = $obj -> tel;
	$productItems = $obj -> items;
	$text = $obj -> text;

    $message = '';
    $headMail = 'Запрос на обратный звонок';

    if ($productItems) {
        foreach ($productItems as &$value) {
                $name = $value -> name;
                $count = $value -> count;

                $message .= "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$name</b></td>
                        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$count</td>
                    </tr>
                ";
            }
        $message .= "
                    <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Сумма заказа</b></td>
                        <td style='padding: 10px; border: #e9e9e9 1px solid;'>$price</td>
                    </tr>
        ";
        $headMail = "Заказ";
    }

    if ($text) {
        $message .= "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Вопрос клиента</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$text</td>
            </tr>
        ";
        $headMail = "Клиент задает вопрос";
    }

	$message .= "
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Имя клиента</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$client</td>
            </tr>
            <td style='padding: 10px; border: #e9e9e9 1px solid;'><b>Номер телефона</b></td>
                <td style='padding: 10px; border: #e9e9e9 1px solid;'>$tel</td>
            </tr>
	";

    echo $message;
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: <'.$admin_email.'>' . PHP_EOL .
'Reply-To: '.$admin_email.'' . PHP_EOL;

mail($admin_email, $headMail, $message, $headers );