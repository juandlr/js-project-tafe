// attach event handler to submit event of form
    window.onload = init;
    function init() {
        document.forms[1].onsubmit = validateForm;  
        document.getElementById('login').onsubmit = validateLogin;
        checkStatus();
    }
	
	
// declare validation form
    function validateForm() {
// validation regular expressions
           var regEmpty = /^\s$/;
		   var regEmail = /[\w_\.\-]+@([\w\-]+\.)+[a-zA-Z]+$/;

// get elements to be validated and initieate error and confirmation details	
           var name = document.getElementById('name');
		   var email = document.getElementById('email');
           var artist = document.getElementById('artist');
           var album =  document.getElementById('album');
           var comments = document.getElementById('comments');
		   var details = "";
           var errors = "";
           
           if (regEmpty.test(name.value) || name.value == "") {
            name.style.border = "1px solid red";
            errors += "Please enter a valid name \n"; 
           } else {
		   name.style.border = "2px black inset";
		   details += "Name: " + name.value + "\n";
		   
		   }
		   
		   if (!regEmail.test(email.value) || email.value  == "" || regEmpty.test(email.value)) {
            email.style.border = "1px solid red";
            errors += "Please enter a valid email \n"; 
           } else {
		   email.style.border = "2px black inset";
		   details += "Email: " + email.value + "\n"	   
		   }
		   
		    if (artist.value  == "" || regEmpty.test(artist.value)) {
            artist.style.border = "1px solid red";
            errors += "Please enter a valid Artist \n"; 
           } else {
		   artist.style.border = "2px black inset";
		   details += "Artist: " + artist.value + "\n";	   
		   }
		   
		     if (album.value  == "" || regEmpty.test(album.value)) {
            album.style.border = "1px solid red";
            errors += "Please enter a valid Album \n"; 
           } else {
		   album.style.border = "2px black inset";
		   details += "Album: " + album.value + "\n";	   
		   }
		   
		   
		    if (comments.value  == "" || regEmpty.test(comments.value)) {
            comments.style.border = "1px solid red";
            errors += "Please enter your comments \n"; 
           } else {
		   comments.style.border = "2px black inset";
		   details += "Comments: " + comments.value + "\n";	   
		   }
		   
		   if (errors != "") {
		   alert(errors);
		   return false;
		   } else { submit = confirm("Are these details correct \n" + details);
					if (submit == true) {
					alert("Thank You");
					return true;
					}
					else return false;
					}
		              
    }


//login 
  
function validateLogin() {
 	  var user = document.getElementById("txtuser").value;
      var pass = document.getElementById("txtpass").value; 
 		if (user == "juan" && pass == "abc") {
			 document.cookie = "user="+user;
             document.cookie = "pass="+pass;
             loggedIn();                                      
             alert("You are now logged in" + user);
			}
			else  alert('The user name and password provided do not match');
            return false;		
	   }
       
              
       function loggedIn(user) {
             var header = document.getElementById("header");    
             var logout = document.createElement("a");
             var strLogout = document.createTextNode("Logout");
             logout.appendChild(strLogout);              
             logout.href = "#";
             logout.id = "logout";
             logout.onclick = loggedOut;
             logout.style.marginLeft = "700px";
             back = header.replaceChild(logout, document.getElementById('login'));
             document.getElementById("name").value = "juan";
            document.getElementById("email").value = "juan@tafe.com";   
       }
       
       function checkStatus() {
        var strCookie = document.cookie;
        if ((strCookie.indexOf("juan") != -1) && (strCookie.indexOf("abc") != -1)) {
            loggedIn();
            document.getElementById("name").value = "juan";
            document.getElementById("email").value = "juan@tafe.com";           
        }
    }
    
    function loggedOut() {
        document.cookie = "user=;max-age=0";
        document.cookie = "pass=;max-age=0";
        var header = document.getElementById("header");
        var logout = document.getElementById("logout");                 
        header.replaceChild(back, document.getElementById('logout'));
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";          
    }	


