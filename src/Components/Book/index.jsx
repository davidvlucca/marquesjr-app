import React from "react";
import { useTranslation } from "react-i18next";

function BookOnline() {
  const { t } = useTranslation("global");

  return (
    <div className=" bg-cover bg-bookBackground ">
      <a href="https://barbeariamarquesjr.buk.pt/" target="_blank">
        <div className=" px-80 py-36">
          <h2 className=" uppercase text-[#111D1D] text-6xl text-center pb-24">
            {t("cta.title")}
          </h2>
          <p className=" text-[#111D1D] text-[30px] text-center">
            {t("cta.desc")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default BookOnline;
