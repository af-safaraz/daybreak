export const fetchNews = async () => {
  const res = await fetch(
    "https://api-berita-indonesia.vercel.app/cnn/terbaru"
  );
  if (!res.ok) throw new Error("Failed to fetch news.");
  return res.json();
};
