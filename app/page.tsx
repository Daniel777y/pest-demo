import Banner from "@/components/banner";
import Steps from "@/components/steps";
import Exhibit from "@/components/exhibit";
import Proof from "@/components/proof";
import Reviews from "@/components/reviews";
import FAQ from "@/components/faq";
import Bottom from "@/components/bottom";

const HomePage = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center py-8">
      <div id="home" className="px-10 py-16 w-full flex flex-col items-center justify-center gap-y-24">
        <Banner />
      </div>
      <div id="how-it-works" className="px-10 py-16 w-full bg-color9 flex flex-col items-center justify-center gap-y-24">
        <Steps />
      </div>
      <div id="about-us" className="px-10 py-16 w-full bg-color8 flex flex-col items-center justify-center gap-y-24">
        <Exhibit />
      </div>
      <div className="px-10 py-16 w-full bg-color4 text-white flex flex-col items-center justify-center gap-y-24">
        <Proof />
      </div>
      <div id="reviews" className="px-10 py-16 w-full bg-color9 flex flex-col items-center justify-center gap-y-24">
        <Reviews />
      </div>
      <div id="faq" className="px-10 py-16 w-full bg-color8 flex flex-col items-center justify-center gap-y-24">
        <FAQ />
      </div>
      <div className="px-10 py-16 w-full flex flex-col items-center justify-center gap-y-24">
        <Bottom />
      </div>
    </div>
  );
};

export default HomePage;