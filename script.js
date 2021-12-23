

let calculate = function (){



let element = document.getElementsByClassName('result');

let ageValue = document.getElementById("age").value;

if(ageValue >= 19 && ageValue <= 120){

let frequencyValue = document.getElementById('frequency').value;

let fitnessLvlValue = document.getElementById('fitnessLvl').value;

let weightValue = document.getElementById('weight').value;

let communityValue = document.getElementById('community').value;

// AgeValue ---
ageValue = ageValue.valueOf();

if(ageValue < 33){
	ageValue = 10 - 10/(36-19)*(ageValue - 19);
	ageValue = ageValue.toFixed(2);
	
} else {
	ageValue = 2 - 2/(120 - 36)*(ageValue - 36);
	ageValue = ageValue.toFixed(2);

}

// ageValue = ageValue + "";

// frequencyValue ---
frequencyValue = frequencyValue.valueOf();

if(frequencyValue == 1 || frequencyValue == 2 || frequencyValue == 5 || frequencyValue == 6 || frequencyValue == 7){
	frequencyValue = 0.75;
} else {
	frequencyValue = 1.15;
}

// frequencyValue = frequencyValue + "";

// fitnessLvlValue ---
fitnessLvlValue = fitnessLvlValue.valueOf();

if(fitnessLvlValue == 1){
	fitnessLvlValue = 1.3;
}else if(fitnessLvlValue == 2){
	fitnessLvlValue = 1.15;
}else {
	fitnessLvlValue = 1;
}

// fitnessLvlValue = fitnessLvlValue + "";

// weightValue ---
weightValue = weightValue.valueOf();

if(weightValue == 1){
	weightValue = 0.5;
}else if(weightValue == 2){
	weightValue = 0.75;
}else if(weightValue == 3){
	weightValue = 1;
}else if(weightValue == 4){
	weightValue = 1.15;
}else if(weightValue == 5){
	weightValue = 1.25;
}else{
	weightValue = 1.35;
}

// weightValue = weightValue + "";

// communityValue ---
communityValue = communityValue.valueOf();

if(communityValue == 0){
	communityValue = 0.75;
} else if(communityValue == 1){
	communityValue = 1.5;
}

// communityValue = communityValue + "";


let resultValue = parseFloat(ageValue) * frequencyValue * fitnessLvlValue * weightValue * communityValue;

element[0].textContent = resultValue.toFixed(2) + "";

} else {
	alert('Age must be equal to or between 19 and 120');
}

event.preventDefault();

}

let calcButtonArray = document.getElementsByClassName('calcButton');

calcButton = calcButtonArray[0];

calcButton.addEventListener('click', calculate);