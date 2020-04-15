

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

    var bmr = Math.trunc(calculate * activity);
    var goal = document.getElementById('goal').value;
    var budget = Math.trunc(goal * bmr);
    var protein = Math.trunc(budget * 0.30 / 4);
    var carbs = Math.trunc(budget * 0.45 / 4);
    var fat = Math.trunc(budget * 0.25 / 9); 


	document.getElementById('bmr').innerHTML ="Your TDEE is <span id='tdee'>" + bmr + " </span>calories";	
    document.getElementById('calorie-budget').innerHTML =  "Your Budget is " + budget + " Calories";
    document.getElementById('macro').innerHTML = protein + " grams of protein <br>" + carbs + " grams of carbs <br>" + fat + " grams of fat";

}
