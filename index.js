let check = document.querySelector(".check");
let number = document.querySelector(".number");
let text = document.querySelector(".text");

let mtnRegex = /^(?:(?:(?:\+?234(?:\h1)?|01)\h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/gm


check.addEventListener("click",()=>{
	if(number.value ==""){
		text.innerText = "Please Enter Your Phone Number";
		text.style.color = "#fff";
	}

	else if(number.value.match(mtnRegex)){
		text.innerText = "Congrats!it's an MTN";
		text.style.color = "rgba(4,125,9,1)";
	}
	else
		{
		text.innerText = "Oops! Your Phone Number Is Invalid";
		text.style.color = "#da3400";
		}
});

