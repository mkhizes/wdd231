const openButton = document.querySelector('#openButton');
const dialogBox = document.querySelector('#dialogBox');
const closeButton = document.querySelector('#closeButton');
const dialogBoxText = document.querySelector('#dialogBox div');

openButton1.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Non Profit Organisation have free benefit for the first 5years and 50% discount on all services.'
});

openButton2.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Bronze Membership has the following benefits: Affordable access to events and 25% discount on services of business forum.'
});

openButton3.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Silver Membership has the following benefits: Event discounts and trainings.'
});

openButton4.addEventListener('click', () => {
    dialogBox.showModal();
    dialogBoxText.innerHTML='Gold Membership has the following benefits: Free access to all events and trainings.Free access to all services of business forum. Free bookkeeping services for the first 6months.'
});


closeButton.addEventListener('click', () => {
    dialogBox.close();
});

// Set the current timestamp
document.getElementById('timestamp').value = new Date().toISOString();

// // Show modal
function showModal(id) {
   document.getElementById(id).classList.remove('hidden');
}

// Hide modal
 function hideModal(id) {
   document.getElementById(id).classList.add('hidden');
 }

 // Set the current timestamp on page load
 document.addEventListener("DOMContentLoaded", () => {
     document.getElementById('timestamp').value = new Date().toISOString();
   });
  
   // Function to show a modal
   function showModal(id) {
     const modal = document.getElementById(id);
     if (modal) {
       modal.classList.remove('hidden');
     }
   }
  
   // Function to hide a modal
   function hideModal(id) {
     const modal = document.getElementById(id);
     if (modal) {
       modal.classList.add('hidden');
     }
   }
  
   // Form validation function
   function validateForm(event) {
     const form = event.target;
    
// Get form fields
     const firstName = form.elements["first_name"].value.trim();
     const lastName = form.elements["last_name"].value.trim();
     const orgTitle = form.elements["org_title"].value.trim();
     const email = form.elements["email"].value.trim();
     const phone = form.elements["phone"].value.trim();
     const orgName = form.elements["org_name"].value.trim();
  
     // Validation conditions
     if (!firstName || !lastName || !email || !phone || !orgName) {
       alert("All required fields must be filled.");
       event.preventDefault(); // Prevent form submission
       return false;
     }
  
     // Organizational Title validation (if entered)
     const orgTitlePattern = /^[a-zA-Z\-\s]{7,}$/;
     if (orgTitle && !orgTitlePattern.test(orgTitle)) {
       alert("Organizational Title must be at least 7 characters and contain only letters, hyphens, or spaces.");
       event.preventDefault(); // Prevent form submission
       return false;
     }
  
     // Mobile phone validation
     const phonePattern = /^[0-9+\-\s]{10,15}$/;
     if (!phonePattern.test(phone)) {
       alert("Mobile Phone Number must be 10-15 digits and can include hyphens or spaces.");
       event.preventDefault(); // Prevent form submission
       return false;
     }
  
     // Email validation
     const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if (!emailPattern.test(email)) {
       alert("Please enter a valid email address.");
       event.preventDefault(); // Prevent form submission
       return false;
     }
  
     return true; // Allow submission if all checks pass
   }
  
   // Attach validation to the form submit event
   document.querySelector("form").addEventListener("submit", validateForm);
  
   // Add event listeners to modal buttons
   document.querySelectorAll('[onclick^="showModal"]').forEach(button => {
     button.addEventListener("click", (e) => {
       const modalId = e.target.getAttribute("onclick").match(/'([^']+)'/)[1];
       showModal(modalId);
     });
   });
  
   document.querySelectorAll('[onclick^="hideModal"]').forEach(button => {
     button.addEventListener("click", (e) => {
       const modalId = e.target.getAttribute("onclick").match(/'([^']+)'/)[1];
       hideModal(modalId);
     });
   });