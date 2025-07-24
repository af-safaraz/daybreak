import { useQuery } from "@tanstack/react-query";
import { fetchJoke } from "@/api/joke";

export const useJoke = () => {
  return useQuery({
    queryKey: ["joke"],
    queryFn: fetchJoke,
    refetchOnWindowFocus: false,
  });
};
