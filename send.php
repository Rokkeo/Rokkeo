<?php
//if "email" variable is filled out, send email
  if (isset($_REQUEST['email']))  {
  
  //Email information
  $admin_email = "v.topolovacki@rokkeo.com";
  $name = $_REQUEST['name'];
  $email = $_REQUEST['email'];
  $message = $_REQUEST['message'];
  
  //send email
  mail($admin_email, "$name", $message, "From:" . $email);
  
  //Email response
  echo "Thank you for contacting us!";
  }
  
  //if "email" variable is not filled out, display the form
  else  {
?>

<?php
  }
?>