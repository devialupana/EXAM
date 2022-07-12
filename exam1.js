function exam(){
	var u=document.getElementById("un").value;
	var mail=document.getElementById("em").value;
	var ph=document.getElementById("mn").value;
	var PT=document.getElementById("pt").value;
	var userreg=/^(F|f)[a-zA-Z]+$/;
	var mailreg =/^[A-Za-z0-9_%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,6}$/;
	var ph1=/^(977)\d{7}$/;
	var ph2=/^\d{4}-\d{4}-\d{4}$/;
	var PT1=/^(SBIN)[0-9]{7}$/;
	if(u.length<4 || u.length>9 || !userreg.test(u)){
		document.getElementById("un").style.border="5px solid red";
		document.getElementById("valid").style.visibility="visible";
		setTimeout(()=>{document.getElementById('valid').style.display="none";
		document.getElementById("un").style.border="1px solid black";},2000);
		return false;
	}
	if(!mailreg.test(mail)){
		document.getElementById("em").style.border="5px solid red";
		document.getElementById("m1").style.visibility="visible";
		setTimeout(()=>{document.getElementById('m1').style.display="none";
		document.getElementById("em").style.border="1px solid black";},2000)
		return false;
	}
	if(!ph1.test(ph) && !ph2.test(ph))
	{
		document.getElementById("mn").style.border="5px solid red";
		document.getElementById("mn11").style.visibility="visible";
		setTimeout(()=>{document.getElementById('mn11').style.display="none";
		document.getElementById("mn").style.border="1px solid black";},2000)
		return false;
	}
	if(!PT1.test(PT)){
		document.getElementById("pt").style.border="5px solid red";
		document.getElementById("pt11").style.visibility="visible";
		setTimeout(()=>{document.getElementById('pt11').style.display="none";
		document.getElementById("pt").style.border="1px solid black";},2000)
		return false;
	}
}

function UpperCase(name){
	name.value=name.toUpperCase();




}