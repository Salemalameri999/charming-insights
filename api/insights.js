export default async function handler(req, res) {
  try {
    const universeId = 2805829209;

    const response = await fetch(
      `https://games.roblox.com/v1/games?universeIds=${universeId}`
    );

    if (!response.ok) {
      return res.status(500).json({ error: "Failed to fetch Roblox data" });
    }

    const data = await response.json();
    const place = data.data[0];

    res.status(200).json({
      name: place.name,
      visits: place.visits,
      favorites: place.favoritedCount,
      likeRatio: place.likeRatio,
      playing: place.playing,
      created: place.created,
      updated: place.updated,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
