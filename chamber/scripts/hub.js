 scripts/hub.js


import { fetchPigData } from "./pigData.js";


document.querySelector(".menu-toggle").addEventListener("click", () => {
    document.querySelector(".nav-links").classList.toggle("active");
});


async function loadPigTips() {
    try {
        const data = await fetchPigData(); 
        displayPigTips(data);
    } catch (error) {
        console.error("Error loading pig farming data:", error);
    }
}


function displayPigTips(pigTips) {
    const container = document.querySelector(".categories");
    container.innerHTML = ""; 
    pigTips.forEach(tip => {
        const tipElement = document.createElement("div");
        tipElement.classList.add("category");
        tipElement.innerHTML = `
            <h2>${tip.title}</h2>
            <p>${tip.description}</p>
            <button class="view-details" data-id="${tip.id}">View Details</button>
        `;
        container.appendChild(tipElement);
    });
    setupEventListeners();
}


function setupEventListeners() {
    document.querySelectorAll(".view-details").forEach(button => {
        button.addEventListener("click", event => {
            const id = event.target.getAttribute("data-id");
            openModal(id);
        });
    });
}


function openModal(id) {
    const pigTips = JSON.parse(localStorage.getItem("pigTips")) || [];
    const tip = pigTips.find(t => t.id === parseInt(id));
    if (tip) {
        document.querySelector(".modal-content").innerHTML = `
            <h2>${tip.title}</h2>
            <p>${tip.details}</p>
            <button id="close-modal">Close</button>
        `;
        document.querySelector(".modal").style.display = "block";
        document.querySelector("#close-modal").addEventListener("click", () => {
            document.querySelector(".modal").style.display = "none";
        });
    }
}


async function saveDataToLocal() {
    try {
        const pigTips = await fetchPigData();
        localStorage.setItem("pigTips", JSON.stringify(pigTips));
    } catch (error) {
        console.error("Failed to save data locally:", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    loadPigTips();
    saveDataToLocal();
});
function updateTimestamp() {
    let now = new Date();
    let timestamp = now.toLocaleString(); 
    document.getElementById("timestamp").textContent = timestamp;
}

updateTimestamp(); 
setInterval(updateTimestamp, 1000);