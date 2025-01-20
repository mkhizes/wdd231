const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("article");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.

gridbutton.addEventListener("click", () => {
	// example using arrow function
	display.classList.add("grid");
	display.classList.remove("list");
});

listbutton.addEventListener("click", showList); // example using defined function

function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
// Display the copyright year and last modification date in the footer.
function displayFooterInfo() {
	const footer = document.getElementById('footer');
	const currentYear = new Date().getFullYear();
	const lastModified = document.lastModified;
  
	footer.innerHTML = `
	  <p>&copy; ${currentYear} Your Company Name. All rights reserved.</p>
	  <p>Last Modified: ${lastModified}</p>
	`;
  }
  
  displayFooterInfo();
  