import { useQuery } from "@tanstack/react-query";
import { fetchNews, type NewsItem } from "@/api/news";

export const useNews = () => {
  return useQuery<NewsItem[]>({
    queryKey: ["news"],
    queryFn: fetchNews,
    refetchOnWindowFocus: false,
    staleTime: 0,
    retry: 1,
  });
};
