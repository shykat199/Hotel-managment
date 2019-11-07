function onkeypass()
{
	 var pass=document.getElementById("password").value;
	 if(pass.search(" ")>-1)
		  {
			  pass=pass.trim();
			  document.getElementById("password").value=pass;
		  }
	   if(pass.length<8)
		  {
			   document.getElementById("alert_pass").innerHTML="*Password should be of minimum 8 alphabet";
			   document.getElementById("submit").disabled=true;
			   document.getElementById("password").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
			   
		  }
		   else 
		  {
			  document.getElementById("password").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
			   document.getElementById("alert_pass").innerHTML="";
			   document.getElementById("submit").disabled=false;
		   document.getElementById("submit").style.cursor="auto";
		  }
		  
		  
}
function onkeyemail() {
    var x = document.getElementById("email").value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
	   document.getElementById("email").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
	   }
	   else
	   {
		   document.getElementById("email").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
	   }
}
function onkeyrepass()
{
	var pass1=document.getElementById("password").value;
	var pass2=document.getElementById("repassword").value;
	if(pass1 == pass2)
	{
		document.getElementById("submit").disabled=false;
		document.getElementById("alert_repass").innerHTML="";
		document.getElementById("repassword").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
	}
	else
	{
		document.getElementById("repassword").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
		document.getElementById("alert_repass").innerHTML="*Passwords Do Not Match";
		var z=document.getElementById("submit").disabled=true;
	}
}
function onkeyreg()
{
	var reg=document.getElementById("userid").value;
	if(reg.length==8 && reg.charAt(0)=='1' && reg.charAt(1)=='1')	//true if incorret registration number
	{
	document.getElementById("userid").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
		  document.getElementById("submit").disabled=false;	
	}
	else
	{
		document.getElementById("submit").disabled=true;
	   document.getElementById("userid").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
		 
	}
}
function onkeymob()
{
	var mob=document.getElementById("mobile").value;
	var phoneno = /^\d{10}$/;
	if(mob.match(phoneno) && mob.length==10)
	{
	document.getElementById("mobile").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
		   document.getElementById("submit").disabled=false;	
	}
	else
	{
		document.getElementById("submit").disabled=true;
	   document.getElementById("mobile").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
	}
}
function validation()
{
	var name=document.getElementById("name").value;
	var reg=document.getElementById("userid").value;
	var email=document.getElementById("email").value;
	var pass1=document.getElementById("password").value;
	var pass2=document.getElementById("repassword").value;
	var mob=document.getElementById("mobile").value;
	var phoneno = /^\d{10}$/;
	if(reg.length==8 && reg.charAt(0)=='1' && reg.charAt(1)=='1')//for registration number
	{
	document.getElementById("userid").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
		document.getElementById("alert_userid").innerHTML="";	
	}
	else
	{
		document.getElementById("userid").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
		document.getElementById("alert_userid").innerHTML="*Invalid registration number";
		return false;		
	}
	if(pass1.length<8)
	{
		document.getElementById("password").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
		document.getElementById("alert_pass").innerHTML="*Password should be of minimum 8 alphabet";
		return false;
	}
	else
	{
		document.getElementById("password").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
		document.getElementById("alert_pass").innerHTML="";
	}
	if(pass1 == pass2)
	{
		document.getElementById("repassword").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
		document.getElementById("alert_repass").innerHTML="";
	}
	else
	{
		document.getElementById("repassword").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
		document.getElementById("alert_repass").innerHTML="Passwords Not Matched";
		return false;
	}	
	if(mob.match(phoneno) && mob.length==10)
	{
	document.getElementById("mobile").style=" box-shadow: inset 0 2px 3px rgba( 0, 0, 0, 0.1 );";
	document.getElementById("alert_mobile").innerHTML="";	
	}
	else
	{
	   document.getElementById("mobile").style="box-shadow: 0 0 0 3px red, inset 0 2px 3px rgba( 0, 0, 0, 0.2 ), 0px 5px 5px rgba( 0, 0, 0, 0.15 )";
	   document.getElementById("alert_mobile").innerHTML="*Invalid Mobile No.";
	   return false;
	}
	return true;	
}