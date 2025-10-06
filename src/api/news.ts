export type NewsItem = {
  title: string;
  thumbnail: string;
  link: string;
  pubDate: string;
  source: string;
};

type ApiResponse = {
  messages?: string;
  total?: number;
  data: ApiNewsItem[];
};

type ApiNewsItem = {
  title: string;
  link: string;
  isoDate: string;
  image: {
    small: string;
    large: string;
  };
};

export const fetchNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await fetch("/api/news");

    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }

    const data: ApiResponse = await response.json();

    if (!data?.data) {
      throw new Error("News API returned an invalid response.");
    }

    const normalized: NewsItem[] = data.data.map((post) => ({
      title: post.title,
      thumbnail: post.image?.small ?? post.image?.large ?? "",
      link: post.link,
      pubDate: post.isoDate,
      source: "CNN Indonesia",
    }));

    return normalized;
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "Unknown error occurred.";
    throw new Error(message);
  }
};
