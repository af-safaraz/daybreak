import type { NewsItem } from "@/api/news";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";
import dayjs from "dayjs";

const NewsCard = ({ news }: { news: NewsItem | null }) => {
  return (
    <>
      <Card
        className={`min-w-[320px] h-[320px] pt-0 flex flex-col gap-4 overflow-clip ${
          !news ? "animate-pulse" : ""
        }`}
      >
        <div className="w-full aspect-video bg-gray-300">
          {news?.thumbnail && (
            <img
              className="w-full h-full object-cover"
              src={news?.thumbnail ?? ""}
              loading="lazy"
            />
          )}
        </div>
        <div className="h-full px-4 flex flex-col justify-between">
          <div>
            <CardDescription className="mb-1">
              {news?.title ? (
                "CNN Indonesia"
              ) : (
                <div className="w-1/2 h-4.5 rounded bg-gray-200"></div>
              )}
            </CardDescription>
            <CardTitle className="leading-normal line-clamp-2 hover:opacity-80">
              {news?.title ? (
                <a href={news?.link} target="blank">
                  {news?.title}
                </a>
              ) : (
                <div className="mt-1.5 space-y-1">
                  <div className="w-full h-5 rounded bg-gray-200"></div>
                  <div className="w-3/4 h-5 rounded bg-gray-200"></div>
                </div>
              )}
            </CardTitle>
          </div>
          <CardDescription className="text-xs">
            {news?.pubDate ? (
              dayjs(news?.pubDate).format("D MMM YYYY, HH:mm")
            ) : (
              <div className="w-1/3 h-4 rounded bg-gray-200"></div>
            )}
          </CardDescription>
        </div>
      </Card>
    </>
  );
};

export default NewsCard;
