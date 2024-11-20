// import { useEffect, useState } from "react";
import AITelecalling from "./components/AITelecalling";
import BookDemoButton from "./components/BookDemoButton";
import Contact from "./components/Contact";
import CustomerReview from "./components/CustomerReview";
import Feature from "./components/Feature";
import Navigation from "./components/Navigation";
import NewThingsInAi from "./components/NewThingsInAi";
// import TrustedBy from "./components/TrustedBy";

const App = () => {
  // const words = ["Doctors", "Engineers", "Boost Business"]; // Words to rotate
  // const [currentWordIndex, setCurrentWordIndex] = useState(0);
  // const [isAnimating, setIsAnimating] = useState(false);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIsAnimating(true); // Start animation
  //     setTimeout(() => {
  //       setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length); // Change text
  //       setIsAnimating(false); // Reset animation
  //     }, 500); // Match animation duration
  //   }, 2500); // Total cycle duration (2s display + 0.5s animation)

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="relative">
        <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Transform Your Business With AI Phone Agents That{" "}
            <span style={{ color: "#8C01FA" }}>Boost Business</span>
            {/* <span
              style={{ color: "#8C01FA" }}
              className={`inline-block min-w-[300px] relative ${
                isAnimating ? "animate-slide-up" : ""
              }`}
            >
              {words[currentWordIndex]}
            </span> */}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
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
          {/* <TrustedBy/> */}
          <Feature />
        </div>
        <AITelecalling />
        <CustomerReview />
        <NewThingsInAi />
        <Contact />
      </main>
    </div>
  );
};

export default App;
