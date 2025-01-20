// Fetch and display member information using fetch, async/await.
async function fetchMembers() {
	try {
	  const response = await fetch('./data/members.json');
	  const members = await response.json();
	  displayMembers(members, 'grid');
	} catch (error) {
	  console.error('Error fetching members:', error);
	}
  }
  
  // Function to display members.
  function displayMembers(members, viewType) {
	const container = document.getElementById('members-container');
	container.innerHTML = ''; // Clear existing content
  
	members.forEach((member) => {
	  const memberCard = document.createElement('div');
	  memberCard.className = viewType === 'grid' ? 'member-card grid-view' : 'member-card list-view';
  
	  memberCard.innerHTML = `
		<img src="./images/${member.image}" alt="${member.name}" />
		<h3>${member.name}</h3>
		<p>${member.address}</p>
		<p>${member.phone}</p>
		<a href="${member.website}" target="_blank">Visit Website</a>
		<p>Membership Level: ${member.membershipLevel}</p>
		<p>${member.description}</p>
	  `;
	  container.appendChild(memberCard);
	});
  }
  
  // Toggle between grid and list views.
  function toggleView(viewType) {
	fetchMembers().then((members) => {
	  displayMembers(members, viewType);
	});
  }
  
  // Event listeners for toggling views.
  document.getElementById('toggle-grid').addEventListener('click', () => toggleView('grid'));
  document.getElementById('toggle-list').addEventListener('click', () => toggleView('list'));
  
  // Initialize the page.
  fetchMembers();
  
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
  