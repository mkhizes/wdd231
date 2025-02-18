
import { places } from "../data/places.mjs";
console.log(places);

document.addEventListener("DOMContentLoaded", () => {
    const showHere = document.querySelector("#allplaces");

    function displayItems(places) {
        places.forEach((place) => {
            const thecard = document.createElement("article");
            thecard.classList.add("card");

            const thephoto = document.createElement("img");
            thephoto.src = `images/${place.photo_link}`;
            thephoto.alt = place.name;
            thephoto.width = 300;
            thephoto.height = 200;

            const thetitle = document.createElement("h2");
            thetitle.innerText = place.name;

            const theaddress = document.createElement("address");
            theaddress.innerText = place.address;

            const thedescription = document.createElement("p");
            thedescription.innerText = place.description;

            const button = document.createElement("button");
            button.textContent = "Learn More";
            button.addEventListener("click", () => {
                alert(`Title: ${place.name}\nAddress: ${place.address}\nDescription: ${place.description}`);
            });

            thecard.appendChild(thetitle);
            thecard.appendChild(thephoto);
            thecard.appendChild(theaddress);
            thecard.appendChild(thedescription);
            thecard.appendChild(button);

            showHere.appendChild(thecard);
        });
    }
    
    displayItems(places);
});
function updateTimestamp() {
    let now = new Date();
    let timestamp = now.toLocaleString(); 
    document.getElementById("timestamp").textContent = timestamp;
}

updateTimestamp(); 
setInterval(updateTimestamp, 1000);
const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Non Profit Organisation have free benefit'
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Bronze Membership has the following benefits:'
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Silver Membership has the following benefits:'
});

openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Gold Membership has the following benefits:'
});


closeButton.addEventListener('click', () => {
    dialogBox.close();
});

