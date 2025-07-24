import {
  Card,
  CardAction,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";

type WidgetContainerProps = {
  title: string;
  children: React.ReactNode;
};

const WidgetContainer = ({ title, children }: WidgetContainerProps) => {
  return (
    <>
      <div className="w-full">
        <Card className="gap-4">
          <CardHeader className="flex items-center justify-between">
            <CardTitle className="text-2xl">{title}</CardTitle>
            <CardAction>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="secondary"
                    size="icon"
                    className="rounded-full"
                  >
                    <EllipsisVerticalIcon className="size-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end">
                  <DropdownMenuItem>Customize</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardAction>
          </CardHeader>
          <CardContent>{children}</CardContent>
        </Card>
      </div>
    </>
  );
};

export default WidgetContainer;
