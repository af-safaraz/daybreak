import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";

type NewsItem = {
  title: string;
  thumbnail: string;
  link: string;
  pubDate: string;
};

const NewsCard = ({ news }: { news: NewsItem }) => {
  return (
    <>
      <Card className="min-w-[320px] h-[320px] pt-0 flex flex-col gap-4 overflow-clip">
        <img
          className="w-full aspect-video bg-gray-300 object-cover"
          src={news.thumbnail}
          alt="News Thumbnail"
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
    </>
  );
};

export default NewsCard;
