import React from "react";
import { servicesData } from "../../assets/servicesdata";
import { useTranslation } from "react-i18next";

function Services() {
  const halfIndex = Math.ceil(servicesData.length / 2);
  const firstHalf = servicesData.slice(0, halfIndex);
  const secondHalf = servicesData.slice(halfIndex);
  const { t } = useTranslation("global");

  return (
    <div className="font-roundkey bg-[#978D7D] tracking-tighter text-[#293E3B]">
      <h1 className="mS:py-10 mM:py-10 mS:text-3xl mL:text-4xl mL:py-12 xs:py-16 xs:text-5xl text-center font-light md:py-20 md:text-6xl lg:py-24 lg:text-7xl xl:py-28 xl:text-7xl 2xl:py-32 2xl:text-7xl 2xl:font-thin">
        {t("services.title")}
      </h1>
      <div className="mS:mx-6 mM:mx-12 mL:mx-16 md:mx-34 xs:mx-28 xs:justify-center sm md:justify-center md:px-28 lg:flex lg:space-x-32 lg:px-28 xl:flex xl:space-x-48 xl:px-40 2xl:flex 2xl:space-x-52 2xl:px-60 ">
        <div className="xs:pb-10 text-center md:pb-16 lg:w-1/2 lg:text-left xl:w-1/2 xl:text-left 2xl:w-1/2 2xl:text-left">
          {firstHalf.map((item, index) => (
            <div
              key={index}
              className={
                index !== firstHalf.length - 1
                  ? "xs:pb-8 md:mb-16 lg:mb-14 xl:mb-14 2xl:mb-14"
                  : ""
              }
            >
              <h3 className="mS:text-2xl mM:text-2xl mL:text-2xl xs:text-3xl font-medium uppercase md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
                {t(item.type)}
              </h3>
              <p className="mS:text-sm mM:text-sm mL:text-sm lg:text-md xs:text-lg font-normal md:text-lg xl:text-lg 2xl:text-xl">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
        <div className="text-center lg:w-1/2 lg:text-left xl:w-1/2 xl:text-left 2xl:w-1/2 2xl:text-left ">
          {secondHalf.map((item, index) => (
            <div
              key={index}
              className={
                index !== secondHalf.length - 1
                  ? "xs:pb-8 md:mb-16 lg:mb-14 xl:mb-14 2xl:mb-14"
                  : ""
              }
            >
              <h3 className="mS:text-2xl mM:text-2xl mL:text-2xl xs:text-3xl font-medium uppercase md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-3xl">
                {t(item.type)}
              </h3>
              <p className="mS:text-sm mM:text-sm mL:text-sm lg:text-md xs:text-lg font-normal md:text-lg xl:text-lg 2xl:text-xl">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="xs:p-12 flex justify-center md:p-16 lg:p-12 xl:p-16 2xl:p-20">
        <button
          onClick={() =>
            window.open("https://barbeariamarquesjr.buk.pt/", "_blank")
          }
          className="mS:py-4 mS:px-5 mS:text-xl xs:text-2xl xs:py-4 xs:px-7 lg:text-md rounded bg-[#293E3B] px-4 py-2 font-bold uppercase text-white transition-colors duration-300 hover:bg-brown-600 md:px-7 md:py-5 md:text-2xl lg:px-5 lg:py-3 xl:px-6 xl:py-3 xl:text-xl 2xl:px-6 2xl:py-3 2xl:text-xl"
        >
          {t("services.btn")}
        </button>
      </div>
    </div>
  );
}

export default Services;
