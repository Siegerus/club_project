<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['sign-user']) && !empty($_POST['sign-email']) && !empty($_POST['sign-select']) && !empty($_POST['sign-password']) && !empty($_POST['sign-password_conf']) & !empty($_POST['sign-checkbox'])) {
     
    $txt = "Club-project%0AРегистрация нового пользователя%0A%0A";
     
    if (isset($_POST['sign-user']) && !empty($_POST['sign-user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['sign-user']))) . "%0A";
    }
     
    if (isset($_POST['sign-email']) && !empty($_POST['sign-email'])) {
        $txt .= "Почта: " . strip_tags(urlencode($_POST['sign-email'])) . "%0A";
    }

    if (isset($_POST['sign-select']) && !empty($_POST['sign-select'])) {
      $txt .= "Пол: " . strip_tags(urlencode($_POST['sign-select'])) . "%0A";
  }

    if (isset($_POST['sign-password']) && !empty($_POST['sign-password'])) {
      $txt .= "Пароль: " . strip_tags(urlencode($_POST['sign-password'])) . "%0A";
  }

    if (isset($_POST['sign-password_conf']) && !empty($_POST['sign-password_conf'])) {
      $txt .= "Подтверждение пароля: " . strip_tags(urlencode($_POST['sign-password_conf'])) . "%0A";
  }

  if (isset($_POST['sign-checkbox']) && !empty($_POST['sign-checkbox'])) {
    $txt .= "Согласие с политикой: " . strip_tags(urlencode($_POST['sign-checkbox'])) . "%0A";
  }


    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}