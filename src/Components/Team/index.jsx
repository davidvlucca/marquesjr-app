import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { teamData, responsive } from "../../assets/teamdata";
import { useTranslation } from "react-i18next";

function TeamSlider() {
  const { t } = useTranslation("global");
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        arrows={false}
        autoPlay={true}
        draggable={true}
        infinite={true}
        partialVisible={true}
        autoPlaySpeed={5000}
      >
        {teamData.map((item) => (
          <div key={item.id} className="relative">
            <img src={item.image} className="block" alt={item.name} />
            <div className="absolute bottom-3 left-3">
              <h3 className="uppercase text-[#978D7D] font-normal text-3xl">
                {item.name}
              </h3>
              <p className="uppercase text-[#978D7D]">{t(item.role)}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TeamSlider;
