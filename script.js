// Candidate List
const candidates = [
    "Akshat Jhalani",
    "Ishika Sharma",
    "Rohan Mehra",
    "Diya Kapoor",
    "Ashutosh Chaturvedi",
    "Simran Kaur",
    "Aditya Roy",
    "Neha Gupta",
    "Vikram Rathore",
    "Ananya Joshi"
];

// Store votes
let votes = JSON.parse(localStorage.getItem('votes')) || {};

// Display Candidates
if (document.getElementById('candidateList')) {
    const candidateList = document.getElementById('candidateList');
    candidates.forEach(candidate => {
        candidateList.innerHTML += `
            <label>
                <input type="radio" name="vote" value="${candidate}"> ${candidate}
            </label>
        `;
    });
}

// Submit Vote
function submitVote() {
    const selectedCandidate = document.querySelector('input[name="vote"]:checked');
    if (selectedCandidate) {
        const candidate = selectedCandidate.value;
        votes[candidate] = (votes[candidate] || 0) + 1;
        localStorage.setItem('votes', JSON.stringify(votes));

        document.getElementById('result').textContent = `✅ Thank you for voting for ${candidate}!`;
    } else {
        alert("⚠️ Please select a candidate before submitting your vote.");
    }
}

// Display Results on Dashboard
if (document.getElementById('voteResults')) {
    const voteResults = document.getElementById('voteResults');
    voteResults.innerHTML = '<h2>Live Results:</h2>';
    candidates.forEach(candidate => {
        voteResults.innerHTML += `
            <p>${candidate}: <strong>${votes[candidate] || 0} votes</strong></p>
        `;
    });
}
