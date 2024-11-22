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
  return (
    <div className="min-h-screen bg-black text-white">
    <Navigation />
    <main className="relative">
    <div className="absolute flex items-center justify-center gap-10 top-0 left-0 overflow-hidden">
        <img className="w-[50%] relative scale-125 -left-40" src="https://s3-alpha-sig.figma.com/img/9577/caca/18dc7bbbafd23d2f87e0d55115de2444?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NroNm8JYxXh9r~jLthm6FLJwlOC3HMVoKOiNDLcDqX9EXRCVAElL1YkbPlBk6LFlqcqxY47ObxAcLQSEoTNEAg198f05ay0Kob3IDiggS12~P5YyUeEF5vk-2~9ntjW5zfOUcDwyH4uc7MxbsbPGYTjBk3HPnvtzxHcfg-ixRdCtLqB21eUvWYLD1zPdP7mEkeemoCgxdMlwtS3Hua2c5P99gUx8BCIhErpiXbxqkyhLgmcP5QhC6xfVgJ24i~7wqACSnUv57dZVO-MCxXqOeGJt5Pm3~KSdaZpUKccyj~On2Dve~h0Zk1~Ppds3ANiANyfbH7CejxchYjKad5TQog__" alt="" />
        <img className="w-[50%] relative scale-125  -right-40" src="https://s3-alpha-sig.figma.com/img/9577/caca/18dc7bbbafd23d2f87e0d55115de2444?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NroNm8JYxXh9r~jLthm6FLJwlOC3HMVoKOiNDLcDqX9EXRCVAElL1YkbPlBk6LFlqcqxY47ObxAcLQSEoTNEAg198f05ay0Kob3IDiggS12~P5YyUeEF5vk-2~9ntjW5zfOUcDwyH4uc7MxbsbPGYTjBk3HPnvtzxHcfg-ixRdCtLqB21eUvWYLD1zPdP7mEkeemoCgxdMlwtS3Hua2c5P99gUx8BCIhErpiXbxqkyhLgmcP5QhC6xfVgJ24i~7wqACSnUv57dZVO-MCxXqOeGJt5Pm3~KSdaZpUKccyj~On2Dve~h0Zk1~Ppds3ANiANyfbH7CejxchYjKad5TQog__" alt="" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 py-10 text-center">
        <h1 className="text-white sm:mt-20 font-helvetica text-4xl sm:text-[55px] md:text-[70px] leading-[1.27] tracking-[0px]">
          Transform Your Business With AI Phone Agents That{" "}
          <div className="word inline-block text-4xl sm:text-[50px]">
            <span style={{ color: "#8C01FA" }} className=" block">Boost Business</span>
            <span style={{ color: "#8C01FA" }} className=" block">Engineers</span>
            <span style={{ color: "#8C01FA" }} className="block">Doctors</span>
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
      <AITelecalling />
      <CustomerReview />
      <NewThingsInAi />
      <Contact />
    </main>
  </div>
  )
}

export default Home