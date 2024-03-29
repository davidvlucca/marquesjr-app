import React from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation("global");

  return (
    <div className="flex bg-[#111D1D] h-[1000px] w-[99vw] ">
      <div className="flex-1 grid place-content-center bg-cover bg-aboutLogo px-[80px] py-[100px]">
        <div className="space-y-24 tracking-tighter	">
          <h1 className="text-7xl font-light ">{t("about.title")}</h1>
          <div className="space-y-10">
            <p className="text-[#a28857]	text-4xl font-medium">
              {t("about.desc1")}
            </p>

            <p className="text-[#a28857] text-4xl font-medium">
              {t("about.desc2")}
            </p>
            <div className="text-[#a28857]">
              <p className="font-medium text-2xl">Wevert Junior</p>
              <p className=" font-normal text-2xl">{t("about.role")}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[50%] bg-aboutBackground bg-top grid place-content-center bg-cover bg-no-repeat"></div>
    </div>
  );
}

export default About;
