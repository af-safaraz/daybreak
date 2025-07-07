import WidgetContainer from "../layouts/WidgetContainer";
import NewsCard from "../ui/NewsCard";
import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { useNews } from "@/hooks/useNews";

const NewsWidget = () => {
  const { data, isLoading, error, refetch } = useNews();

  if (isLoading) return <p>Loading news...</p>;
  if (error) return <p>Error loading news.</p>;
  return (
    <>
      <WidgetContainer title="News">
        <div className="relative">
          <div className="flex flex-nowrap overflow-x-auto gap-4">
            {data.data.posts.slice(0, 10).map((news: any) => (
              <NewsCard news={news} />
            ))}
          </div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-16 backdrop-blur-xs mask-l-from-50% bg-linear-to-l from-white from-20% to-transparent" />
        </div>
        <div className="mt-4 flex gap-2 justify-end">
          <Button
            variant="secondary"
            size="icon"
            className="mr-4 rounded-full"
            onClick={() => refetch()}
          >
            <ArrowPathIcon className={isLoading ? "animate-spin" : ""} />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <ChevronLeftIcon />
          </Button>
          <Button variant="secondary" size="icon" className="rounded-full">
            <ChevronRightIcon />
          </Button>
        </div>
      </WidgetContainer>
    </>
  );
};

export default NewsWidget;
