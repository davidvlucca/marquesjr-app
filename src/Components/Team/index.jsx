import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { teamData, responsive } from "../../assets/teamdata";

const textOverlayStyle = {
  marginLeft: "130px",
  position: "absolute",
  top: "85%", // Center vertically
  transform: "translate(-50%, -50%)", // Adjust to center properly
  textAlign: "left",
};

function TeamSlider() {
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
          <div key={item}>
            <div style={textOverlayStyle}>
              <h3 className="uppercase text-[#978D7D] font-normal text-3xl">
                {item.name}
              </h3>
              <p className="uppercase text-[#978D7D]"> {item.role}</p>
            </div>
            <img src={item.imageurl} alt={`Slide ${item}`} className="h-auto" />
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default TeamSlider;
