import Background from "@/components/layouts/Background";
import Header from "@/components/layouts/Header";
import Hero from "@/components/layouts/Hero";
import JokeWidget from "@/components/widgets/JokeWidget";
import NewsWidget from "@/components/widgets/NewsWidget";
import WeatherWidget from "@/components/widgets/WeatherWidget";

const DashboardPage = () => {
  return (
    <>
      <Background />
      <Header />
      <main className="w-full xl:w-7xl m-auto px-8">
        <Hero />
        <div className="w-full flex flex-col my-5 gap-4">
          <NewsWidget />
          <div className="flex gap-4 items-stretch">
            <div className="w-1/2">
              <JokeWidget />
            </div>
            <div className="w-1/2">
              <WeatherWidget />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DashboardPage;
