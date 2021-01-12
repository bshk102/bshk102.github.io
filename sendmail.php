<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php'
    require 'phpmailer/src/PHPMailer.php'

    $mail = new PHPMailer(true);
    $mail->CharSet = 'UTF-8';
    $mail->setLanguage('ru', 'phpmailer/language');
    $mail->IsHTML(true);

    //От кого письмо
    $mail->setFrom('', '');
    //Кому отправить
    $mail->addAddress('');
    //Тема письма
    $mail->Subject = 'Hello';

    //Тело письма
    $body = '<h1>H1</h1>';

    if (trim(!empty($_POST['name']))) {
        $body.='<p><strong>Имя:</strong> '$_POST['name'].'</p>';
    }

    if (trim(!empty($_POST['tel']))) {
        $body.='<p><strong>Телефон:</strong> '$_POST['tel'].'</p>';
    }

    if (trim(!empty($_POST['email']))) {
        $body.='<p><strong>Email:</strong> '$_POST['email'].'</p>';
    }

    //Отправляем
    if (!$mail->send()) {
        $message = 'Ошибка';
    } else {
        $message = 'Данные отправлены';
    }

    $response = ['message' => $message];

    header('Content-type: application/json');
    echo json_encode($response);
?>