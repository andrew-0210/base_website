"use client";
import Image from "next/image";
import { useState } from "react";

const tabs = [
  {
    title: "Quick assembly, transparent process",
    description:
      "Our prefabricated panel assembly allows us to deliver your home up to 3x faster than a typical construction. With a clear budget and a predictable timeline, you get less unfortunate surprises.",
  },
  {
    title: "Climate-resilient, natural materials",
    description:
      "The Base Panel System sets itself apart by using only high-performance, natural and local materials like wood fiber and hemp insulation. The result is a shell of carbon neutral wall and roof panels.",
  },
  {
    title: "A home that adapts with you over time",
    description:
      "With our evolutive Base Ecosystem, our homes have the ability to be expanded and upgraded. That means they can keep up with your evolving needs and budget.",
  },
];

const WhyBase = () => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <section className="section flex flex-col items-center">
      <div className="mx-auto flex flex-col items-center justify-start gap-[1.25rem] pb-[1.25rem] text-center md:max-w-[650px] lg:max-w-[1015px] lg:gap-[2.5rem] lg:pb-[6.25rem]">
        <h4>Why Base</h4>
        <h2>
          Built better and delivered faster for an all-in-one{" "}
          <span className="ivy-presto italic">escape</span>.
        </h2>
        <p className="lg:max-w-[60%]">
          We offer a turnkey solution, prefabricated quickly and efficiently
          with innovative materials for a robust shell and a minimalist design.
        </p>
      </div>
      <div className="flex flex-col items-center gap-[2rem] lg:flex-row">
        <div>
          {tabs.map((tab, i) => (
            <AccordionItem
              curOpen={curOpen}
              onOpen={setCurOpen}
              title={tab.title}
              num={i}
              key={i}
            >
              {tab.description}
            </AccordionItem>
          ))}
        </div>
        <div className="relative lg:h-[775px] lg:w-[775px]">
          <Image
            src="/images/featured.jpg"
            alt="featured_image"
            fill={true}
            className="h-full w-full rounded-2xl object-cover sm:block lg:object-cover xl:object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WhyBase;

const AccordionItem = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => {
    onOpen(isOpen ? null : num);
  };

  return (
    <article className="flex flex-col items-start gap-3 border-b border-[#c7c7c7] py-[2rem]">
      <p className="ivy-presto text-[1.5rem] lg:text-[2rem]">{title}</p>

      {isOpen ? (
        <div className="max-w-[70dvh]">{children}</div>
      ) : (
        <button onClick={handleToggle} className="text-[#919191]">
          <span className="text-[#f0c400]">+</span> Read more
        </button>
      )}
    </article>
  );
};
