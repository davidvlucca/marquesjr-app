import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { teamData, responsive } from "../../assets/teamdata";
import { useTranslation } from "react-i18next";

function TeamSlider() {
  const { t } = useTranslation("global");
  return (
    <div className="parent font-roundkey">
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        draggable={true}
        infinite={true}
        partialVisible={true}
        autoPlaySpeed={2000}
      >
        {teamData.map((item) => (
          <div key={item.id} className="relative">
            <img src={item.image} className="block" alt={item.name} />
            <div className="absolute bottom-5 left-5 2xl:bottom-5 2xl:left-5">
              <h3 className="font-normal uppercase text-[#978D7D] md:text-3xl lg:text-3xl xl:text-2xl 2xl:text-4xl xs:text-2xl mL:text-4xl">
                {item.name}
              </h3>
              <p className="uppercase text-[#978D7D] xl:text-base 2xl:text-xl">
                {t(item.role)}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TeamSlider;
