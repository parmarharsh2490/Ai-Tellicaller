// const industries = [
//   { label: 'Healthcare and Medical Practices', isPrimary: true },
//   { label: 'Real Estate', isPrimary: false },
//   { label: 'Financial Services', isPrimary: false },
//   { label: 'E-commerce & Retail', isPrimary: false },
//   { label: 'Education & Training', isPrimary: false },
//   { label: 'Hotel', isPrimary: false },
//   { label: 'SaaS', isPrimary: false },
//   { label: 'Home Services', isPrimary: false },
//   { label: 'Travels & Hospitality', isPrimary: false },
//   { label: 'Insurance Companies', isPrimary: false },
// ];

// interface IndustryLabelProps {
//   label: string;
//   // isPrimary: boolean;
// }

// const IndustryLabel = ({ label }: IndustryLabelProps) => (
//   <button
//     // className={`px-4 py-2 rounded-lg border transition-all ${
//     //   isPrimary
//     //     ? 'border-teal-500 bg-teal-500/10'
//     //     : 'border-gray-700 hover:border-purple-500/50'
//     // }`}
//     className='border h-auto w-auto py-3 px-3 uppercase rounded-full whitespace-nowrap'
//   >
//     {label}
//   </button>
// );

// const AiTelecallingComponent = () => (
//   <div className="bg-black text-white w-full ml-0 flex items-center justify-center ">
//     <div className="flex flex-col mt-5 max-w-7xl">
//      <div className='flex w-full'>
//      <div className='flex flex-col sm:w-[40%] items-center justify-center'>
//      <h1 className="text-4xl whitespace-nowrap">
//         AI Telecalling
//       </h1>
//         <h2 className='gradient-text-alt-4 text-4xl'>Across Industries</h2>

//      </div>
//       <div className="flex flex-wrap flex-cols max-w-[60%] gap-2">
//         {industries.map((industry, index) => (
//           <IndustryLabel
//             key={index}
//             label={industry.label}
//             // isPrimary={industry.isPrimary}
//           />
//         ))}
//       </div>
//      </div>

//     <div className="flex items-start gap-8 mt-20 ml-5" 
//     // style={{ height: '550px' }}
//     style={{
//       backgroundImage: "url('/background.jpeg')",
//       backgroundPosition: 'center',
//       backgroundSize: 'cover',
//       backgroundRepeat: 'no-repeat',
//       borderRadius: '8px', // Adjust if needed
//       paddingBottom: '40px',
//       // border : "2px solid red"
//     }}
//     >
//       <img
//         src="https://s3-alpha-sig.figma.com/img/7dca/cf70/4f862691c37fe51f16ff16915d81b94f?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PmM3v-cl8965rVEkMUKUHaafBCnJ23oTI~X5SqR1vuHIfIBv1d-6iiTv1teDhB6AWif5M8Y7nyJ8ERPCvEOcePKuqrCNtGPPngcScjvouSL3S5Qtsl5b22EHHojNB12ag2v8IIekTda8gFbNR2mqTJ9qlDSu2PhdOCAAmDOvqqnX2TaAjhFPFvmk~UlNZj17b4gDLeuYCV3WxIp1VyMWiYoSWnJ~4Yh8AY6sAbPJ~vfyvLGnTFxcc7Fux~ITSRvK6tGvcku~RpVitKSl4-8go7uXStCSAmkds~eJRQ9sUbpTPLlVO6LHz1XOTTK9DyCLKUYmdUS2TIXUFTw083hDxA__"
//         alt="Healthcare and Medical Practices"
//         className="w-full md:w-1/2 rounded-lg"
//         style={{ height: '400px',width : "550px" }}
//       />
//       <div className="w-full md:w-1/2 h-full" >
//         <h2 className="text-2xl md:text-3xl font-bold mb-4 text-start">
//         Healthcare & Medical Practices
//         </h2>
//         <p className="text-gray-400 text-start">
//         Provide appointment scheduling, answer basic health questions, and
//         manage patient records. Dialoft AI can handle appointment reminders
//         and cancellations, freeing up staff for other tasks. It can also
//         access and update patient records securely.
//         </p>
//       </div>
//     </div>
//     </div>
//   </div>
// );

// export default AiTelecallingComponent;
import React, { useState } from 'react';

