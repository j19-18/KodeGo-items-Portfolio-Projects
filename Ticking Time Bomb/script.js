var Timer;
var TotalSeconds;


function CreateTimer(TimerID, Time) {
	Timer = document.getElementById(TimerID);
	TotalSeconds = Time;
	UpdateTimer()
	window.setTimeout("Tick()", 1000);
}

function Tick() {
	TotalSeconds -= 1;
	if(TotalSeconds >= 0 && CheckCode())
	{
		UpdateTimer()
		window.setTimeout("Tick()", 1000);
	}
	else{
	
	}
	
	if(TotalSeconds == 0){
		document.getElementById("bomb").src = "explosion.png";
		document.getElementById("startBtn").style.display = "none";
	}
}

function UpdateTimer() {
	Timer.innerHTML = TotalSeconds;
}

function CheckCode(){
	var x = document.getElementById('code1').value;
	var y = document.getElementById('code2').value;
	var z = document.getElementById('code3').value;
	var c1 = 3; //First code
	var c2 = 2; //Second code
	var c3 = 6; //Third code
	if( x == c1 && y == c2 && z == c3)
	{
		document.getElementById("startBtn").style.display = "none";
		alert("You've successfully detonated the bomb. Good job!");
		return false;
	}
		
	else return true;
	
}