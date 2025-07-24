import WidgetContainer from "../layouts/WidgetContainer";
import NewsCard from "../ui/NewsCard";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useNews } from "@/hooks/useNews";
import { useState, useRef } from "react";

const NewsWidget = () => {
  const { data: allPosts, isLoading, isFetching, error, refetch } = useNews();
  const [visibleCount, setVisibleCount] = useState(10);
  const newsContainerRef = useRef<HTMLDivElement | null>(null);

  const visiblePosts = allPosts?.data?.posts?.slice(0, visibleCount) ?? [];

  const scroll = (direction: "left" | "right") => {
    if (newsContainerRef.current) {
      const containerWidth = newsContainerRef.current.offsetWidth * 0.8;
      newsContainerRef.current.scrollBy({
        left: direction === "left" ? -containerWidth : containerWidth,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <WidgetContainer title="News">
        {error ? (
          <h5 className="font-normal">
            {error.message
              ? `Sorry we are having trouble fetching news. Error details: ${error.message}`
              : "An error occurred while fetching news."}
          </h5>
        ) : (
          <div className="relative">
            <div
              className="flex flex-nowrap overflow-x-auto gap-4 scroll-smooth"
              ref={newsContainerRef}
            >
              {isLoading
                ? Array.from({ length: 5 }).map((_, i) => (
                    <NewsCard key={i} news={null} />
                  ))
                : visiblePosts.map((news: any, index: number) => (
                    <NewsCard key={index} news={news} />
                  ))}
              {visibleCount < (allPosts?.data?.posts?.length ?? 0) && (
                <div className="min-w-[200px] h-[320px] flex justify-center items-center">
                  <Button
                    onClick={() => setVisibleCount((prev) => prev + 10)}
                    variant="outline"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 backdrop-blur-xs mask-l-from-50% bg-linear-to-l from-white from-20% to-transparent" />
          </div>
        )}
        <div className="mt-4 flex gap-2 justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                disabled={isFetching}
                variant="secondary"
                size="icon"
                className="mr-4 rounded-full"
                onClick={() => {
                  refetch();
                }}
              >
                <ArrowPathIcon className={isFetching ? "animate-spin" : ""} />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p className="text-xs">Refresh News</p>
            </TooltipContent>
          </Tooltip>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("left")}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="rounded-full"
            onClick={() => scroll("right")}
          >
            <ChevronRightIcon />
          </Button>
        </div>
      </WidgetContainer>
    </>
  );
};

export default NewsWidget;
