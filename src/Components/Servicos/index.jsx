import { servicesData } from "../../assets/servicesdata";
import { useTranslation } from "react-i18next";

function Services() {
  const halfIndex = Math.ceil(servicesData.length / 2);
  const firstHalf = servicesData.slice(0, halfIndex);
  const secondHalf = servicesData.slice(halfIndex);
  const { t } = useTranslation("global");

  return (
    <div className="bg-[#978D7D] font-roundkey tracking-tighter text-[#293E3B]">
      <h1 className="text-center font-light md:py-20 md:text-6xl lg:py-24 lg:text-7xl xl:py-28 xl:text-7xl 2xl:py-32 2xl:text-7xl 2xl:font-thin xs:py-16 xs:text-5xl mL:py-12 mL:text-4xl mM:py-10 mS:py-10 mS:text-3xl">
        {t("services.title")}
      </h1>
      <div className="md:mx-34 sm md:justify-center md:px-28 lg:flex lg:space-x-32 lg:px-28 xl:flex xl:space-x-48 xl:px-40 2xl:flex 2xl:space-x-52 2xl:px-60 xs:mx-28 xs:justify-center mL:mx-16 mM:mx-12 mS:mx-6 ">
        <div className="text-center md:pb-16 lg:w-1/2 lg:text-left xl:w-1/2 xl:text-left 2xl:w-1/2 2xl:text-left xs:pb-10">
          {firstHalf.map((item, index) => (
            <div
              key={index}
              className={
                index !== firstHalf.length - 1
                  ? "md:mb-16 lg:mb-14 xl:mb-14 2xl:mb-14 xs:pb-8"
                  : ""
              }
            >
              <h3 className="font-roundkey font-medium uppercase md:text-4xl lg:text-4xl xl:text-3xl 2xl:text-3xl xs:text-3xl mL:text-2xl mM:text-2xl mS:text-2xl ">
                {t(item.type)}
              </h3>
              <p className="font-normal md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl xs:text-lg mL:text-sm mM:text-sm mS:text-sm">
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
                  ? "md:mb-16 lg:mb-14 xl:mb-14 2xl:mb-14 xs:pb-8"
                  : ""
              }
            >
              <h3 className="font-medium uppercase md:text-4xl lg:text-4xl xl:text-3xl 2xl:text-3xl xs:text-3xl mL:text-2xl mM:text-2xl mS:text-2xl">
                {t(item.type)}
              </h3>
              <p className="font-normal md:text-2xl lg:text-lg xl:text-lg 2xl:text-xl xs:text-lg mL:text-sm mM:text-sm mS:text-sm">
                {t(item.description)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center md:p-16 lg:p-12 xl:p-16 2xl:p-20 xs:p-12">
        <button
          onClick={() =>
            window.open("https://barbeariamarquesjr.buk.pt/", "_blank")
          }
          className="lg:text-md lg:text-md bg-[#293E3B] px-4 py-2 font-bold uppercase text-white outline-brown-500 transition-colors duration-300 hover:bg-brown-600 hover:text-white sm:text-sm md:py-4 md:px-6 md:text-2xl  lg:px-5 lg:py-3 xl:px-6 xl:py-3 xl:text-xl 2xl:px-6 2xl:py-3 2xl:text-2xl xs:px-7 xs:py-4 xs:text-2xl mS:px-5 mS:py-4 mS:text-xl"
        >
          {t("services.btn")}
        </button>
      </div>
    </div>
  );
}

export default Services;
