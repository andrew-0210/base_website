import Hero from "@/components/sections/Home/Hero";
import WhatWeDo from "@/components/sections/Home/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeDo className="bg-[#f5f5f5]" />
    </main>
  );
}
