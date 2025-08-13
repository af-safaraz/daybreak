import WidgetContainer from "../layouts/WidgetContainer";

import { MapPinIcon } from "@heroicons/react/24/solid";

import SunnyIcon from "../../assets/sunny.png";

// import { Button } from "@/components/ui/button";
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipTrigger,
// } from "@/components/ui/tooltip";
// import { ArrowPathIcon } from "@heroicons/react/24/solid";

const WeatherWidget = () => {
  const weather = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <>
      <WidgetContainer title="Weather">
        <div className="space-y-4">
          <div className="flex items-center space-x-1">
            <MapPinIcon className="w-6 h-6" />
            <h4>Balikpapan</h4>
          </div>
          <div className="flex justify-between items-center">
            <h1 className="text-8xl">
              25°
              {/* <span className="text-7xl align-top tracking-widest">C</span> */}
            </h1>
            <div className="w-32 h-32 rounded-full">
              <img src={SunnyIcon} alt="" />
            </div>
          </div>
          <div className="mt-8 flex flex-nowrap gap-8 overflow-x-auto">
            {weather.map((index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mb-2"></div>
                <p className="text-gray-500">09:00</p>
                <p className="font-medium">24°C</p>
              </div>
            ))}
          </div>
        </div>
        {/* <div className="mt-4 flex gap-2 justify-end">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                disabled={isFetching}
                variant="secondary"
                size="icon"
                className="rounded-full"
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
        </div> */}
      </WidgetContainer>
    </>
  );
};

export default WeatherWidget;
