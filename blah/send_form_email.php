<?php
if(isset($_POST['email'])) {
 
    
    $email_to = "judegiordano@gmail.com";
    $email_subject = "Email from website";
 
    function died($error) {
        // error code
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        die();
    }
 
 
    // validation expected data exists
    if(!isset($_POST['first_name']) ||
        !isset($_POST['last_name']) ||
        !isset($_POST['email']) ||
        !isset($_POST['telephone']) ||
        !isset($_POST['comments'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');       
    }
 
     
 
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $email_from = $_POST['email'];
    $telephone = $_POST['telephone'];
    $comments = $_POST['comments'];
 
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
 
  if(!preg_match($email_exp,$email_from)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
 
    $string_exp = "/^[A-Za-z .'-]+$/";
 
  if(!preg_match($string_exp,$first_name)) {
    $error_message .= 'The First Name you entered does not appear to be valid.<br />';
  }
 
  if(!preg_match($string_exp,$last_name)) {
    $error_message .= 'The Last Name you entered does not appear to be valid.<br />';
  }
 
  if(strlen($comments) < 2) {
    $error_message .= 'The Comments you entered do not appear to be valid.<br />';
  }
 
  if(strlen($error_message) > 0) {
    died($error_message);
  }
 
    $email_message = "Form details below.\n\n";
 
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
 
     
 
    $email_message .= "First Name: ".clean_string($first_name)."\n";
    $email_message .= "Last Name: ".clean_string($last_name)."\n";
    $email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    $email_message .= "Comments: ".clean_string($comments)."\n";
 
// email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>
 
<!--  success html -->

<!DOCTYPE html>
<html lang="en-US">
    <head>
        <title>
            Contact
        </title>
        <!-- bootstrap-->
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<!--fonts-->
        
        <link href='https://fonts.googleapis.com/css?family=Allura' rel='stylesheet'>
        
        
<!--font-family: 'Allura';-->
        
        
        <link href='https://fonts.googleapis.com/css?family=Bungee Shade' rel='stylesheet'>
        
<!--font-family: 'Bungee Shade';-->
        
     
        <link href='https://fonts.googleapis.com/css?family=Shrikhand' rel='stylesheet'>
        
        
        
<!--font-family: 'Shrikhand';font-size: 22px;  -->
        
        
        
        
        <link href='https://fonts.googleapis.com/css?family=Arima Madurai' rel='stylesheet'>
        
<!--font-family: 'Arima Madurai';-->
        
        
        <link href='https://fonts.googleapis.com/css?family=Alex Brush' rel='stylesheet'>
        
<!-- font-family: 'Alex Brush'; -->
        
        <link href="https://fonts.googleapis.com/css?family=Bungee" rel="stylesheet">
<!--font-family: 'Bungee', cursive;-->
        
        <link href="https://fonts.googleapis.com/css?family=Bungee|Kumar+One" rel="stylesheet">
        
<!--font-family: 'Bungee', cursive;
font-family: 'Kumar One', cursive;-->
        
        <link href="https://fonts.googleapis.com/css?family=Racing+Sans+One" rel="stylesheet">
        
<!--font-family: 'Racing Sans One', cursive;-->
        
        <link href="https://fonts.googleapis.com/css?family=Oleo+Script" rel="stylesheet">
        
<!--font-family: 'Oleo Script', cursive;-->
        
        <link href="https://fonts.googleapis.com/css?family=Fjalla+One" rel="stylesheet">
        
        
<!--font-family: 'Fjalla One', sans-serif;-->
        
<!--end fonts-->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <!--end boostrap-->
        <link rel="stylesheet" href="main.css" type="text/css">
        <link rel="icon" href="">
<!--        animate.css-->
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        integrity="sha384-OHBBOqpYHNsIqQy8hL1U+8OXf9hH6QRxi0+EODezv82DfnZoV7qoHAZDwMwEJvSw"
        crossorigin="anonymous">
<!--        end animate.css-->
        
        <!--meta-->
        <meta charset="UTF-8">
        <meta name="keywords" content="HTML,CSS,XML,JavaScript">
        <meta name="author" content="Jude Giordano">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!--end meta-->
    </head>
    
<!-- end head-->
    
    
    
    
    
    <body>
        
        <div class="showcase">
<!--   background header-->
            
<!--  class="animated bounceInLeft"-->
            <a href="index.html"> <h1>Jude</h1>
            </a>
        </div>
        
     <nav class="navbar navbar-expand-lg navbar-light sticky-top" id="myNav">
         
         <section class="img-fluid">
<!-- gif logo -->
         </section>
         
  <a class="navbar-brand">Contact</a>
         
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
         
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
        
      <li class="nav-item">
        <a class="nav-link" href="index.html">Home</a>
      </li>
        
      <li class="nav-item">
        <a class="nav-link" href="resume.html">Resume</a>
      </li>
        
      <li class="nav-item active">
        <a class="nav-link" href="contact.html">Contact  <span class="sr-only">(current)</span></a>
      </li>
        
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
         My Work
        </a>
          
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            
          <a class="dropdown-item" href="lab1.html">Lab 1</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="lab2.html">Lab 2</a>
            <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="lab1.html">Lab 3</a>
            <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="lab1.html">Lab 4</a>
            <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="lab1.html">Lab 5</a>
            <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="lab1.html">Lab 6</a>
            <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="lab1.html">Lab 7</a>
            <div class="dropdown-divider"></div>
             <a class="dropdown-item" href="lab1.html">Lab 8</a>
            <div class="dropdown-divider"></div>
<!--
          <a class="dropdown-item" href="#">Lab 3</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 4</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 5</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 6</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 7</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 8</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 9</a>
            <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Lab 10</a>
            
-->
        </div>
          
      </li>
    </ul>
  </div>
</nav>
<!-- end nav-->
        
        
        
        
        
<br>
<br>
<br>
    <div class="container-fluid">
   
        <center>
            Thank you for contacting me, I will be in touch shortly!
        </center>  
             
        
    </div>
<br>
<br>
        
        
        
<!--background music-->
        
<!--
<iframe width="0" height="0" src="https://www.youtube.com/embed/2ccaHpy5Ewo?rel=0&autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen>
</iframe>
        
-->
<!--end background music-->
<!-- ?rel=0autoplay=1-->
        
        
        
        
        
        
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>
        
    </body>
</html>
      





 
<?php
 
}
?>