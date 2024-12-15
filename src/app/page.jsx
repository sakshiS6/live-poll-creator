import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Icon from "@/components/Icon";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-violet-300 text-white p-4">
        <div>
          <Navbar />
        </div >
        <div>
        <Hero />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
