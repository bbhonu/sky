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







// show description

function description (contentid,titleid){
	var content=document.getElementById(contentid);
	var title=document.getElementById(titleid);
	if (content.className !== 'showcontent') {
	content.className="showcontent";
	title.className="activesection";


} else {
	content.className="content";
	title.className="title"




}

}



// january show content 
	
	document.getElementById("jan-a-t").addEventListener("click", function(){
	description("jan-a-c","jan-a-t")}
	);

	document.getElementById("jan-b-t").addEventListener("click", function(){
	description("jan-b-c","jan-b-t")}
	);

	document.getElementById("jan-c-t").addEventListener("click", function(){
	description("jan-c-c","jan-c-t")}
	);

	document.getElementById("jan-d-t").addEventListener("click", function(){
	description("jan-d-c","jan-d-t")}
	);

	document.getElementById("jan-e-t").addEventListener("click", function(){
	description("jan-e-c","jan-e-t")}
	);

// february show content

	document.getElementById("feb-a-t").addEventListener("click", function(){
	description("feb-a-c","feb-a-t")}
	);

	document.getElementById("feb-b-t").addEventListener("click", function(){
	description("feb-b-c","feb-b-t")}
	);


// march show content 


	document.getElementById("mar-a-t").addEventListener("click", function(){
	description("mar-a-c","mar-a-t")}
	);


	document.getElementById("mar-b-t").addEventListener("click", function(){
	description("mar-b-c","mar-b-t")}
	);

	document.getElementById("mar-c-t").addEventListener("click", function(){
	description("mar-c-c","mar-c-t")}
	);

// april show content 


	document.getElementById("apr-a-t").addEventListener("click", function(){
	description("apr-a-c","apr-a-t")}
	);


	document.getElementById("apr-b-t").addEventListener("click", function(){
	description("apr-b-c","apr-b-t")}
	);

	document.getElementById("apr-c-t").addEventListener("click", function(){
	description("apr-c-c","apr-c-t")}
	);

	document.getElementById("apr-d-t").addEventListener("click", function(){
	description("apr-d-c","apr-d-t")}
	);

	document.getElementById("apr-e-t").addEventListener("click", function(){
	description("apr-e-c","apr-e-t")}
	);

// may show content 


	document.getElementById("may-a-t").addEventListener("click", function(){
	description("may-a-c","may-a-t")}
	);

	document.getElementById("may-b-t").addEventListener("click", function(){
	description("may-b-c","may-b-t")}
	);

	document.getElementById("may-c-t").addEventListener("click", function(){
	description("may-c-c","may-c-t")}
	);

// june show content

	document.getElementById("jun-a-t").addEventListener("click", function(){
	description("jun-a-c","jun-a-t")}
	);

	document.getElementById("jun-b-t").addEventListener("click", function(){
	description("jun-b-c","jun-b-t")}
	);


	document.getElementById("jun-c-t").addEventListener("click", function(){
	description("jun-c-c","jun-c-t")}
	);

	document.getElementById("jun-d-t").addEventListener("click", function(){
	description("jun-d-c","jun-d-t")}
	);


	document.getElementById("jun-e-t").addEventListener("click", function(){
	description("jun-e-c","jun-e-t")}
	);

//julyshowcontent 

	document.getElementById("jul-a-t").addEventListener("click", function(){
	description("jul-a-c","jul-a-t")}
	);

	document.getElementById("jul-b-t").addEventListener("click", function(){
	description("jul-b-c","jul-b-t")}
	);

	document.getElementById("jul-c-t").addEventListener("click", function(){
	description("jul-c-c","jul-c-t")}
	);





// august show content


	document.getElementById("aug-a-t").addEventListener("click", function(){
	description("aug-a-c","aug-a-t")}
	);

	document.getElementById("aug-b-t").addEventListener("click", function(){
	description("aug-b-c","aug-b-t")}
	);

	document.getElementById("aug-c-t").addEventListener("click", function(){
	description("aug-c-c","aug-c-t")}
	);

// september show content 


	document.getElementById("sep-a-t").addEventListener("click", function(){
	description("sep-a-c","sep-a-t")}
	);

	document.getElementById("sep-b-t").addEventListener("click", function(){
	description("sep-b-c","sep-b-t")}
	);

	document.getElementById("sep-c-t").addEventListener("click", function(){
	description("sep-c-c","sep-c-t")}
	);

	document.getElementById("sep-d-t").addEventListener("click", function(){
	description("sep-d-c","sep-d-t")}
	);

// october show content

	document.getElementById("oct-a-t").addEventListener("click", function(){
	description("oct-a-c","oct-a-t")}
	);


	document.getElementById("oct-b-t").addEventListener("click", function(){
	description("oct-b-c","oct-b-t")}
	);

	document.getElementById("oct-c-t").addEventListener("click", function(){
	description("oct-c-c","oct-c-t")}
	);

// november show content


	document.getElementById("nov-a-t").addEventListener("click", function(){
	description("nov-a-c","nov-a-t")}
	);


	document.getElementById("nov-b-t").addEventListener("click", function(){
	description("nov-b-c","nov-b-t")}
	);


	document.getElementById("nov-c-t").addEventListener("click", function(){
	description("nov-c-c","nov-c-t")}
	);


	document.getElementById("nov-d-t").addEventListener("click", function(){
	description("nov-d-c","nov-d-t")}
	);


	document.getElementById("nov-e-t").addEventListener("click", function(){
	description("nov-e-c","nov-e-t")}
	);

// december show content

	document.getElementById("dec-a-t").addEventListener("click", function(){
	description("dec-a-c","dec-a-t")}
	);

	document.getElementById("dec-b-t").addEventListener("click", function(){
	description("dec-b-c","dec-b-t")}
	);

	document.getElementById("dec-c-t").addEventListener("click", function(){
	description("dec-c-c","dec-c-t")}
	);

	document.getElementById("dec-d-t").addEventListener("click", function(){
	description("dec-d-c","dec-d-t")}
	);






