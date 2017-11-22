/*
function xmlDOM(){
	var veision = ['MSXML2.DOMDocument6.0',
					'MSXML2.DOMDocument3.0',
					'MSXML2.DOMDoucument'];
	for(var i=0;i<veision.length;i++){
		try{
			var xmlDOM = new ActiveXObject(veision[i]);
			return xmlDOM;
		}catch(e){
			//alert(e);
		}
	}
	throw new Error("错误不支持");
}
*/


//适用于IE
//var xmlDom =xmlDOM();
//alert(xmlDom);
//
//加载xml方式： 第一种loadXML加载XML字符串，第二种load加载外部文件
//xmlDom.loadXML('<root><user>ss</user></root>');
//alert(xmlDom.xml);    //序列化XML打印字符串

/*
var xmlDom = document.implementation.createDocument('','root',null);
xmlDom.async = false;
xmlDom.onload = function(){
	alert(xmlDom.getElementsByTagName('user')[0].textContent);
	
}
xmlDom.load('deml.xml');
*/

//DOMParser类型
//适用于Google与火狐
/*
var xmlParser = new DOMParser();       //创建DOMParser对象
//alert(xmlParser);                      
var xmlStr = "<root>\n\t<user>Da<user>\n</root>";
var xmlDom = xmlParser.parseFromString(xmlStr,'text/xml');     //得到XMLDocument
//alert(xmlDom);
//alert(xmlDom.getElementsByTagName('user')[0].textContent);

//模拟XML序列化对象
var Xserializer = new XMLSerializer();
var xml = Xserializer.serializeToString(xmlDom);
var errors = xmlDom.getElementsByTagName('parsererror');
alert(errors.length);
alert(xml);
*/


//跨浏览器返回XML Dom对象
function getXMLDOM(xmlStr){
	var xmlDom = null;
	if(typeof window.DOMParser == 'undefined'){
		xmlDom = (new DOMParser).parseFromString(xmlStr,'text/xml');
	}else if(typeof window.ActiveXObject != 'undefined'){
		var veision = ['MSXML2.DOMDocument6.0',
					'MSXML2.DOMDocument3.0',
					'MSXML2.DOMDoucument'];
	    for(var i=0;i<veision.length;i++){
		try{
			var xmlDOM = new ActiveXObject(veision[i]);
			return xmlDOM;
		}catch(e){
			//alert(e);
		}
	 }
	}else{
	 	throw new Error("错误不支持");
	}
	return xmlDom;
}

var xmlStr = "<root>\n\t<user>Da<user>\n</root>";
var xmlDom = getXMLDOM(xmlStr);
alert(xmlDom);
