import Image from "next/image";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Home: NextPage = () => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen">
      <title>Victer's Portfolio</title>
      {/* Header */}
      <Header />
      {/* Hero */}
      <section id="hero">
        <Hero />
      </section>
      {/* About */}
      {/* Experiences?? */}
      {/* Skills */}
      {/* Projects */}
      {/* Contact Me */}
    </div>
  );
};
export default Home;
