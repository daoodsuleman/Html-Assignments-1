function namevalidity(a) {
    var data = (a.which) ? a.which : a.KeyCode;

    if ((data >= 33 && data <= 64) || (data >= 91 && data <= 94) || data == 96 || (data >= 123 && data <= 125))
    
    {
        return false;
    } else {
        return true;
    }
}

function numbervalidity(b) {
    var data = (b.which) ? b.which : b.KeyCode;

    if ((data >= 32 && data <= 47) || (data >= 58 && data <= 127)) {
        return false;
    } else {
        return true;
    }
}

var check = function() {
    if (document.getElementById('password').value ==
      document.getElementById('confirm_password').value) {
      document.getElementById('message').style.color = 'green' ;
      document.getElementById('message').style.fontWeight.bold;
      document.getElementById('message').style.padding = '6px';
      document.getElementById('message').style.background = 'black';
      document.getElementById('message').innerHTML = 'Matching';
    } else {
      document.getElementById('message').style.color = 'red';
      document.getElementById('message').style.fontWeight.bolder;
      document.getElementById('message').style.background = 'black';
      document.getElementById('message').style.padding = '6px';
      document.getElementById('message').style.borderRadius = '16px';
      document.getElementById('message').innerHTML = 'Not Matching';
    }
  }


  // FOR CONFIRM PASSWORDS
  function myFunction() {
    var x = document.getElementById("password");
    var y = document.getElementById("confirm_password");
    if (x.type === "password" || y.type === "confirm_password") {
      x.type = "text";
      y.type = "text";
    } else {
      x.type = "password";
      y.type = "password";
    }
  }
 

  // FOR LOGINS
  function myFunction2() {
    var x = document.getElementById("password");
    
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";  
    }
  }