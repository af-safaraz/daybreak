import Background from "./components/layouts/Background";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import NewsWidget from "./components/widgets/NewsWidget";

function App() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <NewsWidget />
      </main>
    </>
  );
}

export default App;
