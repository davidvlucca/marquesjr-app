import React from "react";
import CarouselComponent from "./Components/Carousel";
import About from "./Components/About";
import TeamSlider from "./Components/Team";
import Services from "./Components/Servicos";
import Video from "./Components/Video";
import BookOnline from "./Components/Book"
import Map from './Components/Map'
import Footer from './Components/Footer'

function App() {
  return (
    <>
      <CarouselComponent></CarouselComponent>
      <About></About>
      <TeamSlider></TeamSlider>
      <Services></Services>
      <Video></Video>
      <BookOnline></BookOnline>
      <Map></Map>
      <Footer></Footer>
    </>
  );
}

export default App;
