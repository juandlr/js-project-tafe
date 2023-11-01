// Login script by Juan David Lopez


window.onload = init;
function init() {
	document.getElementById('login').onsubmit = validateLogin;
    checkStatus();
}

   
function validateLogin() {
 	  var user = document.getElementById("txtuser").value;
      var pass = document.getElementById("txtpass").value; 
 		if (user == "juan" && pass == "abc") {
			 document.cookie = "user="+user;
             document.cookie = "pass="+pass;
             loggedIn();                                      
             alert("You are now logged in " + user);
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
       }
       
       function checkStatus() {
        var strCookie = document.cookie;
        if ((strCookie.indexOf("juan") != -1) && (strCookie.indexOf("abc") != -1)) {
            loggedIn();
        }
    }
    
    function loggedOut() {
        document.cookie = "user=;max-age=0";
        document.cookie = "pass=;max-age=0";
        var header = document.getElementById("header");
        var logout = document.getElementById("logout");                 
        header.replaceChild(back, document.getElementById('logout'));             
    }	

