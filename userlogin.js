function validate(){
	var user=document.getElementById('username');
	
	var pass=document.getElementById('password');
	
	/*test case*/
	var tuse="pallab";
	var tpass="123";
	if(user.value==tuse)
	{
		if(pass.value==tpass){
			window.alert("welcome "+user.value);
		}
		else{
			window.alert("invalid password.!!");
		}
	}
	else{
		window.alert("invalid username");
	}
}