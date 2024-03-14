import Ana from "../../public/ana.png";
import Dom from "../../public/dom.png";
import Lucas from "../../public/lucas.png";
import Michael from "../../public/michael.png";
import Tiago from "../../public/tiago.png";
import Rose from "../../public/rose.png";

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const teamData = [
  {
    id: 1,
    name: "Ana Kelly Mota",
    role: "Cabeleireira e barbeira",
    imageurl: Ana,
  },
  {
    id: 2,
    name: "DOM CARVALHO",
    role: "Barbeiro",
    imageurl: Dom,
  },
  {
    id: 3,
    name: "Lucas Alencar",
    role: "Barbeiro",
    imageurl: Lucas,
  },
  {
    id: 4,
    name: "Michael Rodrigues",
    role: "Barbeiro",
    imageurl: Michael,
  },
  {
    id: 5,
    name: "Tiago Loiola",
    role: "Barbeiro",
    imageurl: Tiago,
  },
  {
    id: 6,
    name: "ROSE RIBEIRO",
    role: "GESTÃO",
    imageurl: Rose,
  },
  
];
