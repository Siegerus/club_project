<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['sex']) && !empty($_POST['name']) && !empty($_POST['age']) && !empty($_POST['couple'])) {
     
    $txt = "Club-project%0AБронь%0A%0A";
     
    if (isset($_POST['sex']) && !empty($_POST['sex'])) {
        $txt .= "Пол: " . strip_tags(trim(urlencode($_POST['sex']))) . "%0A";
    }
     
    if (isset($_POST['name']) && !empty($_POST['name'])) {
        $txt .= "Имя: " . strip_tags(urlencode($_POST['name'])) . "%0A";
    }

    if (isset($_POST['age']) && !empty($_POST['age'])) {
      $txt .= "Возраст: " . strip_tags(urlencode($_POST['age'])) . "%0A";
  }

    if (isset($_POST['couple']) && !empty($_POST['couple'])) {
      $txt .= "К оплате: " . strip_tags(urlencode($_POST['couple'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}