function startTime() {
	var today = new Date();
	var y = today.getFullYear();
	var l = ["January","February","March","April","May","June","July","August","September","October","November","December"];
	var d = today.getDate();
	var x = today.getHours();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	var n = today.getMilliseconds();
	x = checkMeridian(h);
	h = checkbigTime(h);
	m = checkTime(m);
	s = checkTime(s);
	document.getElementById('time').innerHTML =
	l [today.getMonth()] + "&nbsp" + d + "," + "&nbsp" + y + "<br>" + h + ":" + m + ":" + s + "&nbsp;" + x + ".m." ;
	var t = setTimeout(startTime, 1);
}
function checkTime(i) {
	if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
	return i;
}
function checkbigTime(i) {
	if (i > 12) {i = i - "12"}; 
	return i;
}
function checkMeridian(i) {
	if (i > 12) {i = "p"}; 
	if (i < 12) {i = "a"}; 
	return i;
}
