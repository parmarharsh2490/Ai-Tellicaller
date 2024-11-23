import { useRef } from "react";
import AITelecalling from "../components/AITelecalling";
import BookDemoButton from "../components/BookDemoButton";
import Contact from "../components/Contact";
import CustomerReview from "../components/CustomerReview";
import Feature from "../components/Feature";
import Navigation from "../components/Navigation";
import NewThingsInAi from "../components/NewThingsInAi";
import TrustedBy from "../components/TrustedBy";
import DialoftAI from "./DialoftAI";
const Home = () => {
  const descriptionRef = useRef<HTMLDivElement | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
    <Navigation descriptionRef={descriptionRef}/>
    <main className="relative">
    <div className="absolute flex items-center justify-center gap-10 top-0 left-0 overflow-hidden">
        <img fetchPriority="high" loading="eager" className="w-[50%] relative scale-125 -left-40" src="/homepage.jpeg" alt="" />
        <img fetchPriority="high" loading="eager" className="w-[50%] relative scale-125  -right-40" src="/homepage.jpeg" alt="" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-10 text-center">
        <h1 className="text-white sm:mt-20 font-helvetica text-4xl sm:text-[55px] md:text-[70px] leading-[1.27] tracking-[0px]">
          Transform Your Business With AI Phone Agents That{" "}
          <div className="word inline-block uppercase text-2xl sm:text-[50px]">
            <span style={{ color: "#8C01FA" }} className="block">Boost Business</span>
            <span style={{ color: "#8C01FA" }} className=" block">handle support 24/7</span>
            <span style={{ color: "#8C01FA" }} className="block">convert prospects</span>
            <span style={{ color: "#8C01FA" }} className="block">book appointments</span>
            <span style={{ color: "#8C01FA" }} className="block">prequalify leads</span>
            <span style={{ color: "#8C01FA" }} className="block">cold call leads</span>
            <span style={{ color: "#8C01FA" }} className="block">drive sales</span>
            <span style={{ color: "#8C01FA" }} className="block">reduce costs</span>
            <span style={{ color: "#8C01FA" }} className="block">sound human</span>
          </div>
        </h1>
        <p className="sm:text-lg text-sm font-helvetica md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Experience the future of customer communication with AI agents that
          sound indistinguishable from humans, available 24/7 at a fraction of
          the cost.
        </p>
        <div className="flex flex-row justify-center gap-4">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 border max-w-40 rounded-full">
            See A Demo 🎥
          </button>
          <BookDemoButton />
        </div>
        <TrustedBy/>
        <Feature />
      </div>
      <DialoftAI/>
      <div ref={descriptionRef}>
      </div>
      <AITelecalling />
      <CustomerReview />
      <NewThingsInAi />
      <Contact />
    </main>
  </div>
  )
}

export default Home