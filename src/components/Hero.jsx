import React from "react";

import { styles } from "../styles";

const Hero = () => {
  return (
    <section className="relative w-full h-[50vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[white]" />
          <div className="w-1 sm:h-80 h-40 white-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[white]">Joan</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I develop beautiful UIs for <br className="sm:block hidden" /> web
            and mobile applications <br className="sm:block hidden" /> using
            React.js and React Native.
          </p>
          {/* <div className="flex justify-center items-center">test</div> */}
        </div>
      </div>
      {/* <ComputersCanvas /> */}
    </section>
  );
};

export default Hero;
