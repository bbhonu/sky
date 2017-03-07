var months = document.getElementsByClassName("month");
var jan= document.getElementById("january");
var feb= document.getElementById("february");
var mar= document.getElementById("march");
var apr= document.getElementById("april");
var may= document.getElementById("may");
var jun= document.getElementById("jun");
var jul= document.getElementById("jul");
var aug= document.getElementById("aug");
var sep= document.getElementById("sep");
var oct= document.getElementById("oct");
var nov= document.getElementById("nov");
var dec= document.getElementById("dec");









// function loopmonthsdown() {

// for (i=11; i>0; i--) {

// if (months[i].style.display=="block") {
// 	months[i].style.display="none";
// 	months[2].style.display="block";

// }





// }
// }

// function loopmonthsup() {

// for (i=0; i< months.length; i++) {

// if (months[i].style.display=="block") {
// 	months[i].style.display="none";
// 	months[i+1].style.display="block";

// }

// }
// }

// month navigation

function janright (){
	feb.style.display="block";
	jan.style.display="none";
}

function febleft (){
	feb.style.display="none";
	jan.style.display="block";
}

function febright (){
	feb.style.display="none";
	mar.style.display="block";
}

function marleft (){
	feb.style.display="block";
	mar.style.display="none";
}


function marright() {
	mar.style.display="none";
	apr.style.display="block";

}

function aprleft() {
	mar.style.display="block";
	apr.style.display="none";

}

function aprright() {
	apr.style.display="none";
	may.style.display="block";
	
}

function mayleft() {
	apr.style.display="block";
	may.style.display="none";
	
}

function mayright() {
	may.style.display="none";
	jun.style.display="block";
	
}

function junleft() {
	may.style.display="block";
	jun.style.display="none";
	
}

function junright() {
	jun.style.display="none";
	jul.style.display="block";
	
}

function julleft() {
	jun.style.display="block";
	jul.style.display="none";
	
}

function julright() {
	jul.style.display="none";
	aug.style.display="block";
	
}

function augleft() {
	jul.style.display="block";
	aug.style.display="none";
	
}

function augright() {
	aug.style.display="none";
	sep.style.display="block";
	
}

function sepleft() {
	aug.style.display="block";
	sep.style.display="none";
	
}

function sepright() {
	sep.style.display="none";
	oct.style.display="block";

	
}

function octleft() {
	sep.style.display="block";
	oct.style.display="none";

	
}

function octright() {
	oct.style.display="none";
	nov.style.display="block";
	
}

function novleft() {
	oct.style.display="block";
	nov.style.display="none";
	
}

function novright() {
	nov.style.display="none";
	dec.style.display="block";	
}

function decleft() {
	nov.style.display="block";
	dec.style.display="none";	
}



document.getElementById("janright").addEventListener("click",janright);
document.getElementById("febright").addEventListener("click",febright);
document.getElementById("marright").addEventListener("click",marright);
document.getElementById("aprright").addEventListener("click",aprright);
document.getElementById("mayright").addEventListener("click",mayright);
document.getElementById("junright").addEventListener("click",junright);
document.getElementById("julright").addEventListener("click",julright);
document.getElementById("augright").addEventListener("click",augright);
document.getElementById("sepright").addEventListener("click",sepright);
document.getElementById("octright").addEventListener("click",octright);
document.getElementById("novright").addEventListener("click",novright);
document.getElementById("febleft").addEventListener("click",febleft);
document.getElementById("marleft").addEventListener("click",marleft);
document.getElementById("aprleft").addEventListener("click",aprleft);
document.getElementById("mayleft").addEventListener("click",mayleft);
document.getElementById("junleft").addEventListener("click",junleft);
document.getElementById("julleft").addEventListener("click",julleft);
document.getElementById("augleft").addEventListener("click",augleft);
document.getElementById("sepleft").addEventListener("click",sepleft);
document.getElementById("octleft").addEventListener("click",octleft);
document.getElementById("novleft").addEventListener("click",novleft);
document.getElementById("decleft").addEventListener("click",decleft);














//  document.getElementById("left").addEventListener("click",loopmonthsdown);
// document.getElementById("right").addEventListener("click",loopmonthsup);



// show description
var jan34 = document.getElementById("jan-a-t");
function description (){
	var content=document.getElementById("jan-a-c");
var jana =document.getElementById("jan-a");
var img=document.getElementById("janat");


	// if(content.style.display !== 'none') {
	// 	content.style.display= 'none';

	// } else {
	// 	content.style.display='block';
	// 	content.className="transition";
	// }


	if (content.className !== 'showcontent') {
		// img.src="img/suntest.gif";
	content.className="showcontent";
	// jan34.style.fontSize="6em";
	jana.className="blackround";

	img.className="janatgo";
} else {
	content.className="content";
	// img.src="img/suntest.png";
	jana.style.backgroundColor="rgba(0,0,0,0)"




}

}

jan34.addEventListener("click", description);






