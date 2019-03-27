function rotate(){
	var oDiv = document.getElementById("box2")
	oDiv.style.transform="rotate(20deg)"
	oDiv.style.transion=
	var oDiv = document.getElementById("box3")
	oDiv.style.transform="rotate(40deg)"
	var oDiv = document.getElementById("box4")
	oDiv.style.transform="rotate(60deg)"
}
var oDiv = document.getElementById("begin")
oDiv.onclick = rotate

function back(){
	var oDiv = document.getElementById("box2")
	oDiv.style.transform="rotate(0deg)"
	var oDiv = document.getElementById("box3")
	oDiv.style.transform="rotate(0deg)"
	var oDiv = document.getElementById("box4")
	oDiv.style.transform="rotate(0deg)"
}
var oDiv = document.getElementById("back")
oDiv.onclick = back