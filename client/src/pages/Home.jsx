import React from "react";
import Navbar from "../components/navbar/Navbar";
import Hero from "../components/hero/Hero";
import Publication from "../components/publication/Publication";
import Upcoming from "../components/upcoming/Upcoming";
import Footer from "../components/footer/Footer";
import Foot from "../components/Foot";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Publication />
       <Upcoming />
       <Footer />
       <Foot />
    </div>
  );
}

export default Home;
