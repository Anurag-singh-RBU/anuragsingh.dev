export default function handler(req, res) {
  const { code } = req.query;

  if (!code) {
    return res.status(400).send("No code received from Spotify");
  }

  res.status(200).send(`
    Spotify auth successful 🎉

    Code received:
    ${code}

    You can close this tab now.
  `);
}
