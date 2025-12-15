import { getCurrentlyPlaying, getLastPlayed } from "@/lib/spotify";

export default async function handler(req, res) {

    const current = await getCurrentlyPlaying();

    if (current && current.is_playing) {
        const track = current.item;

        return res.status(200).json({
        status: "playing",
        title: track.name,
        artists: track.artists.map(a => a.name).join(" , "),
        album: track.album.name,
        image: track.album.images[0].url,
        url: track.external_urls.spotify,
        });
    }

    const last = await getLastPlayed();

    if (!last?.items?.length) {
        return res.status(200).json({ status: "offline" });
    }

    const track = last.items[0].track;

    return res.status(200).json({
        status: "last",
        title: track.name,
        artists: track.artists.map(a => a.name).join(" , "),
        album: track.album.name,
        image: track.album.images[0].url,
        url: track.external_urls.spotify,
    });
}
