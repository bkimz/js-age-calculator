var ageYears = prompt("How old are you now (in years)?");
var yearBorn = 2017 - ageYears;
var leapYears = ageYears / 4;
var ageDays = (ageYears * 365) + leapYears;

alert("You've been alive for " + ageDays + " days");
