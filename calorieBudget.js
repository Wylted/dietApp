

function bmr() {
	var sex = document.getElementById('sex').value;
	var weight_unit = document.getElementById('weight_unit').value;
    var weight = document.getElementById('weight').value;
    var w;
    var h = document.getElementById('height').value;
    var a = document.getElementById('age').value;
    var activity = document.getElementById('activity').value
	var calculate;

	if (weight_unit == "kilograms") {
        w = weight;
	} else {
		 w = weight / 2.205;
	}

	if (sex == "female") {
		calculate = 447.593 + 9.247 * w + 3.098 * parseInt(h) - 4.330 * parseInt(a);
	} else {
		calculate = 88.362 + 13.397  * w + 4.799 * parseInt(h) - 5.677 * parseInt(a);
	}

	alert(calculate * activity);
}