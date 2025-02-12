const HeroBackground = () => {
  return (
    <video
      className="h-full w-full object-cover lg:object-fill"
      preload="none"
      muted
      loop
      autoPlay
      playsInline
    >
      <source src="/videos/hero_background.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HeroBackground;
