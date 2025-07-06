import Background from "./components/layouts/Background";
import Header from "./components/layouts/Header";
import Hero from "./components/layouts/Hero";
import LargeWidget from "./components/layouts/LargeWidget";

function App() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <LargeWidget></LargeWidget>
      </main>
    </>
  );
}

export default App;
