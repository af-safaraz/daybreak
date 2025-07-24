export const fetchNews = async () => {
  try {
    const response = await fetch(
      "https://api-berita-indonesia.vercel.app/cnn/terbaru"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error("News API returned an error.");
    }

    return data;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred.";
    throw new Error(message);
  }
};
