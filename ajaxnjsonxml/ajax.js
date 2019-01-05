function loadPage(file)
{
	var xmlHttp;
	if(window.XMLHttRequest)
	{
		//Instansiasi untuk IE7+, Firefok, Chrome, Opera, safari
		xmlHttp = new XMLHttRequest();
	}
	else
	{
		//instansiasi untuk IE5, IE6
		xmlHttp = new ActiveXobject("Microsoft.XMLHTTP");
	}
	XMLhttp.onreadystatechange = function();
	{
		if(xmlHttp.readyState==4 && xmlHttp.status==200)
		{
			document.getElementById("page").innerHTML = xmlHttp.responseText;
		}
	}
	
	xmlHttp.open("Get",file,true);
	xmlHttp.send("");
}

function loadXML(file)
{
	var xmlHttp;
	if(window.XMLHttRequest)
	{
		//Instansiasi untuk IE7+, Firefok, Chrome, Opera, safari
		xmlHttp = new XMLHttRequest();
	}
	else
	{
		//instansiasi untuk IE5, IE6
		xmlHttp = new ActiveXobject("Microsoft.XMLHTTP");
	}
	XMLhttp.onreadystatechange = function();
	{
		if(xmlHttp.readyState==4 && xmlHttp.status==200)
		{
			var xml = xmlHttp.responseXML;
			buku = xml.documentElement.getElementByTagName("buku");
			judul = buku[0].getElementByTagName("judul")[0].childNodes[0].nodeValue;
			document.getElementById("katalog").innerHTML = judul;
		}
	}
	
	xmlHttp.open("Get",file,true);
	xmlHttp.send("");
}