var months = document.getElementsByClassName("month");
var desc = document.getElementsByTagName("h3");

// click through months
function loopmonthsdown() {

for (i=11; i>0; i--) {

if (i==1) {
	months[0].style.display="block";
	months[1].style.display="none";
}


 if (i==2){
	months[1].style.display="block";
	months[2].style.display="none";

}
 if (i==3){

	months[2].style.display="block";
	months[3].style.display="none";

}






}
}

function loopmonthsup() {

for (i=0; i< months.length; i++) {

	if (i==0) {

	months[1].style.display="block";
	months[0].style.display="none";
}

	if (i==1) {

	months[2].style.display="block";
	months[1].style.display="none";
}





}

}


 document.getElementById("left").addEventListener("click",loopmonthsdown);
document.getElementById("right").addEventListener("click",loopmonthsup);



// show description

function description (){
	document.getElementsByClassName("content").style.display="block";

}
desc.addEventListener("click", description);





