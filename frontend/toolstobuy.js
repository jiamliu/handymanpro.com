// Fetch tools using Axios call
async function fetchTools() {
    try {
        const response = await axios.get('http://localhost:5001/tools');
        const tools = response.data;

        const toolsContainer = document.getElementById('tools-list');
        tools.forEach(tool => {
            const toolBox = document.createElement('div');
            toolBox.classList.add('tools-box');

            const toolImage = document.createElement('div');
            toolImage.classList.add('tools-image');
            const img = document.createElement('img');
            img.src = tool.image;
            img.alt = tool.tools;
            toolImage.appendChild(img);

            const toolContent = document.createElement('div');
            toolContent.classList.add('tools-content');
            const h2 = document.createElement('h2');
            h2.textContent = tool.tools; 
            toolContent.appendChild(h2);

            toolBox.addEventListener('click', () => {
                navigateToToolDetail(tool._id); 
            });

            toolBox.appendChild(toolImage); 
            toolBox.appendChild(toolContent); 
            toolsContainer.appendChild(toolBox);
        });
    } catch (error) {
        console.error('Error fetching tools:', error);
    }
}

function navigateToToolDetail(toolId) {
    window.location.href = `tool-details.html?id=${toolId}`;
}

fetchTools();

