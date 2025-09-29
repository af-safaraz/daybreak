import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { useAuth } from "@/hooks/useAuth";

const Hero = () => {
  const [dateTime, setDateTime] = useState<Date>(new Date());
  const [greeting, setGreeting] = useState<string>("Hello");

  const { profile } = useAuth();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setDateTime(now);

      const hour = now.getHours();

      if (hour >= 5 && hour < 12) {
        setGreeting(`Good Morning, ${profile?.name} ☀️`);
      } else if (hour >= 12 && hour < 16) {
        setGreeting(`Good Afternoon, ${profile?.name} ⛅️`);
      } else if (hour >= 16 || hour < 5) {
        setGreeting(`Good Evening, ${profile?.name} 🌙`);
      } else {
        setGreeting(`Hello, ${profile?.name} 👋`);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [profile]);

  return (
    <>
      <div className="w-full mt-8 flex justify-between items-center">
        <h1 className="tracking-normal">{greeting}</h1>
        <div className="flex flex-col justify-center items-end text-right">
          <h4 className="font-semibold">{dayjs(dateTime).format("hh:mm A")}</h4>
          <h4 className="font-semibold">
            {dayjs(dateTime).format("dddd, DD MMMM YYYY")}
          </h4>
        </div>
      </div>
    </>
  );
};

export default Hero;
