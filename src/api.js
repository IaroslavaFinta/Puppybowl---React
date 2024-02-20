const API_URL = "https://fsa-puppy-bowl.herokuapp.com/api/2308-ACC-ET-WEB-PT";

export async function getPlayers() {
  try {
    const response = await fetch(`${API_URL}/players`);
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.log(error);
  }
}

export async function getPlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.log(error);
  }
}

export async function createPlayer(player) {
  try {
    const response = await fetch(`${API_URL}/players`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    return result.data.newPlayer;
  } catch (error) {
    console.log(error);
  }
}

export async function deletePlayer(playerId) {
  try {
    const response = await fetch(`${API_URL}/players/${playerId}`, {
      method: "DELETE",
    });
    const delPlayer = await response.json();
    return delPlayer;
  } catch (error) {
    console.log(error);
  }
}

export async function getTeams() {
  try {
    const response = await fetch(`${API_URL}/teams`);
    const result = await response.json();
    return result.data.teams;
  } catch (error) {
    console.log(error);
  }
}
