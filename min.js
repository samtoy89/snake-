function f1(){
	var p1v1=10,p1v2=12,p1v3=14,p1v4=45;
	var p2v1=20,p2v2=15,p2v3=24,p2v4=0;
	var p3v1=22,p3v2=60,p3v3=0,p3v4=0;
	var p4v1=28,p4v2=0,p4v3=0,p4v4=0;
	if((document.getElementById("p").value == "p1") && (document.getElementById("v").value == "v1"))
		{document.getElementById("sterling").innerHTML = p1v1; document.getElementById("euro").innerHTML = (p1v1 / 2 * 3);}
	else if((document.getElementById("p").value == "p1") && (document.getElementById("v").value == "v2"))
		{document.getElementById("sterling").innerHTML = p1v2; document.getElementById("euro").innerHTML = (p1v2 / 2 * 3);}
	else if((document.getElementById("p").value == "p1") && (document.getElementById("v").value == "v3"))
		{document.getElementById("sterling").innerHTML = p1v3; document.getElementById("euro").innerHTML = (p1v3 / 2 * 3);}
	else if((document.getElementById("p").value == "p1") && (document.getElementById("v").value == "v4"))
		{document.getElementById("sterling").innerHTML = p1v4; document.getElementById("euro").innerHTML = (p1v4 / 2 * 3);}
		
	else if((document.getElementById("p").value == "p2") && (document.getElementById("v").value == "v1"))
		{document.getElementById("sterling").innerHTML = p2v1; document.getElementById("euro").innerHTML = (p2v1 / 2 * 3);}
	else if((document.getElementById("p").value == "p2") && (document.getElementById("v").value == "v2"))
		{document.getElementById("sterling").innerHTML = p2v2; document.getElementById("euro").innerHTML = (p2v2 / 2 * 3);}
	else if((document.getElementById("p").value == "p2") && (document.getElementById("v").value == "v3"))
		{document.getElementById("sterling").innerHTML = p2v3; document.getElementById("euro").innerHTML = (p2v3 / 2 * 3);}
	else if((document.getElementById("p").value == "p2") && (document.getElementById("v").value == "v4"))
		{document.getElementById("sterling").innerHTML = p2v4; document.getElementById("euro").innerHTML = (p2v4 / 2 * 3);}
		
	else if((document.getElementById("p").value == "p3") && (document.getElementById("v").value == "v1"))
		{document.getElementById("sterling").innerHTML = p3v1; document.getElementById("euro").innerHTML = (p3v1 / 2 * 3);}
	else if((document.getElementById("p").value == "p3") && (document.getElementById("v").value == "v2"))
		{document.getElementById("sterling").innerHTML = p3v2; document.getElementById("euro").innerHTML = (p3v2 / 2 * 3);}
	else if((document.getElementById("p").value == "p3") && (document.getElementById("v").value == "v3"))
		{document.getElementById("sterling").innerHTML = p3v3; document.getElementById("euro").innerHTML = (p3v3 / 2 * 3);}
	else if((document.getElementById("p").value == "p3") && (document.getElementById("v").value == "v4"))
		{document.getElementById("sterling").innerHTML = p3v4; document.getElementById("euro").innerHTML = (p3v4 / 2 * 3);}

	else if((document.getElementById("p").value == "p4") && (document.getElementById("v").value == "v1"))
		{document.getElementById("sterling").innerHTML = p4v1; document.getElementById("euro").innerHTML = (p4v1 / 2 * 3);}
	else if((document.getElementById("p").value == "p4") && (document.getElementById("v").value == "v2"))
		{document.getElementById("sterling").innerHTML = p4v2; document.getElementById("euro").innerHTML = (p4v2 / 2 * 3);}
	else if((document.getElementById("p").value == "p4") && (document.getElementById("v").value == "v3"))
		{document.getElementById("sterling").innerHTML = p4v3; document.getElementById("euro").innerHTML = (p4v3 / 2 * 3);}
	else if((document.getElementById("p").value == "p4") && (document.getElementById("v").value == "v4"))
		{document.getElementById("sterling").innerHTML = p4v4; document.getElementById("euro").innerHTML = (p4v4 / 2 * 3);}	
		
	
	else document.getElementById("sterling").innerHTML = 0;
}
/*function product() {
    var x = document.getElementById("mySelect").value;
    document.getElementById("demo").innerHTML = x;
}
function verity() {
    var x = document.getElementById("mySelect1").value;
    document.getElementById("demo1").innerHTML = x;
}*/
</script>
