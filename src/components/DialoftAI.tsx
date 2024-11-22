const StatCard = ({ value, label, color }: { value: string; label: string; color: string }) => (
    <div className="flex items-center gap-3 sm:gap-6">
      <div>
        <div className={`text-xl text-center sm:text-2xl md:text-5xl font-bold ${color}`}>
          {value}
        </div>
        <div className="mt-2 text-xs  text-center" style={{color : "#C4C4C4"}}>
          {label}
        </div>
      </div>
      {/* Gradient Divider */}
      {value !== "50%" && <div className="h-16 w-[2.54px] bg-gradient-to-b from-transparent via-white to-transparent opacity-20"></div>}
    </div>
  );
  
const DialoftAI = () => {
    const stats = [
        { value: "500X", label: "MORE EFFICIENT", color : "gradient-text-alt-1" },
        { value: "Zero", label: "WAITING TIME", color : "gradient-text-alt-2" },
        { value: "120,000+", label: "COMPLETED CALLS AND COUNTING", color : "gradient-text-alt-3"  },
        { value: "50%", label: "ROI IN 30 DAYS", color : "gradient-text-alt-4"}
      ];
  return (
    <div className='flex flex-col sm:mb-20 mb-14'>
    {/* <div className="bg-[#dc8de6] absolute right-0 w-[50%] h-[100px] blur blur-4xl z-0"></div> */}
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
      Dialoft AI In{' '}
      <span className="text-blue-500">Numbers</span>
    </h2>
    
    <div className="flex items-center gap-2 sm:gap-12 justify-center">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          value={stat.value}
          label={stat.label}
          color={stat.color}
        />
      ))}
    </div>
  </div>
  )
}

export default DialoftAI