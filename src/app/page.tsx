import React from "react";
import Navbar from "./components/Navbar";
import Link from "next/link";
import Hero from "./components/Hero";
import FeaturesCta from "./components/FeaturesCta";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <>
      <div className="mainScreen container mx-auto pt-5 px-5">
        <Navbar />
        <Hero />
        <FeaturesCta />
        <Features />
        <Carousel />
        <Footer />
      </div>
    </>
  );
}
