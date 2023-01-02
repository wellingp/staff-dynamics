<?php 

   //Sanitization of the contact form user input.

   $myemail = ''; //EMAIL REDACTED

   $name = $_POST['name']; 
   $email_address = $_POST['email']; 
   $service = $_POST['service']; 
   $message = $_POST['message']; 

   $errors = [ ];
   $valid = true;

   //NAME
   if(empty($_POST["name"])){
		$errors["name"] = "Name cannot be empty.";
		$valid = false;
	} else {
		$name = filter_var($name, FILTER_SANITIZE_STRING);
	}

   //EMAIL
   if(empty($_POST["email"])){
		$errors["email"] = "Email cannot be empty.";
		$valid = false;
	} else {
		$email_address = filter_var($email_address, FILTER_SANITIZE_EMAIL);
		$email_address = trim($email_address);
	}

   //SERVICE
   if(empty($_POST["service"])){
		$errors["service"] = "Category cannot be empty.";
		$valid = false;
	}

   //MESSAGE

   if(empty($_POST["message"])){
		$errors["message"] = "Message cannot be empty";
		$valid = false;
	} else {
		$message = htmlentities($message, ENT_QUOTES, 'UTF-8');
		$message = trim($message);
	}

   //Send the email.

   if($valid){

   $to = $myemail;

   $email_subject = "Contact form submission: $name";

   $email_body = "You have received a new message regarding: $service. ".

   " Here are the details:\n Name: $name \n ".

   "Email: $email_address\n Message: \n $message";

   $headers = "From: $myemail\n";

   $headers .= "Reply-To: $email_address";

   mail($to,$email_subject,$email_body,$headers);

   header('Location: index.html');

   }
?>