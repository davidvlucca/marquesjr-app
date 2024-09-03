import { useTranslation } from "react-i18next";
import AboutBG from "/marquesjr_background.jpg";

function About() {
  const { t } = useTranslation("global");

  return (
    <div className="flex h-[90vh] w-[99vw] flex-col bg-[#111D1D] font-roundkey sm:h-auto sm:w-auto md:h-auto md:w-auto lg:h-[550px] lg:flex-row xl:h-[650px] xl:flex-row 2xl:h-[800px] 2xl:flex-row xs:h-auto">
      <div className="grid flex-1 place-content-center bg-aboutLogo bg-cover px-12 py-52 sm:py-12 md:py-16 lg:px-10 xl:px-[80px] 2xl:px-24 xs:py-16">
        <div className=" tracking-tighter sm:space-y-8 md:space-y-8 lg:space-y-10 xl:space-y-12 2xl:space-y-16 xs:space-y-8">
          <h1 className=" font-roundkey sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl 2xl:font-extralight xs:text-4xl mM:text-[34px] mS:text-[26px]">
            {t("about.title")}
          </h1>
          <div className="sm:space-y-6 md:space-y-8 lg:space-y-6 xl:space-y-8 2xl:space-y-8 xs:space-y-4">
            <p className="font-medium text-[#a28857] sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl xs:text-2xl">
              {t("about.desc1")}
            </p>
            <p className="font-medium text-[#a28857] sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl 2xl:text-4xl xs:text-2xl">
              {t("about.desc2")}
            </p>
            <div className="text-[#a28857]">
              <p className="font-medium sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl xs:text-xl">
                Wevert Junior
              </p>
              <p className="font-normal sm:text-xl md:text-2xl lg:text-xl xl:text-2xl 2xl:text-3xl xs:text-xl">
                {t("about.role")}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" h-auto place-content-center  lg:w-[50%] xl:w-[50%] 2xl:w-[50%]">
        <img
          src={AboutBG}
          className="h-full w-full bg-fixed object-cover"
          alt="Background"
        />
      </div>
    </div>
  );
}

export default About;
