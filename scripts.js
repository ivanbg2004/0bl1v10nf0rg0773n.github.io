// Sample data for initial leaderboard display
let leaderboardData = [
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

// Function to add a new player to the leaderboard
function addPlayer(name, ip, top, rush, mt, df) {
    const newPlayer = { Name: name, IP: ip, TOP: top, Rush: rush, MT: mt, DF: df };
    leaderboardData.push(newPlayer);
    renderLeaderboard(); // Re-render the leaderboard with updated data
}

// Function to remove a player from the leaderboard by name
function removePlayer(name) {
    leaderboardData = leaderboardData.filter(player => player.Name !== name);
    renderLeaderboard(); // Re-render the leaderboard with updated data
}

// Function to edit a player's information on the leaderboard
function editPlayer(name, field, newValue) {
    const playerToUpdate = leaderboardData.find(player => player.Name === name);
    if (playerToUpdate) {
        playerToUpdate[field] = newValue;
        renderLeaderboard(); // Re-render the leaderboard with updated data
    } else {
        console.log(`Player '${name}' not found.`);
    }
}

// Example usage:
// addPlayer("NewPlayer", "NewIP", "NewTOP", "NewRush", "NewMT", "NewDF");
// removePlayer("EXAMPLE");
// editPlayer("0BL1V10NF0RG0773N", "Rush", "200T");

// Render leaderboard initially
renderLeaderboard();
