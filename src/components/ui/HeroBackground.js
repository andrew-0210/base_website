const HeroBackground = () => {
  return (
    <>
      <video
        className="hidden h-full w-full object-cover sm:block lg:object-fill"
        preload="none"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/videos/hero_background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video
        className="h-full w-dvw object-cover sm:hidden lg:object-fill"
        preload="none"
        muted
        loop
        autoPlay
        playsInline
      >
        <source src="/videos/hero_background_mobile.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </>
  );
};

export default HeroBackground;
