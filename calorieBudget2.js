

function bmr() {
	var kilograms = getElementById('kilograms').value;
    var pounds = getElementById('pounds').value;

var w = parseInt(kilograms) + parseInt(pounds)/2.025;	
 
 
 var centimeters = getElementById('centimeters').value;
 var feet = getElementById('feet').value;
 var inches = getElementById('inches').value;

 var h = parseInt(centimeters) + parseInt(feet) * 30.48 + parseInt(inches) * 2.54; 


var calculate;
var a = getElementById('age').value;
var sex = getElementById('sex').value;


if (sex > 1) {
     calculate = 447.593 + 9.247 * parseInt(w) + 3.098 * parseInt(h) - 4.330 * parseInt(a);
} else {
	 calculate = 88.362 + 13.397 * parseInt(w) + 4.799 * parseInt(h) - 5.677 * parseInt(a);

}
var activity = getElementById('activity').value;


document.write(Math.trunc(calculate * activity)); 
}
	

