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

import { useTranslation } from "react-i18next";

export const teamData = [
  {
    id: 1,
    name: "Ana Kelly Mota",
    role: "team.role_1",
    image: "/public/ana.png",
  },
  {
    id: 2,
    name: "DOM CARVALHO",
    role: "team.role_2",
    image: "/public/dom.png",
  },
  {
    id: 3,
    name: "Lucas Alencar",
    role: "team.role_2",
    image: "/public/lucas.png",
  },
  {
    id: 4,
    name: "Michael Rodrigues",
    role: "team.role_2",
    image: "/public/michael.png",
  },
  {
    id: 5,
    name: "Tiago Loiola",
    role: "team.role_2",
    image: "/public/tiago.png",
  },
  {
    id: 6,
    name: "ROSE RIBEIRO",
    role: "team.role_3",
    image: "/public/rose.png",
  },
];
