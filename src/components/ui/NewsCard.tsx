import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNews } from "@/hooks/useNews";
import dayjs from "dayjs";

const NewsCard = () => {
  const { data, isLoading, error } = useNews();

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news.</p>;

  return (
    <>
      {data.data.posts.slice(0, 5).map((news: any) => (
        <Card className="min-w-[320px] h-[320px] pt-0 flex flex-col gap-4 overflow-clip">
          <img
            className="w-full aspect-video bg-gray-300 object-cover"
            src={news.thumbnail}
            alt="News Image"
          />
          <div className="h-full px-4 flex flex-col justify-between">
            <div>
              <CardDescription className="mb-1">CNN Indonesia</CardDescription>
              <CardTitle className="leading-normal line-clamp-2">
                <a href={news.link} target="blank">
                  {news.title}
                </a>
              </CardTitle>
            </div>
            <CardDescription className="text-xs">
              {dayjs(news.pubDate).format("D MMM YYYY, HH:mm")}
            </CardDescription>
          </div>
        </Card>
      ))}
    </>
  );
};

export default NewsCard;
