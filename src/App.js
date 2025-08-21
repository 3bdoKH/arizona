import "./App.css";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Categories from "./components/categories/Categories";
import Features from "./components/hero/Features";
import Footer from "./components/footer/Footer";
import React from "react";
function App() {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="App">
      <Header />
      <Hero />
      <Features />
      <Categories />
      <Footer />
    </div>
  );
}

export default App;
