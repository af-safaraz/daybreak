import daybreakLogo from "../../assets/DaybreakLogo.svg";
import { UserIcon } from "@heroicons/react/24/solid";

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
        <div className="h-[90%] aspect-square rounded-full bg-gray-300 flex justify-center items-center">
          <UserIcon className="size-6 text-gray-600" />
        </div>
      </div>
    </>
  );
};

export default Header;
