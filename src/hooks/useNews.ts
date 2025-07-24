import { useQuery } from "@tanstack/react-query";
import { fetchNews } from "@/api/news";

export const useNews = () => {
  return useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
    refetchOnWindowFocus: false,
    staleTime: 0,
    retry: 1,
  });
};
