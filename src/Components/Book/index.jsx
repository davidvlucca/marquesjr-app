import React from "react";
import { useTranslation } from "react-i18next";

function BookOnline() {
  const { t } = useTranslation("global");

  return (
    <div className=" bg-bookBackground bg-cover ">
      <a href="https://barbeariamarquesjr.buk.pt/" target="_blank">
        <div className="mS:px-10 mM:px-8 mL:px-10 mM:py-6 mL:py-8 xs:px-32 xs:py-10 md:px-32 md:py-16 lg:px-[200px] lg:py-16 xl:px-[300px] xl:py-24 2xl:px-[400px] 2xl:py-28">
          <h2 className=" mM:text-3xl mS:text-2xl xs:pb-4 xs:text-4xl text-center uppercase text-[#111D1D] md:pb-6 md:text-5xl lg:pb-6 lg:text-6xl xl:pb-10 xl:text-6xl 2xl:pb-10 2xl:text-6xl">
            {t("cta.title")}
          </h2>
          <p className=" mS:text-xs mM:text-xs mL:text-sm xs:text-base text-center text-[#111D1D] md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl">
            {t("cta.desc")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default BookOnline;
