	
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


	
function reset_signin()
{
	document.getElementById("email").value="";
	document.getElementById("password").value="";
}




function signup()
{
	var email_format = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	var first_name = document.getElementById("first_name").value;
	
	
	var last_name = document.getElementById("last_name").value;
	
	var email = document.getElementById("email").value;
	
	var password = document.getElementById("password").value;
	
	var confirm_password = document.getElementById("confirm_password").value;

	
	
	
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;

	var location = document.getElementById("location").value;
	var malayalam = document.getElementById("malayalam").checked;
	var english = document.getElementById("english").checked;
	var hindi = document.getElementById("hindi").checked;
	var phone_number = document.getElementById("phone_number").value;
	
	var pincode = document.getElementById("pincode").value;


	
	if( first_name=="")
   	{
     
  	document.getElementById("first_name").focus();
  	alert("Enter the first name");
    return false;
   }
	
	if(last_name=="") 
	{
		document.getElementById("last_name").focus();
		alert("Please enter the last name");
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
	
	if(password =="")
 	{
 		document.getElementById("password").focus();
 		alert("Please enter the password");
 		return false;
 	}

	 else
	{ 
 		if(confirm_password=="") 
 		{
 			document.getElementById("confirm_password").focus();
 			alert("Enter the confirm password");
 			return false;
 		}
 		else
 		{
 			if (password==confirm_password) 
 			{
 				
 			}
 		}
	}

	
	if(!male&&!female)
	{
		
		alert("Select the gender");
		return false;

	}

    if(location=="0")
	
    {
        	alert("Select your Location");
        	return false;
    }

    if(!malayalam&&!english&&!hindi)
    {
    	alert("Select the language");
		return false;
    }
    if( phone_number=="")
    {
    	alert("Please enter your phone_number");
    	document.getElementById("phone_number").focus();
    	return false;
    }
    else
    {
    	if(isNaN(phone_number))
        {
        	alert("Enter valid number");
            document.getElementById("phone_number").value="";
            document.getElementById("phone_number").focus();
            return false;

        }
     	else
    	{
        	if(pincode.length==10)
        	{
            	
        	}
    	}
	}

  
	 if( pincode == "")
    {
    	alert("Please enter your pincode");
    	document.getElementById("pincode").focus();
    	return false;
    }
    else
    {
    	if(isNaN(pincode))
        {
        	alert("Enter valid number");
            document.getElementById("pincode").value="";
            document.getElementById("pincode").focus();
            return false;

        }
     	else
    	{
        	if(pincode.length==6)
        	{
            	
        	}
    	}
	}
	
	
}

function reset_signup()
{    
	document.getElementById("first_name").value="";
	document.getElementById("last_name").value="";
	document.getElementById("email").value="";
	document.getElementById("password").value="";
	document.getElementById("confirm_password").value="";
	
	document.getElementById("male").checked="";
	document.getElementById("female").checked="";

	document.getElementById("location").value=0;

	document.getElementById("malayalam").checked="";
	document.getElementById("english").checked="";
	document.getElementById("hindi").checked="";

	document.getElementById("phone_number").value="";
	document.getElementById("pincode").value="";

	
	
}
