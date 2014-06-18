

/*

================Validation for Sign In form=================================================
*/

function signin()
{
	
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	
	var email_format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if(email=="") 
	{
		document.getElementById("email").focus();
		alert("Please enter the email");
		return false;
	}
	else
	{
		
		if(email_format.test(email)) 
		{
			 
		}
		else
		{
			document.getElementById("email").focus();
			alert("Please enter the  correct email address format");
			return false;
		}
	}

	if(password=="") 
	{
		document.getElementById("password").focus();
		alert("Please enter the password");
		return false;
	}
}


/*

================Reset for Sign In form=================================================
*/

function reset_signin()
{
	document.getElementById("email").value="";
	document.getElementById("password").value="";
}
/*
==============================validation of signup============================================================
*/
function signup()
{
	var fname = document.getElementById("first_name").value;
	var lname = document.getElementById("last_name").value;
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var cpassword = document.getElementById("cpassword").value;
	var gender = document.getElementById("gender").value;
	var location = document.getElementById("location").value;
	var month = document.getElementById("month").value;
	var date = document.getElementById("date").value;
	var year = document.getElementById("year").value;
	

	if(first_name=="") 
	{
		document.getElementById("first_name").focus();
		alert("Please enter the first_name");
		return false;
	}
	if(last_name=="") 
	{
		document.getElementById("last_name").focus();
		alert("Please enter the last_name");
		return false;
	}
	if(email=="") 
	{
		document.getElementById("email").focus();
		alert("Please enter the email");
		return false;
	}
	else
	{
		
		if(email_format.test(email)) 
		{
			 
		}
		else
		{
			document.getElementById("email").focus();
			alert("Please enter the  correct email address format");
			return false;
		}
	}
	if(password=="") 
	{
		document.getElementById("password").focus();
		alert("Please enter the password");
		return false;
	}
	if(confirmpassword=="") 
	{
		document.getElementById("cpassword").focus();
		alert("Please enter the confirmpassword");
		return false;
	}
}

