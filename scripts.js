// Sample data for initial leaderboard display
const leaderboardData = [
    { Name: "0BL1V10NF0RG0773N", IP: "N/A", TOP: "71 - Elite", Rush: "150T", MT: 600.000, DF: "4.6k" },
    { Name: "EXAMPLE", IP: "EXAMPLE", TOP: "EXAMPLE", Rush: "EXAMPLE", MT: "EXAMPLE", DF: "EXAMPLE" },
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
