<?php
 
  const TOKEN = '7367612942:AAFI0FQzQZjrFndp0brU65lOVnToSFiEkiA';
 
  const CHATID = '-4138443533';
 
 
if ($_SERVER["REQUEST_METHOD"] == "POST") {
 
  $textSendStatus = '';
   
  if (!empty($_POST['join-email']) && !empty($_POST['rules'])) {
     
    $txt = "Club-project%0AВступление в клуб%0A%0A";
     
    if (isset($_POST['join-email']) && !empty($_POST['join-email'])) {
        $txt .= "Почта: " . strip_tags(trim(urlencode($_POST['join-email']))) . "%0A";
    }
     
    if (isset($_POST['rules']) && !empty($_POST['rules'])) {
        $txt .= "Согласие с правилами клуба: " . strip_tags(urlencode($_POST['rules'])) . "%0A";
    }
 
    $textSendStatus = @file_get_contents('https://api.telegram.org/bot'. TOKEN .'/sendMessage?chat_id=' . CHATID . '&parse_mode=html&text=' . $txt); 
 
  } else {
    echo json_encode('NOTVALID');
  }
} else {
  header("Location: /");
}