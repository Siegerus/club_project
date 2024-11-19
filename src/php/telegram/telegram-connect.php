<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['connect-user']) && !empty($_POST['connect-email']) && !empty($_POST['message'])) {
     
    $txt = "Club-project%0AСообщение от пользователя%0A%0A";
     
    if (isset($_POST['connect-user']) && !empty($_POST['connect-user'])) {
        $txt .= "Имя: " . strip_tags(trim(urlencode($_POST['connect-user']))) . "%0A";
    }
     
    if (isset($_POST['connect-email']) && !empty($_POST['connect-email'])) {
        $txt .= "Почта: " . strip_tags(urlencode($_POST['connect-email'])) . "%0A";
    }

    if (isset($_POST['message']) && !empty($_POST['message'])) {
      $txt .= "Текст письма: " . strip_tags(urlencode($_POST['message'])) . "%0A";
  }
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}