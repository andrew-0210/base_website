"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Button from "../ui/Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [heroHeight, setHeroHeight] = useState(0);

  // Get Hero Section Height
  useEffect(() => {
    const heroSection = document.querySelector(".hero-section");
    if (heroSection) {
      setHeroHeight(heroSection.offsetHeight);
    }
  }, []);

  // Update on Resize
  useEffect(() => {
    const handleResize = () => {
      const heroSection = document.querySelector(".hero-section");
      if (heroSection) {
        setHeroHeight(heroSection.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detect Scroll Position
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [heroHeight]);

  return (
    <header className="relative">
      <nav
        className={`fixed left-0 top-0 z-30 w-full px-[1.25rem] py-[2rem] transition-colors duration-300 lg:px-[5rem]`}
      >
        <div className="flex justify-between">
          <div className="relative h-[4rem] w-[10rem]">
            <Image
              src="/images/base_logo.svg"
              alt="logo"
              fill={true}
              className="object-fill"
            />
          </div>
          <div className="flex items-center gap-[2rem]">
            <Button
              className={`p-[1rem] text-[0.875rem] font-medium transition-colors duration-300 ${
                isScrolled
                  ? "bg-[#0a0a0a] text-[#f5f5f5] hover:bg-[#D63326]"
                  : "bg-[#f5f5f5] text-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f5f5f5]"
              }`}
            >
              Join the Waitlist
            </Button>

            <div
              className={`hidden gap-[2rem] text-[0.875rem] font-medium decoration-from-font transition-colors duration-300 md:flex ${
                isScrolled ? "text-[#0a0a0a]" : "text-[#f5f5f5]"
              }`}
            >
              <Button className="uppercase hover:text-[#D63326] hover:underline">
                Articles
              </Button>
              <div className="flex gap-1">
                <Button className="uppercase hover:text-[#D63326] hover:underline">
                  Fr
                </Button>
                <span>/</span>
                <Button className="uppercase hover:text-[#D63326] hover:underline">
                  En
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
