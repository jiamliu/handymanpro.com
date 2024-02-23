//Fetch issues using Axios call
async function fetchIssues() {
    try {
        const response = await axios.get('http://localhost:5001/problemandsolution');
        const issues = response.data;

        const issuesContainer = document.getElementById('issues-list');
        issues.forEach(issue => {
            const issueBox = document.createElement('div');
            issueBox.classList.add('issue-box');

            const issueImage = document.createElement('div');
            issueImage.classList.add('issue-image');
            const img = document.createElement('img');
            img.src = issue.image;
            img.alt = issue.name;
            issueImage.appendChild(img);

            const issueContent = document.createElement('div');
            issueContent.classList.add('issue-content');
            const h2 = document.createElement('h2');
            h2.textContent = issue.name;
            issueContent.appendChild(h2);

            issueBox.addEventListener('click', () => {
                navigateToIssueDetail(issue._id); 
            });

            issueBox.appendChild(issueImage);
            issueBox.appendChild(issueContent);
            issuesContainer.appendChild(issueBox);
        });
    } catch (error) {
        console.error('Error fetching issues:', error);
    }
}

function navigateToIssueDetail(issueId) {
    window.location.href = `issue-details.html?id=${issueId}`;
}

fetchIssues();

