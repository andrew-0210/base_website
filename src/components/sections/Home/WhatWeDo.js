import Image from "next/image";

const WhatWeDo = () => {
  return (
    <section className="section">
      <div className="mx-auto flex flex-col items-center justify-start gap-[1.25rem] pb-[1.25rem] text-center md:max-w-[650px] lg:max-w-[1015px] lg:gap-[2.5rem] lg:pb-[6.25rem]">
        <h4>What we do</h4>
        <h2>
          Modular cabins for simple, sustainable{" "}
          <span className="ivy-presto italic">living</span>.
        </h2>
        <p className="lg:max-w-[60%]">
          We produce high-performance, compact homes that let you escape the
          everyday to a space that is good for you and good for the planet.
        </p>
      </div>
      <div className="relative h-[30vh] md:h-dvh lg:mx-[5rem]">
        <Image
          src="/images/featured.jpg"
          alt="featured_image"
          fill={true}
          className="h-full w-full rounded-2xl object-cover sm:block lg:object-cover xl:object-cover"
        />
      </div>
      <div className="flex flex-col gap-3 pt-[1.25rem] md:flex-row md:justify-between lg:px-[5rem]">
        <h3>
          Your base camp,
          <br /> no matter your{" "}
          <span className="ivy-presto italic">mountain</span> .
        </h3>
        <p className="max-w-[600px]">
          Built to go virtually anywhere, our models are the starting and end
          point for all your adventures.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDo;
