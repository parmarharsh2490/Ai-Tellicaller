import { useState } from "react";
import { useNavigate } from "react-router-dom"

const NewThingsInAi = () => {
  const [description] = useState("The AI telecaller on  clients informed with efficient updates. Facilisis quisque orci lectus sed nulla; the AI's performance is smooth and highly responsive, making it easy for our team to manage inquiries. Amet, consectetur adipiscing elit, the tool's adaptability to our business needs is impressive. Overall, an excellent addition to our operations—would highly recommend!")
  const navigate = useNavigate();
  return (
   <div className='flex flex-col items-center justify-center'>
     <div className="flex p-5 items-center flex-col md:flex-row justify-center max-w-7xl ">
     <h1 className="text-start sm:hidden text-2xl font-bold w-full font-helvetica my-2 py-2">Blogs</h1>
    <img 
    loading="lazy"
    className="hidden sm:block border md:w-[50%] w-full  rounded-lg min-w-[50%]"
     src="https://s3-alpha-sig.figma.com/img/d2bf/c323/360b877ce3514fd0bc829f06a0c4e8f5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oiReCtvwb-fN60uMFpPn2b3-LRbN3v7eHTb9r588E4T8aOUaa3ck8v3~0kRWiBv5zflonZYmh13EklpDZ-V~pxqQqCJPLpPjfaag95Aa43nafDHesU2knAnaf1lg4tk98UYT3xjXhYnrrCdUNgna8D7M2xaLFSLRRPS1OzT1-AQMLMmNB6k34EQv3gHgXxvO9oZ36mPtDsMAV8yE0LIyyvnY1zoZ7jtSq10GrRvI8dpWlCanDPdF6GQpwej9IILuAURpl1hMiXtzk0Fhxqk1Pg0Rask-U4lIjMDaSMyw9tSoB7deRBU-YYNCrJveSo3DVfiakXt1n2xNmcaon~3hhQ__" alt="" />
    <img 
     loading="lazy"
     style={{ objectFit: "cover", aspectRatio: "4/3" }}
    className="sm:hidden w-screen  max-h-80 rounded-md"
     src="https://s3-alpha-sig.figma.com/img/d2bf/c323/360b877ce3514fd0bc829f06a0c4e8f5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oiReCtvwb-fN60uMFpPn2b3-LRbN3v7eHTb9r588E4T8aOUaa3ck8v3~0kRWiBv5zflonZYmh13EklpDZ-V~pxqQqCJPLpPjfaag95Aa43nafDHesU2knAnaf1lg4tk98UYT3xjXhYnrrCdUNgna8D7M2xaLFSLRRPS1OzT1-AQMLMmNB6k34EQv3gHgXxvO9oZ36mPtDsMAV8yE0LIyyvnY1zoZ7jtSq10GrRvI8dpWlCanDPdF6GQpwej9IILuAURpl1hMiXtzk0Fhxqk1Pg0Rask-U4lIjMDaSMyw9tSoB7deRBU-YYNCrJveSo3DVfiakXt1n2xNmcaon~3hhQ__" alt="" />
    <div className="flex  flex-col mt-2 items-center justify-center px-3 sm:px-6">
      <h1 className="hidden sm:block text-start text-2xl md:text-3xl font-bold w-full font-helvetica my-2">Blogs</h1>
      <h1 className="text-start text-2xl md:text-3xl font-bold w-full font-helvetica">New Things In AI</h1>
      <p className="mt-4 text-sm md:text-[14px] xl:text-[16px] leading-2">{description}</p>
      <div className="flex items-start justify-start mt-4 w-full">
      <button onClick={() => navigate('/blog3')} className="border md:py-3 py-2 px-3 rounded-xl md:px-6 max-w-40">Read More</button>
      </div>
    </div>
  </div>
  <div className="flex gap-3 p-5 w-screen sm:flex-row flex-col items-center justify-around max-w-7xl">
          <div className="flex flex-col sm:max-w-sm">
            <img
             loading="lazy"
               style={{ objectFit: "cover", aspectRatio: "4/3" }}
              className="w-screen max-h-80 rounded-md"
            src="https://s3-alpha-sig.figma.com/img/6aa5/f7b6/ab44e3958f3677b006c96761286cc599?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DVWLG2MGdeR56D9FEnnuNV3Hbm4KlsAh8xh1OGvEJuzr8MUSdg-OahAXYE-U43f5wV2QQxUdZ50cmAITVuZysB1D1e8MypCzxhjSWYgboc-p5wlij34qtBk9kcWDNxxuolt2L9cK9a7zhrpJ5SGUKlzk5Og65i2wORdNNPYDoXrDuo~t77jB3wMY5NOnxmFrsaWFkqTWnCXtN~5pNCEHJeXgS5ajFQebPYQagOK3kce320as-YbG6KmpmCOJAB36jCOy6C1MUUG45WaRVUkSE0kD9DzXEBbv5DAgUz~2-44MX5i1ZC3dILWUV24UG4~BK1FcwvDr2moUPe~7WfFtgA__" alt="" />
           <div className="p-3 flex flex-col items-start justify-center gap-4">
           <h1 className="font-bold text-2xl md:text-2xl xl:text-3xl font-helvetica">New Things In AI</h1>

            <p className="text-sm sm:text-[16px] leading-2">{description}</p>
            <button onClick={() => navigate('/blog3')} className=" font-helvetica border xl:py-3 py-2 px-3 rounded-xl xl:px-6 max-w-40">Read More</button>
           </div>
          </div>
          <div className="flex flex-col sm:max-w-sm ">
          <img
           loading="lazy"
               style={{ objectFit: "cover", aspectRatio: "4/3" }}
             className="w-screen max-h-80 rounded-md"
  src="https://s3-alpha-sig.figma.com/img/1c10/f1c5/2a3f8d29c7eb603b054d1563e64efad0?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YIYzF5IU2Avyon238tFCkxGmRcxf~3hWTTmQy79d~RvouU67LqXCDcL5Fv3XzZodtkeGB5fLyEOPvRF2Im8qjP5Z9pL9X0ni~A6VMOIRxwVSgYLbi6xhCmTTs7NjfTLj4h29YUPHJ14cTg9w-ppnsxCRYhRsW0yHq8UcF0-O-K6yfD~FDbGgExr0SMZpdEH29aYw7Fw0fVTSuj1W3yg8ll5LZot0nNBdZ9AAb5g8Sy61y6X3KuL0IU7On9meuPHfT143c2G9VEuR3cbrdCS9tgb4KM1jBc1Aw1-x9YP-obMJB-r7DcjMJFwycaVNZhEoX4LVY7uOnffKX~WshAeO5g__" alt=""  />
           <div className="p-3 flex flex-col items-start justify-center gap-4">
           <h1 className="font-bold text-2xl md:text-2xl xl:text-3xl font-helvetica">New Things In AI</h1>

            <p className="text-sm sm:text-[16px] leading-2">{description}</p>
            <button onClick={() => navigate('/blog3')} className=" font-helvetica border xl:py-3 py-2 px-3 rounded-xl xl:px-6 max-w-40">Read More</button>


           </div>
          </div>
          <div className="flex flex-col sm:max-w-sm ">
          <img
           loading="lazy"
                style={{ objectFit: "cover", aspectRatio: "4/3" }}
              className="w-screen max-h-80 rounded-md"
               src="https://s3-alpha-sig.figma.com/img/7033/0370/48808db0b5dbfb2fdb026ca71069a664?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iJ7k0DrCTbg5Y3xYmQE8sQCnrWgMy6QNLlHXGkiNB~lf~UKg6DMw3uqSclK533flA0~CdLTMAW41W5suf1LXbUf1vkR2rl15et29Onm6W-jE7xU40p6-vFs~2L1-blb9N9reei0~z4zco4-Y-8Bd8IgbUvyO8DHJLQEe-AvgQZFxAsx4E-HPiLpdEbElkxHASUrvQdaWV7fIvq-MB37gDSx~-LXeYQFehgT8m7ieLUzXn1mgdNZdtT1lfzmB~YVj3tee~2R~yGzVXjc2e0ot7euUVTexmHaSDggVAdcPh4JaC~S5hXItJtfTGLIgHLhzsoFPGywpESD4khCkUregqQ__" alt="" />
           <div className="p-3 flex flex-col items-start justify-center gap-4">
           <h1 className="font-bold text-2xl md:text-2xl xl:text-3xl font-helvetica">New Things In AI</h1>
            <p className="text-sm sm:text-[16px] leading-2">{description}</p>
            <button onClick={() => navigate('/blog3')} className=" font-helvetica border xl:py-3 py-2 px-3 rounded-xl xl:px-6 max-w-40">Read More</button>

           </div>
          </div>
          
          
          
        </div>
   </div>
  )
}

export default NewThingsInAi