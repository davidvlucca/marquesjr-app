import React from "react";
import { useTranslation } from "react-i18next";

function BookOnline() {
  const { t } = useTranslation("global");

  return (
    <div className=" bg-bookBackground bg-cover ">
      <a href="https://barbeariamarquesjr.buk.pt/" target="_blank">
        <div className=" px-80 py-36">
          <h2 className=" pb-24 text-center text-6xl uppercase text-[#111D1D]">
            {t("cta.title")}
          </h2>
          <p className=" text-center text-[30px] text-[#111D1D]">
            {t("cta.desc")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default BookOnline;
