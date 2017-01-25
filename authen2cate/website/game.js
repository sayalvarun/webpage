
//Number of attempts allowed
var count = 4;
function validate() {
	var level = document.title.substring(14);
	var userName = document.myform.username.value;
	var passWord = document.myform.password.value;
	var valid = false;

	var userArray = ["admin", "ceo@apple.com", "larrypage@gmail.com"];  //sample usernames
	var passArray = ["cookies", "shuffle7", "newyorkcity"];  // the corresponding passwords;

	if(level === "Grandma's Cookies"){
		
		if ((userName.toLowerCase() == userArray[0]) && (passWord.toLowerCase() == passArray[0])) {
			valid = true;
			redirect("gHacked.html");
			return;
		}
	}

	if(level === "Bookface"){
		
		if ((userName.toLowerCase() == userArray[1]) && (passWord.toLowerCase() == passArray[1])) {
			valid = true;
			redirect("fakefb.html");
			return;
		}
	}

	if(level === "Foogle"){
		if ((userName.toLowerCase() == userArray[2]) && (passWord.toLowerCase() == passArray[2])) {
			valid = true;
			redirect("twoStepPrompt.html");
			return;
		}

	}

	var t = "tries";
	if (count == 1) {
		t = "try"
		if(level === "Grandma's Cookies"){
			alert ("Invalid username and/or password.  You have " + count + " " + t + " left. Here's a hint, what does grandma sell?");
		}
		if(level === "Bookface"){
			alert ("Invalid username and/or password.  You have " + count + " " + t + " left. Here's a hint, there was the Nano and the _____?");
		}
		if(level === "Foogle"){
		    alert ("Invalid username and/or password.  You have " + count + " " + t + " left. Here's a hint, his full name is before the @");
		}
		count --;	
	}

	else if (count > 1) {
		alert ("Invalid username and/or password.  You have " + count + " " + t + " left.");
		document.myform.username.value = "";
		document.myform.password.value = "";
		setTimeout("document.myform.username.focus()", 25);
		setTimeout("document.myform.username.select()", 25);
		window.count--;
	}

	else if (count ==0) {
		alert ("You have no more tries left!");
		document.myform.username.value = "No more tries allowed!";
		document.myform.password.value = "";
		document.myform.username.disabled = true;
		document.myform.password.disabled = true;
		return false;
	}
}

function redirect(url) {
	alert ("Login was successful!");
	window.location = url;
}

function redirectStep(url) {
	window.location = url;
}

function twoStep(){

	var t = "tries";
	if (count == 1) {
		t = "try"
		alert ("Having trouble? You have " + count + " " + t + " left.");	
		count --;
	}

	else if (count > 1) {
		alert ("Invalid combination.  You have " + count + " " + t + " left.");
		setTimeout("document.myform.smsVerifyPin.focus()", 25);
		setTimeout("document.myform.smsVerifyPin.select()", 25);
		count--;
	}

	else if(count == 0){
		alert ("Sorry, you actually can't win due to the 2-Step Verification! \n In fact, unless you somehow acquire Larry Page's phone it's futile to try.");
		redirectStep("lastpage.html");
		document.myform.smsVerifyPin.value = "No more tries allowed!";
		document.myform.smsVerifyPin.disabled = true;
		return false;
	}
}

function pagoAmigo(){
    var userName = document.myform.username.value;
	var passWord = document.myform.password.value;
	var answer = document.myform.securityQ.value;
	var valid = false;
	if ((userName.toLowerCase() == "rico@drugmoney.com") && (passWord.toLowerCase() == "zetasarethebestgang") && (answer== "49")) {
			valid = true;
			redirect("pHacked.html");
			return;
	}
	
	var t = "tries";
	if (count == 1) {
	    t = "try";
		alert("You have 1 try left. \n Hints: He recently bought the drugmoney.com domain \n PW:___arethebestgang");
		count --;
	}

	else if (count > 1) {
		alert ("Invalid username and/or password.  You have " + count + " " + t + " left.");
		document.myform.username.value = "";
		document.myform.password.value = "";
		document.myform.securityQ.value = "";
		setTimeout("document.myform.username.focus()", 25);
		setTimeout("document.myform.username.select()", 25);
		window.count--;
	}

	else if (count==0){
		alert ("You have no more tries left!");
		document.myform.username.value = "No mas!";
		document.myform.password.value = "";
		document.myform.password.value = "";
		document.myform.username.disabled = true;
		document.myform.password.disabled = true;
		return false;
	}
}
function evaluateKeyPress(e, pago)
{
	if (e.which)
		key = e.which;
	else
		key = e.keyCode;	//IE8 and earlier
	if(key == 13)
	{
		if(pago)
			pagoAmigo();
		else
			validate();	
	}
}


