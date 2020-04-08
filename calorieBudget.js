/* ask activity level
Men	    BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
Women	BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years 


*/

// convert pounds to kilograms

//Figure out how activity figures in. First draft assume users are male

	
function bmi() {


var weight = document.getElementById('weight').value;
var w_unit = document.getElementById('w_unit').value;
var h = document.getElementById('height').value;
var a = document.getElementById('age').value;
var activity = document.getElementById('activity').value;
var sex = document.getElementById('sex').value;
var calculate;
var w;

//change var w to var weight

//declare w leave value blank
 
 

//grab w_unit of measurement

// if w unit value is equal kg then weight equals w if not than w equals weight divided by 2.205

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