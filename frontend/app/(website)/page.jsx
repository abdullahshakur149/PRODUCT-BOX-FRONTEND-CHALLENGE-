'use client';

import Hero from "../components/Hero";
import Features from "../components/Features";

export default function LandingPage() {
  return (
    <>
      <Hero
        headline="Welcome to RandoStore!"
        subheadline="Discover, buy, and sell random items with ease. RandoStore is your one-stop shop for everything random!"
        imageSrc="/randostore-hero.svg"
      />
      <Features />
    </>
  );
}
