export const fetchJoke = async () => {
  const res = await fetch(
    // "https://v2.invalid.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist"
    "https://v2.jokeapi.dev/joke/NonExistingCategories"
  );
  if (!res.ok) throw new Error("Failed to fetch jokes.");
  const data = await res.json();
  if (data.error) {
    throw new Error("API returned an error.");
  } else {
    if (data.type === "single") {
      return [data.joke];
    } else if (data.type === "twopart") {
      return [data.setup, data.delivery];
    }
  }
  return [];
};
