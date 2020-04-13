
function bmr() {
	
var sex = getElementById('sex').value;
var w_unit = getElementById('w_unit').value;
var w = getElementById('weight').value;
var h = getElementById('height').value; 
var a = getElementById('age').value;
var activity = getElementById('activity').value;
var calculate;



if (sex = female) {
     calculate = 447.593 + 9.247 * parseInt(w) + 3.098 * parseInt(h) - 4.330 * parseInt(a);
} else {
	 calculate = 88.362 + 13.397 * parseInt(w) + 4.799 * parseInt(h) - 5.677 * parseInt(a);

}
//document.getElementById("demo").innerHTML = calculate * activity;

document.write(Math.trunc(calculate * activity)); 
}
	