const industries = [
  {
    label: 'Healthcare and Medical Practices',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Provide appointment scheduling, answer basic health questions, and manage patient records. Dialoft AI can handle appointment reminders and cancellations, freeing up staff for other tasks. It can also access and update patient records securely.'
  },
  {
    label: 'Real Estate',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Generate leads, schedule appointments, and answer property-related inquiries. Dialoft AI can qualify leads based on pre-defined criteria using demographic analysis and validation. It can also integrate with CRM systems to provide automated follow-ups.'
  },
  {
    label: 'Financial Services',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Dialoft AI manages financial services by answering queries about loans, investments, and account management. It can assist with transaction tracking, loan applications, and credit card services. Additionally, it provides personalized financial advice, fraud alerts, and real-time support, ensuring customer confidence and satisfaction.'
  },
  {
    label: 'E-commerce & Retail',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Handle customer support, process orders, and manage inventory inquiries. Dialoft AI can assist with product recommendations, order tracking, and returns processing.'
  },
  {
    label: 'Education & Training',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Provide student support, schedule classes, and manage registrations. Dialoft AI can answer questions about course offerings and schedules, as well as handle registration and enrollment processes. It can also provide personalized academic support.'
  },
  {
    label: 'Hotel',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Dialoft AI enhances the hospitality experience by assisting guests with booking accommodation needs, handle check-in/check-out procedures, and provide recommendations based on their preferences. It can help with room service requests, address guest inquiries and provide local travel tips. Guides can handle early check-in submissions, ensuring a seamless and personalized stay.'
  },
  {
    label: 'SaaS',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Dialoft AI simplifies SaaS customer support by providing instant answers about subscription plans, pricing, and features. It can assist with onboarding, troubleshoot issues, and guide users through product tutorials. With proactive notifications and personalized recommendations, Dialoft AI enhances user experiences and improves customer retention.'
  },
  {
    label: 'Home Services',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Dialoft AI simplifies home service management by offering efficient solutions to schedule services, track technician progress, coordinate site visits, and handle billing and payments. It automates reminders and service follow-ups, and provides personalized recommendations based on service history. For service providers, it ensures seamless communication between customers and service providers, enhancing satisfaction and reliability.'
  },
  {
    label: 'Travels & Hospitality',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Dialoft AI elevates travel and hospitality services by offering personalized travel suggestions, booking accommodations, and planning itineraries. It can answer queries about destinations, transportation options, and hotel amenities. Additionally, it ensures a seamless experience by managing cancellations, rescheduling, and providing real-time updates.'
  },
  {
    label: 'Insurance Companies',
    image: 'https://s3-alpha-sig.figma.com/img/4403/b3f1/979dba6c83b1d1ff56312525d5f2d530?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Oar3zjB42~ZjnOR7j2mgC0yBsIymnOYuSdCyt5yoQ66YIX8Mp1cwTof-F2~-WXQQU5HCpIImULpUYAb2sZffEDDBTgJ2NQBkH7cQqvzfNE6ALx41dLFY836dIejccWiruILz5EgqFqKcMAAszka~hTA2Me4Qsgxq67OwR4h4RjHs3Qg6ypB1EANsxmv1cKt9fiRTfnudIGghJO0DvvZ1eEayEbPf~TEJChnOsISZxKYnm8Crz9aevS-~8zTissnn1SRYN~ln0HwnwxGbJDaN4BZbZh42Ynyq2oRGyhiv9Y7i2zcza5KUn4oJsKHFX0Gj7onxLh7dEYvF1Ajms~YtoQ__',
    description: 'Handle policy inquiries, provide information, and guide customers through the process. Dialoft AI can collect initial claim information and route it to the appropriate department. It can also answer frequently asked questions about policy coverage and benefits.'
  }
];

const IndustryLabel = ({ label, isActive, onClick }) => (
  <button
    className={`border text-xs sm:text-sm h-auto w-auto p-2 sm:p-3 uppercase rounded-full whitespace-nowrap transition-all ${
      isActive ? 'border-teal-500 bg-teal-500/10' : 'border-gray-700 hover:border-purple-500/50'
    }`}
    onClick={onClick}
  >
    {label}
  </button>
);

const AiTelecallingComponent = () => {
  const [selectedIndustry, setSelectedIndustry] = useState(industries[0]);

  return (
    <div
    style={{
      backgroundImage: "url('/background.jpeg')",
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      borderRadius: '8px', // Adjust if needed
      paddingBottom: '40px',
      // border : "2px solid red"
    }}
     className="bg-black text-white w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div className="mb-8 md:mb-0">
            <h1 className="text-4xl font-bold">AI Telecalling</h1>
            <h2 className="text-teal-400 text-4xl">Across Industries</h2>
          </div>
          <div className="flex flex-wrap gap-2 max-w-full md:max-w-[60%]">
            {industries.map((industry) => (
              <IndustryLabel
                key={industry.label}
                label={industry.label}
                isActive={selectedIndustry.label === industry.label}
                onClick={() => setSelectedIndustry(industry)}
              />
            ))}
          </div>
        </div>

        <div className="mt-12  rounded-lg">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/2">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.label}
                className="w-full rounded-lg object-cover h-96"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">{selectedIndustry.label}</h2>
              <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">
                {selectedIndustry.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTelecallingComponent;