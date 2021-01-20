<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо
	$mail->setFrom('petrovichanton98@gmail.com', 'Tvajo Dreva');
	//Кому отправить
	$mail->addAddress('antonpetrovich98@mail.ru');
	//Тема письма
	$mail->Subject = 'Пользователь отправил данные';

	
	//Способ связи
	$communication = "В Instagram";
	if($_POST['communication'] == "messangers"){
		$communication = "В Viber / Telegram";
	} else if($_POST['communication'] == "call"){
		$communication = "По телефону";
	}

	//Тело письма
	$body = '<h1>Заказ:</h1>';
	
	if(trim(!empty($_POST['name']))){
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['phone']))){
		$body.='<p><strong>Телефон:</strong> '.$_POST['phone'].'</p>';
	}
	if(trim(!empty($_POST['nick']))){
		$body.='<p><strong>Никнейм в Instagram:</strong> '.$_POST['nick'].'</p>';
	}
	if(trim(!empty($_POST['product']))){
		$body.='<p><strong>Название продукта:</strong> '.$_POST['product'].'</p>';
	}
	if(trim(!empty($_POST['quantity']))){
		$body.='<p><strong>Количество:</strong> '.$_POST['quantity'].'</p>';
	}
	if(trim(!empty($_POST['communication']))){
		$body.='<p><strong>Предпочитаемый способ связи:</strong> '.$communication.'</p>';
	}
	if(trim(!empty($_POST['message']))){
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}
	

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены!';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>