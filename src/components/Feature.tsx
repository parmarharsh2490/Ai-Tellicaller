import React from 'react';
import { Clock, DollarSign, Cog, Activity, BarChart3, LineChart } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: { 
  icon: React.ElementType, 
  title: string, 
  description: string[] 
}) => (
  <div className="p-6 rounded-lg border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
    <div className="mb-4">
      <Icon className="w-8 h-8 text-purple-500" />
    </div>
    <h3 className="text-lg font-semibold mb-2 text-start">{title}</h3>
   <ul className='pl-6'>
   {
        description.map((description) => (
            <li className="text-gray-400 text-sm text-start list-disc">{description}</li>
        ))
    }
   </ul>
  </div>
);


const StatCard = ({ value, label, color }: { value: string; label: string; color: string }) => (
    <div className="flex items-center gap-6">
      <div>
        <div className={`text-4xl md:text-5xl font-bold ${color}`}>
          {value}
        </div>
        <div className="mt-2  md:text-xs text-start" style={{color : "#C4C4C4"}}>
          {label}
        </div>
      </div>
      
      {/* Gradient Divider */}
      {value !== "50%" && <div className="h-16 w-[2.54px] bg-gradient-to-b from-transparent via-white to-transparent opacity-20"></div>}
    </div>
  );
  

const Feature = () => {
const features = [
    {
        icon: Clock,
        title: "24/7 Availability",
        description: [
            "Always there when you need it.",
            "No nights or weekends off.",
            "Cost effective service 24/7, at a fraction of the cost."
        ]
    },
    {
        icon: DollarSign,
        title: "Cost Saving",
        description: [
            "Reduce operational costs with 24/7 Service.",
            "Manage human agents efficiently at a fraction of the cost."
        ]
    },
    {
        icon: Cog,
        title: "Efficiency",
        description: [
            "Smart automation helps you save time.",
            "Increase productivity and drive real business results."
        ]
    },
    {
        icon: Activity,
        title: "Actionable Capabilities",
        description: [
            "Take real action like scheduling appointments and making bank transfers.",
            "Not just answering questions but taking real actions."
        ]
    },
    {
        icon: BarChart3,
        title: "Scalability",
        description: [
            "Scale up or down as needed with our AI Phone Agents.",
            "Perfect for managing varying call volumes across your business hours."
        ]
    },
    {
        icon: LineChart,
        title: "Advanced Analytics and Insights",
        description: [
            "Get deep insights into customer interactions, trends, and performance metrics.",
            "Continuously improve your service."
        ]
    }
];

  const stats = [
    { value: "500X", label: "MORE EFFICIENT", color : "gradient-text-alt-1" },
    { value: "Zero", label: "WAITING TIME", color : "gradient-text-alt-2" },
    { value: "120,000+", label: "COMPLETED CALLS AND COUNTING", color : "gradient-text-alt-3"  },
    { value: "50%", label: "ROI IN 30 DAYS", color : "gradient-text-alt-4"}
  ];

  return (
    <div className="w-full bg-black text-white py-20">
      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Features
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        {/* Dialoft AI in Numbers Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Dialoft AI In{' '}
            <span className="text-blue-500">Numbers</span>
          </h2>
          
          <div className="flex items-center gap-12 justify-center">
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
      </div>
    </div>
  );
};

export default Feature;