import { useTranslation } from "react-i18next";

function BookOnline() {
  const { t } = useTranslation("global");

  return (
    <div className="bg-bookBackground bg-cover font-roundkey ">
      <a href="https://barbeariamarquesjr.buk.pt/" target="_blank">
        <div className="md:px-32 md:py-16 lg:px-[200px] lg:py-16 xl:px-[300px] xl:py-24 2xl:px-[400px] 2xl:py-28 xs:px-32 xs:py-10 mL:px-10 mL:py-8 mM:px-8 mM:py-6 mS:px-10">
          <h2 className=" text-center uppercase text-[#111D1D] md:pb-6 md:text-5xl lg:pb-6 lg:text-6xl xl:pb-10 xl:text-6xl 2xl:pb-10 2xl:text-6xl xs:pb-4 xs:text-4xl mM:text-3xl mS:text-2xl">
            {t("cta.title")}
          </h2>
          <p className=" text-center text-[#111D1D] md:text-lg lg:text-2xl xl:text-2xl 2xl:text-2xl xs:text-base mL:text-sm mM:text-xs mS:text-xs">
            {t("cta.desc")}
          </p>
        </div>
      </a>
    </div>
  );
}

export default BookOnline;
