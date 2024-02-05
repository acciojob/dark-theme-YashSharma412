//your code here
const swapBtn = document.getElementById("swap");
const main = document.getElementById("app");
swapBtn.addEventListener("click", swapTheme)
function swapTheme(){
	if(swapBtn.className === "button_day"){
		swapBtn.className = "button_night";
		main.className = "night";
	} else {
		swapBtn.className = "button_day";
		main.className = "day";
	}
}
