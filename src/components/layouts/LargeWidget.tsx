import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { ChevronLeftIcon } from "@heroicons/react/24/solid";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import NewsCard from "../ui/NewsCard";

const LargeWidget = () => {
  return (
    <>
      <div className="w-full xl:w-7xl m-auto px-8 py-5">
        <Card className="gap-4">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl">News</CardTitle>
            <CardAction>
              <Button variant="secondary" size="icon" className="rounded-full">
                <EllipsisVerticalIcon className="size-5" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="relative">
            {/* <div className="relative flex flex-nowrap overflow-x-auto gap-4 before:content-[''] before:absolute before:right-0 before:h-full before:w-16 before:backdrop-blur-xs before:mask-l-from-30%"> */}
            <div className="flex flex-nowrap overflow-x-auto gap-4">
              <NewsCard />
            </div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-16 backdrop-blur-xs mask-l-from-50% bg-linear-to-l from-white from-20% to-transparent" />
          </CardContent>
          <CardFooter className="flex gap-2 justify-end">
            <Button
              variant="secondary"
              size="icon"
              className="mr-4 rounded-full"
            >
              <ArrowPathIcon />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <ChevronLeftIcon />
            </Button>
            <Button variant="secondary" size="icon" className="rounded-full">
              <ChevronRightIcon />
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default LargeWidget;
