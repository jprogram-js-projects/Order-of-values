var x1 = document.getElementById('x1').innerHTML;
var x2 = document.getElementById('x2').innerHTML;
var x3 = document.getElementById('x3').innerHTML;
var x4 = document.getElementById('x4').innerHTML;

var btn = document.getElementById('btn');

function changeButton(){
	btn.innerHTML = "Return";
	btn.setAttribute("onclick","returnValues();");
}

function returnValues(){
	document.getElementById('x1').innerHTML = x1;
	document.getElementById('x2').innerHTML = x2;
	document.getElementById('x3').innerHTML = x3;
	document.getElementById('x4').innerHTML = x4;

	btn.innerHTML = "Result";
	btn.setAttribute("onclick","showResult();");	
}

function showResult(){
	var result = "Fiat" + 147;

	document.getElementById('x1').innerHTML = 'x = '+ result;
  //-----------------------------------------------------------------
	result = "Fiat" + 1 + 4 + 7;

	document.getElementById('x2').innerHTML = 'x = '+ result;
  //-----------------------------------------------------------------
	result = 147 + "Fiat";

	document.getElementById('x3').innerHTML = 'x = '+ result;
  //-----------------------------------------------------------------
	result = 1 + 4 + 7 + "Fiat";
  
	document.getElementById('x4').innerHTML = 'x = '+ result;
  //-----------------------------------------------------------------
	changeButton();
}