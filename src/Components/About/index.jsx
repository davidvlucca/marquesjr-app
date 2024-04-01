import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("global");

  return (
    <div className="flex h-[1000px] w-[99vw] bg-[#111D1D] ">
      <div className="grid flex-1 place-content-center bg-aboutLogo bg-cover py-[100px] lg:px-[20px] xl:px-[80px]">
        <div className="space-y-20 tracking-tighter	">
          <h1 className="font-light xl:text-6xl ">{t("about.title")}</h1>
          <div className="space-y-10">
            <p className="font-medium	text-[#a28857] xl:text-4xl">
              {t("about.desc1")}
            </p>

            <p className="text-4xl font-medium text-[#a28857]">
              {t("about.desc2")}
            </p>
            <div className="text-[#a28857]">
              <p className="text-2xl font-medium">Wevert Junior</p>
              <p className=" text-2xl font-normal">{t("about.role")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid w-[50%] place-content-center bg-aboutBackground bg-cover bg-top bg-no-repeat"></div>
    </div>
  );
}

export default About;
