import daybreakLogo from "../../assets/DaybreakLogo.svg";
import { UserIcon } from "@heroicons/react/24/solid";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

import { logout } from "@/services/auth";

const Header = () => {
  return (
    <>
      <div className="w-full xl:w-7xl m-auto h-16 px-8 py-3 flex justify-between items-center">
        <div className="h-full flex items-center">
          <img
            className="h-[90%] aspect-square mr-3"
            src={daybreakLogo}
            alt="Daybreak Logo"
          />
          <h3>Daybreak</h3>
        </div>
        <div className="h-full aspect-square">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                className="w-full h-full p-0 aspect-square rounded-full bg-gray-300 flex justify-center items-center cursor-pointer"
                variant="outline"
              >
                <UserIcon className="size-6 text-gray-600" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => {
                  logout();
                }}
              >
                Log out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Header;
