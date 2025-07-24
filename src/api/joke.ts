export const fetchJoke = async (): Promise<string[]> => {
  try {
    const response = await fetch(
      "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,racist,sexist"
    );

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    if (data.error) {
      throw new Error("Joke API returned an error.");
    }

    if (data.type === "single") {
      return [data.joke];
    } else if (data.type === "twopart") {
      return [data.setup, data.delivery];
    } else {
      throw new Error("Unexpected joke format.");
    }
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred.";
    throw new Error(message);
  }
};
