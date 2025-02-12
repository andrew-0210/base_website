import HeroBackground from "@/components/ui/HeroBackground";

const Hero = () => {
  return (
    <section className="relative flex h-[70dvh] overflow-x-hidden lg:h-dvh">
      <div className="absolute -z-30 h-full overflow-y-hidden lg:h-dvh lg:w-dvw">
        <HeroBackground />
      </div>

      <h1 className="z-[10] flex items-end px-[1.25rem] pb-[1rem] md:pb-[2.5rem]">
        Dream big, live simple.
      </h1>
      <div className="absolute bg-gradient-to-t from-[rgba(0,0,0,0.5)] to-transparent lg:h-dvh lg:w-dvw" />
    </section>
  );
};

export default Hero;
