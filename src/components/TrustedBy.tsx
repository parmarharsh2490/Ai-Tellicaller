const TrustedBy = () => {
  const logos = [
    { src: "/google.png", alt: "Google", invert: false },
    { src: "/Zapier.png", alt: "Zapier", invert: true },
    { src: "/Twilio.png", alt: "Twilio", invert: true },
    { src: "/Stripe.png", alt: "Stripe", invert: true },
    // { src: "/IIElevenLabs.png", alt: "Eleven Labs", invert: true },
    // { src: "/highLevel2.png", alt: "High Level", invert: true },
  ];

  return (
    <>
      <h1 style={{ color: "#618ADC" }} className="text-lg uppercase mt-10">Trusted By</h1>
      <div className="flex items-center justify-around flex-wrap gap-2 sm:gap-10 ">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="w-24 h-24 sm:w-28 sm:h-28  flex items-center justify-center"
          >
            <img
              className={` max-w-full max-h-full object-contain ${logo.invert ? 'invert' : ''}`}
              src={logo.src}
              alt={logo.alt}
            />

          </div>
        ))}
      <img src="/IIElevenLabs.png" className="w-32 h-32 invert" alt="" />
      <img src="/highLevel2.png" className="w-24 sm:w-32 h-12 invert" alt="" />
      </div>
    </>
  )
}

export default TrustedBy