import { useState } from "react";
import { Carousel } from "@material-tailwind/react";
import Banner from "../../../public/banner.png";
import Logo from "../../../public/logo.png";
import { Link } from "@nextui-org/react";
import { Button } from "@nextui-org/button";
import { useTranslation } from "react-i18next";
import "../../styles.css";

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
    <div className="relative">
      <div className="absolute left-0 top-0  z-10">
        <div className="mx-auto mt-10 w-[1000px] max-w-[90%]">
          <button
            onClick={() => handleChangeLanguage("en")}
            className={`p-2 lg:text-lg xl:text-xl ${
              selectedEN ? "text-white line-through" : "text-[#A28857]"
            }`}
          >
            EN
          </button>
          <button
            onClick={() => handleChangeLanguage("pt")}
            className={` p-2 xl:text-xl ${
              selectedPT ? "text-white line-through" : "text-[#A28857]"
            }`}
          >
            PT
          </button>
        </div>
      </div>
      <Carousel
        className=" h-auto"
        //autoplay={true}
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
                className=" h-auto max-w-[14rem] md:max-w-[16rem] lg:max-w-sm xl:max-w-md"
              />
              <div className="flex justify-center">
                <button
                  onClick={() =>
                    window.open("https://barbeariamarquesjr.buk.pt/", "_blank")
                  }
                  className=" lg:text-md rounded bg-brown-500 px-4 py-2 font-bold uppercase text-white transition-colors duration-300 hover:bg-[#293E3B] sm:text-sm md:text-sm lg:px-5 lg:py-3 xl:px-6 xl:py-3 xl:text-xl 2xl:px-6 2xl:py-3 2xl:text-xl"
                >
                  {t("header.btn")}
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnYydm15MmZqd2U3d3V4cGd3ZTgxNXJxeDR6MW9vMTJwcmhucXN2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oGNDNk8wFcWLXrPYQ/giphy.gif"
          alt="image 2"
          className="blur/75 h-full max-w-fit"
        />
        <img src={Banner} alt="image 3" className="h-10px w-auto blur" />
      </Carousel>
    </div>
  );
}

export default CarouselComponent;
