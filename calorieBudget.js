/* ask activity level
Men	    BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
Women	BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years 
*/

// convert pounds to kilograms

//Figure out how activity figures in. First draft assume users are male

	
function bmi() {


var weight = document.getElementById('weight').value;
var w_unit = document.getElementById('w_unit').value;
var height = document.getElementById('height').value;
var a = document.getElementById('age').value;
var activity = document.getElementById('activity').value;
var sex = document.getElementById('sex').value;
var calculate;
var w;
var feet = document.getElementById('feet').value;
var inches = document.getElementById('inches').value;
var h;



h = height + parseInt(inches) * 2.54 + parseInt(feet) * 30.48


if (w_unit < 2) {
	w = 1 * weight;
} else {
	w = weight / 2.205;
}


if (female = true) {
     calculate = 447.593 + 9.247 * parseInt(w) + 3.098 * parseInt(h) - 4.330 * parseInt(a);
} else {
	 calculate = 88.362 + 13.397 * parseInt(w) + 4.799 * parseInt(h) - 5.677 * parseInt(a);
}



	


document.write(Math.trunc(calculate * activity));
}