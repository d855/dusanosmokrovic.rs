const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";
const SPOTIFY_NOW_PLAYING_URL = "https://api.spotify.com/v1/me/player/currently-playing";
const CLIENT_ID = "98fcdfbbcd974241a3463f3c9f4df5c0";
const CLIENT_SECRET = "a980b4edfae3471a845c542f6c994af2";
const REFRESH_TOKEN = "AQDTzwLHTg9bdZJVEHFro9J_IjcExnEEvr_wiTx-5ttN6n1WXARUkVBB4HipX1RqrJ6Sure_JwTCv0EMiakXoW7sSDBPrJ5zBClcA0OPLovVy5cZ0KY7ROxmmLsLpB5a784";
let cachedToken = null;
async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }
  const basic = Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString("base64");
  const response = await fetch(SPOTIFY_TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({
      grant_type: "refresh_token",
      refresh_token: REFRESH_TOKEN
    })
  });
  const data = await response.json();
  if (!data.access_token) return null;
  cachedToken = {
    value: data.access_token,
    expiresAt: Date.now() + (data.expires_in - 60) * 1e3
  };
  return cachedToken.value;
}
const notPlaying = () => new Response(JSON.stringify({ isPlaying: false }), {
  status: 200,
  headers: { "Content-Type": "application/json" }
});
const GET = async () => {
  try {
    const accessToken = await getAccessToken();
    if (!accessToken) return notPlaying();
    const response = await fetch(SPOTIFY_NOW_PLAYING_URL, {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    if (response.status === 204 || response.status >= 400) return notPlaying();
    const data = await response.json();
    if (!data.item) return notPlaying();
    return new Response(
      JSON.stringify({
        isPlaying: data.is_playing,
        title: data.item.name,
        artist: data.item.artists.map((a) => a.name).join(", "),
        albumArt: data.item.album.images?.[2]?.url || data.item.album.images?.[0]?.url,
        songUrl: data.item.external_urls.spotify
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "public, s-maxage=30, stale-while-revalidate=60"
        }
      }
    );
  } catch {
    return notPlaying();
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  GET
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
