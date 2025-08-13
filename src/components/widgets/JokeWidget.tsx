import WidgetContainer from "../layouts/WidgetContainer";
import { useJoke } from "@/hooks/useJokes";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

const JokeWidget = () => {
  const { data, isLoading, isFetching, error, refetch } = useJoke();

  return (
    <>
      <WidgetContainer title="Jokes">
        <div>
          {isLoading ? (
            <h4 className="font-normal leading-loose animate-pulse">
              "Trying to be funny... please lower expectations."
            </h4>
          ) : (
            data?.map((joke, index) => (
              <h4 key={index} className="font-normal leading-loose">
                {joke.trim().startsWith('"') ? joke : `"${joke}"`}
              </h4>
            ))
          )}
          {error && (
            <div>
              <h4 className="font-normal leading-loose text-gray-600">
                "We looked for a joke. All we found was disappointment. Maybe
                try again later." <br />
                Error details: {error.message}
              </h4>
            </div>
          )}
        </div>
        <div className="mt-4 flex gap-2 justify-end">
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
              <p className="text-xs">Refresh Jokes</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </WidgetContainer>
    </>
  );
};

export default JokeWidget;
