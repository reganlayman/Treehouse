//Problem: Hints are shown even when form is valid
//Solution: Hind and show them at appropriate times
var $password = $("#password");
var $confirmPassword = $("#confirm_password")
//Hide Hints
$("form span").hide();

function passwordEvent() {
  //Find out if password is valid    
  if($password.val().length > 8) {
    //Hide hint if valid 
    $password.next().hide();
    } else {
    //else show hint   
    $password.next().show();
    }    
}

function confirmPasswordEvent() {
    //find out if password and confirmation match
    if($password.val() === $confirm_password.val()) {
      //hide hint if matched
      $confirmPassword.next().hide();
    } else {
      //else show hint
      $confirmPassword.next().show();
    }    
}

//When event happens on password input
$password.focus(passwordEvent).keyup(passwordEvent)
  .focus(confirmPasswordEvent).keyup(confirmPasswordEvent);


//When event happens on confirmation input
$confirmPassword.keyup(confirmPasswordEvent).keyup(confirmPasswordEvent);
