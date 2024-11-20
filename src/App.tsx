import AITelecalling from "./components/AITelecalling";
import BookDemoButton from "./components/BookDemoButton";
import Contact from "./components/Contact";
import CustomerReview from "./components/CustomerReview";
import Feature from "./components/Feature";
import Navigation from "./components/Navigation";
import NewThingsInAi from "./components/NewThingsInAi";

const App = () => {
  // const trustedCompanies = [
  //   { name: 'Brave', alt: 'Brave logo' },
  //   { name: 'Circle', alt: 'Circle logo' },
  //   { name: 'Discord', alt: 'Discord logo' },
  //   { name: 'Google', alt: 'Google logo' },
  //   { name: 'Jump', alt: 'Jump logo' },
  //   { name: 'Lululemon', alt: 'Lululemon logo' },
  //   { name: 'Magic Eden', alt: 'Magic Eden logo' }
  // ];
  return (
    <div className="min-h-screen bg-black text-white">
    {/* Navigation */}
    <Navigation/>
    {/* Hero Section */}
    <main className="relative"> 
      {/* Background Gradients */}
      <div className="absolute flex items-center justify-center gap-10 top-0 left-0 overflow-hidden">
        <img className="w-[50%] relative -left-40" src="https://s3-alpha-sig.figma.com/img/9577/caca/18dc7bbbafd23d2f87e0d55115de2444?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NroNm8JYxXh9r~jLthm6FLJwlOC3HMVoKOiNDLcDqX9EXRCVAElL1YkbPlBk6LFlqcqxY47ObxAcLQSEoTNEAg198f05ay0Kob3IDiggS12~P5YyUeEF5vk-2~9ntjW5zfOUcDwyH4uc7MxbsbPGYTjBk3HPnvtzxHcfg-ixRdCtLqB21eUvWYLD1zPdP7mEkeemoCgxdMlwtS3Hua2c5P99gUx8BCIhErpiXbxqkyhLgmcP5QhC6xfVgJ24i~7wqACSnUv57dZVO-MCxXqOeGJt5Pm3~KSdaZpUKccyj~On2Dve~h0Zk1~Ppds3ANiANyfbH7CejxchYjKad5TQog__" alt="" />
        <img className="w-[50%] relative -right-40" src="https://s3-alpha-sig.figma.com/img/9577/caca/18dc7bbbafd23d2f87e0d55115de2444?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NroNm8JYxXh9r~jLthm6FLJwlOC3HMVoKOiNDLcDqX9EXRCVAElL1YkbPlBk6LFlqcqxY47ObxAcLQSEoTNEAg198f05ay0Kob3IDiggS12~P5YyUeEF5vk-2~9ntjW5zfOUcDwyH4uc7MxbsbPGYTjBk3HPnvtzxHcfg-ixRdCtLqB21eUvWYLD1zPdP7mEkeemoCgxdMlwtS3Hua2c5P99gUx8BCIhErpiXbxqkyhLgmcP5QhC6xfVgJ24i~7wqACSnUv57dZVO-MCxXqOeGJt5Pm3~KSdaZpUKccyj~On2Dve~h0Zk1~Ppds3ANiANyfbH7CejxchYjKad5TQog__" alt="" />
        {/* <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" /> */}
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Transform Your Business With AI Phone Agents That{' '}
          <span style={{color : "#8C01FA"}}>Doctors</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Experience the future of customer communication with AI agents that sound 
          indistinguishable from humans, available 24/7 at a fraction of the cost
        </p>

        <div className="flex flex-row justify-center gap-4">
          <button className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-3 border max-w-40 rounded-full">
            See A Demo 🎥
          </button>
          <BookDemoButton/>
        </div>

        {/* Trusted By Section */}
        {/* <div className="mt-20">
          <p className="text-sm text-gray-400 mb-8" style={{color: "#618ADC"}}>TRUSTED BY</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            {trustedCompanies.map((company) => (
              <img
                key={company.name}
                src={`/api/placeholder/120/40`}
                alt={company.alt}
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
              />
            ))}
          </div>
        </div> */}
        <Feature/>
      </div>
        <AITelecalling/>
        <CustomerReview/>
        <NewThingsInAi/>
        <Contact/>
    </main> 

  </div>
  )
}

export default App