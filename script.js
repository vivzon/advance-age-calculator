function calculateAge() {
	var birthdate = new Date(document.getElementById("birthdate").value);
	var today = new Date();
	var age = today.getFullYear() - birthdate.getFullYear();
	var month = today.getMonth() - birthdate.getMonth();
	if (month < 0 || (month === 0 && today.getDate() < birthdate.getDate())) {
		age--;
		month += 12;
	}
	var days = Math.floor((today.getTime() - birthdate.getTime()) / (1000 * 60 * 60 * 24));
	var hours = Math.floor((today.getTime() - birthdate.getTime()) / (1000 * 60 * 60));
	var minutes = Math.floor((today.getTime() - birthdate.getTime()) / (1000 * 60));
	var seconds = Math.floor((today.getTime() - birthdate.getTime()) / 1000);

	document.getElementById("result").innerHTML = "Your age is " + age + " years, " + month + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, and " + seconds + " seconds.";
}
