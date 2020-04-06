/* ask activity level
Men	    BMR = 88.362 + (13.397 x weight in kg) + (4.799 x height in cm) – (5.677 x age in years)
Women	BMR = 447.593 + (9.247 x weight in kg) + (3.098 x height in cm) – (4.330 x age in years 


*/

// convert pounds to kilograms

//Figure out how activity figures in. First draft assume users are male

	
function bmi() {


var w = document.getElementById('weight').value;
var h = document.getElementById('height').value;
var a = document.getElementById('age').value;
var activity = document.getElementById('activity').value;


var calculate = 88.362 + 13.397 * parseInt(w) + 4.799 * parseInt(h) - 5.677 * parseInt(a);

	


document.write(calculate * activity);
}