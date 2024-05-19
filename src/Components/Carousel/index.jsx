import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import Banner from "../../../public/banner.png";
import Banner2 from "../../../public/banner_2.png";
import Logo from "../../../public/logo.png";
import { VisuallyHidden } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

function CarouselComponent() {
  const [selectedEN, setSelectedEN] = useState(false);
  const [selectedPT, setSelectedPT] = useState(true);

  const handleChangeLanguage = (lang) => {
    if (lang === "en") {
      setSelectedEN(true);
      setSelectedPT(false);
    } else if (lang === "pt") {
      setSelectedPT(true);
      setSelectedEN(false);
    }
    i18n.changeLanguage(lang);
  };

  const { t, i18n } = useTranslation("global");
  return (
    <div className="relative font-roundkey">
      <div className="absolute left-10 top-0 z-10">
        <div className="mx-auto flex sm:mt-5 sm:max-w-[95%] md:mt-9 md:max-w-[95%] lg:mt-10 lg:max-w-[90%] xl:max-w-[90%] 2xl:max-w-[90%] xs:mt-7 xs:max-w-[98%]">
          <button
            onClick={() => handleChangeLanguage("en")}
            className={`p-2 lg:text-xl xl:text-2xl ${
              selectedEN ? "text-white line-through" : "text-[#A28857]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => handleChangeLanguage("pt")}
            className={` p-2 lg:text-xl xl:text-2xl ${
              selectedPT ? "text-white line-through" : "text-[#A28857]"
            }`}
          >
            PT
          </button>
        </div>
      </div>
      <Carousel
        prevArrow={VisuallyHidden}
        nextArrow={VisuallyHidden}
        className=" h-auto"
        autoplay={true}
        loop={true}
        transition={{ duration: 1 }}
        navigation={({ setActiveIndex, activeIndex, length }) => (
          <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
            {new Array(length).fill("").map((_, i) => (
              <span
                key={i}
                className={`block h-2 cursor-pointer rounded-2xl transition-all content-[''] ${
                  activeIndex === i ? "w-16  bg-brown-500 " : "w-8 bg-brown-900"
                }`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        )}
      >
        <div className="">
          <img src={Banner} alt="image 1" className=" w-auto blur " />
          <div className="absolute inset-0 grid h-auto w-full place-items-center bg-black/25">
            <div className="text-center sm:space-y-6 md:space-y-8 lg:space-y-10 xl:space-y-16 2xl:space-y-20">
              <img
                src={Logo}
                className=" h-auto max-w-[14rem] md:max-w-[18rem] lg:max-w-sm xl:max-w-md 2xl:max-w-lg mL:max-w-40 mM:max-w-32 mS:max-w-24"
              />
              <div className="flex justify-center xs:hidden">
                <button
                  onClick={() =>
                    window.open("https://barbeariamarquesjr.buk.pt/", "_blank")
                  }
                  className="lg:text-md bg-transparent px-4 py-2 font-bold uppercase text-brown-500 outline outline-brown-500 transition-colors duration-300 hover:bg-brown-500 hover:text-white sm:text-sm md:hidden md:px-7 md:py-5 md:text-2xl lg:block lg:px-5 lg:py-3 xl:block xl:px-6 xl:py-3 xl:text-xl 2xl:block 2xl:px-6 2xl:py-3 2xl:text-2xl xs:hidden"
                >
                  {t("header.btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <img src={Banner2} alt="image 2" className="w-auto" />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
