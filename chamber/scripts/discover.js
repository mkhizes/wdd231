import { places } from "../data/places.mjs";
console.log(places);

document.addEventListener("DOMContentLoaded", () => {
   const buttons = document.querySelectorAll(".card button");
    
   buttons.forEach(button => {
       button.addEventListener("click", (event) => {
           const card = event.target.closest(".card");
           const title = card.querySelector("h2").textContent;
           const address = card.querySelector("address").textContent;
           const description = card.querySelector("p").textContent;
            
           display(`Title: ${title}\nAddress: ${address}\nDescription: ${description}`);
       });
   });
});
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        const button = card.querySelector("button");
        if (button) {
            button.textContent = "Learn More";
            button.addEventListener("click", function () {
                alert(`You clicked on card ${index + 1}`);
            });
        }
    });
});
