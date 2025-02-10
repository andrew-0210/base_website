const WhatWeDo = () => {
  return (
    <section className='h-dvh text-center px-[1rem] lg:max-w-[1015px] flex flex-col justify-center items-center mx-auto gap-[1.25rem] lg:gap-[2.5rem]'>
      <h3 className='uppercase text-[0.75rem] lg:text-[0.875rem]'>
        What we do
      </h3>
      <h2 className='text-[1.75rem] lg:text-[4rem] -tracking-[0.04em] leading-[1]'>
        Modular cabins for simple, sustainable{' '}
        <span className='font-[family-name:var(--font-ivy-presto)] font-light italic'>
          living
        </span>
        .
      </h2>
      <p className='text-[0.875rem] font-medium lg:text-[1.125rem] leading-[1.2] lg:max-w-[60%]'>
        We produce high-performance, compact homes that let you escape the
        everyday to a space that is good for you and good for the planet.
      </p>
    </section>
  );
};

export default WhatWeDo;
