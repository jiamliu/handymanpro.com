// Fetch handymen using Axios call
async function fetchHandymen() {
    try {
        const response = await axios.get('http://localhost:5001/handyman');
        const handymen = response.data;

        const handymanContainer = document.getElementById('handyman-list');
        handymen.forEach(handyman => {
            const handymanBox = document.createElement('div');
            handymanBox.classList.add('handyman-box');

            const handymanContent = document.createElement('div');
            handymanContent.classList.add('handyman-content');

            const h2 = document.createElement('h2');
            h2.textContent = handyman.name;
            handymanContent.appendChild(h2);

            const address = document.createElement('p');
            address.textContent = `Address: ${handyman.address}`;
            handymanContent.appendChild(address);

            const contact = document.createElement('p');
            contact.textContent = `Contact: ${handyman.contact}`;
            handymanContent.appendChild(contact);

            const rating = document.createElement('p');
            rating.textContent = `Rating: ${handyman.rating}`;
            handymanContent.appendChild(rating);

            const bookButton = document.createElement('a');
            bookButton.textContent = 'Click here to book';
            bookButton.href = 'hconnect.html'; 
            bookButton.classList.add('book-button');

            
            bookButton.addEventListener('click', (event) => {
                event.stopPropagation(); 
            });

            handymanContent.appendChild(bookButton);

            handymanBox.addEventListener('click', () => {
                navigateToHandymanDetail(handyman._id); 
            });

            handymanBox.appendChild(handymanContent);
            handymanContainer.appendChild(handymanBox);
        });
    } catch (error) {
        console.error('Error fetching handymen:', error);
    }
}

function navigateToHandymanDetail(handymanId) {
    window.location.href = `handyman-details.html?id=${handymanId}`;
}

fetchHandymen();


