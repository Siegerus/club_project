<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['event']) && !empty($_POST['user']) && !empty($_POST['message']) && !empty($_POST['rate'])) {
     
    $txt = "Club-project%0AОтзыв%0A%0A";
     
    if (isset($_POST['event']) && !empty($_POST['event'])) {
        $txt .= "Меропрятие: " . strip_tags(trim(urlencode($_POST['event']))) . "%0A";
    }
     
    if (isset($_POST['user']) && !empty($_POST['user'])) {
        $txt .= "Имя: " . strip_tags(urlencode($_POST['user'])) . "%0A";
    }

    if (isset($_POST['message']) && !empty($_POST['message'])) {
      $txt .= "Отзыв: " . strip_tags(urlencode($_POST['message'])) . "%0A";
  }

    if (isset($_POST['rate']) && !empty($_POST['rate'])) {
      $txt .= "Рейтинг: " . strip_tags(urlencode($_POST['rate'])) . "%0A";
  }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}