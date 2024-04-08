// Sample data for initial leaderboard display
const leaderboardData = [
    { Name: "Player1", IP: "192.168.1.1", TOP: 10, Rush: 500, MT: 10000, DF: 750 },
    { Name: "Player2", IP: "192.168.1.2", TOP: 8, Rush: 600, MT: 12000, DF: 800 },
    { Name: "Player3", IP: "192.168.1.3", TOP: 12, Rush: 450, MT: 9500, DF: 700 }
];

// Function to render leaderboard
function renderLeaderboard() {
    const tbody = document.querySelector("#leaderboard-table tbody");
    tbody.innerHTML = ""; // Clear existing rows

    leaderboardData.forEach(player => {
        const row = document.createElement("tr");
        Object.values(player).forEach(value => {
            const cell = document.createElement("td");
            cell.textContent = value;
            row.appendChild(cell);
        });
        tbody.appendChild(row);
    });
}

// Initial rendering of leaderboard
renderLeaderboard();
