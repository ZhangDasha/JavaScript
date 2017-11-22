

window.onload = function(){
//	var table = document.createElement("table");
//	tabel.width = 300;
//	table.border = 1;
//	
//	document.body.appendChild("table");
	var table = document.getElementsByTagName("table")[0];
	alert(table.tBodies[1].rows[0].cells[1].innerHTML);
	
};
