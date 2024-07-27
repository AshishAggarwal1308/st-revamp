
import ImageGrid from "./Components/Flipgrid/ImageGrid";
import ResponsiveAppBar from "./Components/Header";
import { InfiniteMovingCardsDemo } from "./Components/Testimonial";
import TickerTape from "./Components/Ticker";
import Ticker from "./Components/Ticker/page";
import Carousel from "./Components/Courses/page";
import ImageGridBox from "./Components/Flipgrid/ImageGrid";
import Hero from "./Components/Hero/page";
import OfferingSection from "./Components/OfferingSection/OfferingSection";
import Testimonial from "./Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <>
    <div className="bg-[#01233C]">
      
      <ResponsiveAppBar/>
      <Hero/>
      <Carousel/>
      <ImageGridBox/>
      <OfferingSection/>
      <Testimonial/>
      <TickerTape />
      {/* <InfiniteMovingCardsDemo/> */}
      <Ticker/>   


      
    </div>
    
    </>
  );
}
