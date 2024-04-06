import React from "react";
import { useTranslation } from "react-i18next";
import AboutBG from "../../../public/about_background.png";

function About() {
  const { t } = useTranslation("global");

  return (
    <div className="font-roundkey xs:h-auto flex h-[90vh] w-[99vw] flex-col bg-[#111D1D] sm:h-auto sm:w-auto md:h-auto md:w-auto lg:h-[550px] lg:flex-row xl:h-[650px] xl:flex-row 2xl:h-[800px] 2xl:flex-row">
      <div className="xs:py-16 grid flex-1 place-content-center bg-aboutLogo bg-cover px-12 py-52 sm:py-12 md:py-16 lg:px-10 xl:px-[80px] 2xl:px-24">
        <div className=" xs:space-y-8 tracking-tighter sm:space-y-8 md:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16">
          <h1 className=" font-roundkey mS:text-[26px] mM:text-[34px] xs:text-4xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-8xl 2xl:font-extralight">
            {t("about.title")}
          </h1>
          <div className="xs:space-y-4 sm:space-y-6 md:space-y-8 lg:space-y-6 xl:space-y-8 2xl:space-y-8">
            <p className="xs:text-2xl font-medium text-[#a28857] sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl">
              {t("about.desc1")}
            </p>
            <p className="xs:text-2xl font-medium text-[#a28857] sm:text-2xl md:text-3xl lg:text-xl xl:text-2xl 2xl:text-4xl">
              {t("about.desc2")}
            </p>
            <div className="text-[#a28857]">
              <p className="xs:text-xl font-medium sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl">
                Wevert Junior
              </p>
              <p className="xs:text-xl font-normal sm:text-xl md:text-2xl lg:text-lg xl:text-xl 2xl:text-3xl">
                {t("about.role")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto place-content-center  lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
        <img
          src={AboutBG}
          className="h-full w-full object-cover"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default About;
