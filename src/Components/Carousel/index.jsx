import React from "react";
import { Carousel } from "@material-tailwind/react";
import Banner from "../../../public/banner.png";
import Logo from "../../../public/logo.png";
import { Button } from "@nextui-org/react";

function CarouselComponent() {
  return (
    <Carousel
      className=" h-auto"
      autoplay={true}
      loop={true}
      infinite={true}
      transition={{ duration: 3 }}
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
        <img src={Banner} alt="image 1" className="h-10px w-auto blur " />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/25">
          <div className=" text-center ">
            <img src={Logo} className="h-auto max-w-md mt-10 mb-32" />
            <div className="flex justify-center gap-2">
              <Button
                size="lg"
                radius="none"
                className="bg-brown-500 text-white"
              >
                AGENDAR HORARIO
              </Button>
            </div>
          </div>
        </div>
      </div>
      <img
        src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbnYydm15MmZqd2U3d3V4cGd3ZTgxNXJxeDR6MW9vMTJwcmhucXN2aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oGNDNk8wFcWLXrPYQ/giphy.gif"
        alt="image 2"
        className="h-full max-w-fit blur/75"
      />
      <img src={Banner} alt="image 3" className="h-10px w-auto blur" />
    </Carousel>
  );
}

export default CarouselComponent;
