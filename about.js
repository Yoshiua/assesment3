console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert("The form has been submitted successfully");
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);


let duck = document.querySelector('#duckImg');

function mouseOverDuck() {

	alert("Giving the user a compliment");
}

duck.addEventListener('mouseover', mouseOverDuck);