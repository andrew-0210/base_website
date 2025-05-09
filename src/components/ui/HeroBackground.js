const HeroBackground = () => {
  return (
    <>
      <video
        className="hidden h-full w-full object-cover sm:block lg:object-cover xl:object-cover"
        preload="none"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/videos/hero-background-desktop.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="h-full w-dvw object-cover sm:hidden lg:object-cover"
        preload="none"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/videos/hero-background-mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );``
};

export default HeroBackground;
