import React from "react";
import { servicesData } from "../../assets/servicesdata";
import { Button, Link } from "@nextui-org/react";
import { useTranslation } from "react-i18next";

function Services() {
  const halfIndex = Math.ceil(servicesData.length / 2);
  const firstHalf = servicesData.slice(0, halfIndex);
  const secondHalf = servicesData.slice(halfIndex);
  const { t } = useTranslation("global");

  return (
    <div className="bg-[#978D7D] p-10 tracking-tighter text-[#293E3B]">
      <h1 className="py-40 text-center text-8xl font-light">
        {t("services.title")}
      </h1>

      <div className="flex gap-x-[300px] px-64 ">
        <div className="w-1/2">
          {firstHalf.map((item, index) => (
            <div
              key={index}
              className={index !== firstHalf.length - 1 ? "mb-14" : ""}
            >
              <h3 className="text-4xl font-medium uppercase">{t(item.type)}</h3>
              <p className=" text-2xl font-normal">{t(item.description)}</p>
            </div>
          ))}
        </div>
        <div className="w-1/2 pb-14">
          {secondHalf.map((item, index) => (
            <div
              key={index}
              className={index !== secondHalf.length - 1 ? "mb-14" : ""}
            >
              <h3 className="text-4xl font-medium uppercase">{t(item.type)}</h3>
              <p className="text-2xl font-normal">{t(item.description)}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center p-32">
        <Button
          href="https://barbeariamarquesjr.buk.pt/"
          as={Link}
          target="_blank"
          size="lg"
          radius="none"
          className="bg-[#293E3B] uppercase text-white"
        >
          {t("services.btn")}
        </Button>
      </div>
    </div>
  );
}

export default Services;
