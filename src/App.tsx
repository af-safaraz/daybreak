import Background from "./components/layouts/Background";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import JokeWidget from "./components/widgets/JokeWidget";
import NewsWidget from "./components/widgets/NewsWidget";

function App() {
  return (
    <>
      <Background />
      <Header />
      <main className="w-full xl:w-7xl m-auto px-8">
        <Hero />
        <div className="w-full flex flex-col my-5 gap-4">
          <NewsWidget />
          <JokeWidget />
        </div>
      </main>
    </>
  );
}

export default App;
