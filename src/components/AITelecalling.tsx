const industries = [
  { label: 'Healthcare and Medical Practices', isPrimary: true },
  { label: 'Real Estate', isPrimary: false },
  { label: 'Financial Services', isPrimary: false },
  { label: 'E-commerce & Retail', isPrimary: false },
  { label: 'Education & Training', isPrimary: false },
  { label: 'Hotel', isPrimary: false },
  { label: 'SaaS', isPrimary: false },
  { label: 'Home Services', isPrimary: false },
  { label: 'Travels & Hospitality', isPrimary: false },
  { label: 'Insurance Companies', isPrimary: false },
];

interface IndustryLabelProps {
  label: string;
  // isPrimary: boolean;
}

const IndustryLabel = ({ label }: IndustryLabelProps) => (
  <button
    // className={`px-4 py-2 rounded-lg border transition-all ${
    //   isPrimary
    //     ? 'border-teal-500 bg-teal-500/10'
    //     : 'border-gray-700 hover:border-purple-500/50'
    // }`}
    className='border h-auto w-auto py-3 px-3 uppercase rounded-full whitespace-nowrap'
  >
    {label}
  </button>
);

const AiTelecallingComponent = () => (
  <div className="bg-black text-white w-full ml-0 flex items-center justify-center ">
    <div className="flex flex-col mt-5 max-w-7xl">
     <div className='flex w-full'>
     <div className='flex flex-col sm:w-[40%] items-center justify-center'>
     <h1 className="text-4xl whitespace-nowrap">
        AI Telecalling
      </h1>
        <h2 className='gradient-text-alt-4 text-4xl'>Across Industries</h2>

     </div>
      <div className="flex flex-wrap flex-cols max-w-[60%] gap-2">
        {industries.map((industry, index) => (
          <IndustryLabel
            key={index}
            label={industry.label}
            // isPrimary={industry.isPrimary}
          />
        ))}
      </div>
     </div>

    <div className="flex items-start gap-8 mt-20 ml-5" style={{ height: '550px' }}>
      <img
        src="https://s3-alpha-sig.figma.com/img/7dca/cf70/4f862691c37fe51f16ff16915d81b94f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PmM3v-cl8965rVEkMUKUHaafBCnJ23oTI~X5SqR1vuHIfIBv1d-6iiTv1teDhB6AWif5M8Y7nyJ8ERPCvEOcePKuqrCNtGPPngcScjvouSL3S5Qtsl5b22EHHojNB12ag2v8IIekTda8gFbNR2mqTJ9qlDSu2PhdOCAAmDOvqqnX2TaAjhFPFvmk~UlNZj17b4gDLeuYCV3WxIp1VyMWiYoSWnJ~4Yh8AY6sAbPJ~vfyvLGnTFxcc7Fux~ITSRvK6tGvcku~RpVitKSl4-8go7uXStCSAmkds~eJRQ9sUbpTPLlVO6LHz1XOTTK9DyCLKUYmdUS2TIXUFTw083hDxA__"
        alt="Healthcare and Medical Practices"
        className="w-full md:w-1/2 rounded-lg"
        style={{ height: '400px',width : "550px" }}
      />
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-start">
        Healthcare & Medical Practices
        </h2>
        <p className="text-gray-400 text-start">
        Provide appointment scheduling, answer basic health questions, and
        manage patient records. Dialoft AI can handle appointment reminders
        and cancellations, freeing up staff for other tasks. It can also
        access and update patient records securely.
        </p>
      </div>
    </div>
    </div>
  </div>
);

export default AiTelecallingComponent;