import { CarouselDApiDemo } from "@/components/(landing)/carousel/CarouselComponent";
import { MarqueeDemo } from "@/components/(landing)/testimonial/TestimonialComponent";
import { HeroVideoDialogDemo } from "@/components/(landing)/VideoComponent/VideoComponent";


export default function Home() {
  return (
    <div>
      <CarouselDApiDemo />
      <MarqueeDemo />
      <HeroVideoDialogDemo />
    </div>
  );
}
