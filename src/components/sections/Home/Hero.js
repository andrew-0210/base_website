"use client";
import { useEffect, useState } from "react";
import HeroBackground from "@/components/ui/HeroBackground";
import { motion, useScroll, useTransform } from "motion/react";

const Hero = () => {
  const { scrollY } = useScroll();

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const opacity = useTransform(scrollY, [0, 800], [1, 0]);

  if (!isClient) return null;

  return (
    <section className="hero-section relative flex h-[70vh] overflow-x-hidden lg:h-dvh">
      <div className="fixed top-0 -z-30 h-full overflow-y-hidden lg:h-dvh lg:w-dvw">
        <HeroBackground />
      </div>

      <motion.h1
        className="z-[10] flex items-end px-[1.25rem] pb-[1rem] md:pb-[2.5rem] lg:px-[5rem]"
        style={{ opacity }}
      >
        Dream big, live simple.
      </motion.h1>
      <div className="absolute h-full w-full bg-gradient-to-t from-[rgba(0,0,0,0.6)] to-transparent" />
    </section>
  );
};

export default Hero;
