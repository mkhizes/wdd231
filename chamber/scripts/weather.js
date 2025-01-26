const API_KEY = '3b6296cf505589ae0045ec15e0ca708f';
        const CHAMBER_LOCATION = 'Durban,ZA';
        
        async function fetchWeather() {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${Durban-ZA}&units=metric&appid=${3b6296cf505589ae0045ec15e0ca708f}`);
            const data = await response.json();
            document.getElementById('weather').innerHTML = `
                <h2>Weather</h2>
                <p>Current Temperature: ${data.list[0].main.temp}°C</p>
                <p>Weather: ${data.list[0].weather[0].description}</p>
                <p>3-Day Forecast:</p>
                <ul>
                    <li>Tomorrow: ${data.list[8].main.temp}°C</li>
                    <li>Day After: ${data.list[16].main.temp}°C</li>
                    <li>Third Day: ${data.list[24].main.temp}°C</li>
                </ul>`;
        },
               
const members = [
            { name: 'Tech Innovators', logo: 'tech_innovators.png', phone: '123-456-7890', address: '123 Innovation Drive, Tech City', website: 'https://www.techinnovators.com', membership: 'bronze' },
            { name: 'Eco Solutions', logo: 'eco_solutions.png', phone: '234-567-8901', address: '456 Green Way, Sustainville', website: 'https://www.ecosolutions.com', membership: 'silver' },
            { name: 'Creative Minds', logo: 'creative_minds.png', phone: '345-678-9012', address: '789 Inspiration Blvd, Creativetown', website: 'https://www.creativeminds.com', membership: 'gold' }
        ];
        
        function loadSpotlights() {
            const spotlightContainer = document.getElementById('.spotlight-container');
            const eligibleMembers = members.filter(m => m.membership === 'gold' || m.membership === 'silver');
            const selectedMembers = eligibleMembers.sort(() => 0.5 - Math.random()).slice(0, 2);
            selectedMembers.forEach(member => {
                const spotlight = document.createElement('div');
                spotlight.classList.add('spotlight');
                spotlight.innerHTML = `
                    <h3>${member.name}</h3>
                    <img src="${member.logo}" alt="${member.name}" width="100">
                    <p>Phone: ${member.phone}</p>
                    <p>Address: ${member.address}</p>
                    <a href="${member.website}">Visit Website</a>
                    <p>Membership Level: ${member.membership}</p>
                `;
                spotlightContainer.appendChild(spotlight);
            });
        }
        
        fetchWeather();
        loadSpotlights();