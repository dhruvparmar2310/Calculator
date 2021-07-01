function display(n){
	/*document.getElementById("ans").innerHTML = 
								document.getElementById("ans").innerHTML +7;
	*/
	a = document.getElementById("ans");
	a.innerHTML = a.innerHTML + n;
}

function calc(){
	a = document.getElementById("ans");
	newValue = a.innerHTML;

	if(tempOp == "+"){
		a.innerHTML = parseInt(tempValue) + parseInt(newValue);
	}
	else if(tempOp == "-"){
		a.innerHTML = parseInt(tempValue) - parseInt(newValue);
	}
	else if(tempOp == "x"){
		a.innerHTML = parseInt(tempValue) * parseInt(newValue);
	}
	else if(tempOp == "/"){
		a.innerHTML = parseInt(tempValue) / parseInt(newValue);
	}
}

function ce(){
	document.getElementById("ans").innerHTML = "";
}

function de(n){ 
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = tempValue.substring(0,tempValue.length-1);
}

function op(o){
	tempValue = document.getElementById("ans").innerHTML;
	document.getElementById("ans").innerHTML = "";
	tempOp = o;
}

function dot(){
	document.getElementById("ans").innerHTML = document.getElementById("ans").innerHTML + '.';	
}