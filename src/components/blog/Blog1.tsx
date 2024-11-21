import { BookOpen, Phone, Globe, Shield, BarChart2 } from 'lucide-react';
import { useEffect } from 'react';

const Blog1 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])
    
    return (
        <div className="bg-gradient-to-br from-gray-900 to-black text-white min-h-screen py-12">
            <div className="container mx-auto px-4 max-w-4xl">
                {/* Header Section */}
                <div className="bg-gray-800 rounded-xl shadow-2xl overflow-hidden mb-8">
                    <img 
                        className="w-full h-96 object-cover"
                        src="https://s3-alpha-sig.figma.com/img/d2bf/c323/360b877ce3514fd0bc829f06a0c4e8f5?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oiReCtvwb-fN60uMFpPn2b3-LRbN3v7eHTb9r588E4T8aOUaa3ck8v3~0kRWiBv5zflonZYmh13EklpDZ-V~pxqQqCJPLpPjfaag95Aa43nafDHesU2knAnaf1lg4tk98UYT3xjXhYnrrCdUNgna8D7M2xaLFSLRRPS1OzT1-AQMLMmNB6k34EQv3gHgXxvO9oZ36mPtDsMAV8yE0LIyyvnY1zoZ7jtSq10GrRvI8dpWlCanDPdF6GQpwej9IILuAURpl1hMiXtzk0Fhxqk1Pg0Rask-U4lIjMDaSMyw9tSoB7deRBU-YYNCrJveSo3DVfiakXt1n2xNmcaon~3hhQ__" 
                        alt="AI Telecalling Transformation" 
                    />
                </div>

                {/* Content Section */}
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Revolutionize Your Customer Communication
                    </h1>

                    {/* Introduction */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <p className="text-lg leading-relaxed text-gray-300">
                            In today's hyper-connected world, customer communication is the lifeline of any successful business. But what if you could supercharge your customer engagement without the traditional limitations of human-only call centers?
                        </p>
                    </div>

                    {/* Key Benefits */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                            <BookOpen className="w-12 h-12 text-blue-500 mb-4" />
                            <h2 className="text-2xl font-bold mb-3 text-blue-400">24/7 Availability</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Never miss a potential lead</li>
                                <li>Instant support at any time</li>
                                <li>Eliminate waiting times</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                            <Phone className="w-12 h-12 text-green-500 mb-4" />
                            <h2 className="text-2xl font-bold mb-3 text-green-400">Unmatched Scalability</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>Handle 500x more calls</li>
                                <li>Manage peak call volumes</li>
                                <li>Expand reach instantly</li>
                            </ul>
                        </div>
                        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                            <Globe className="w-12 h-12 text-purple-500 mb-4" />
                            <h2 className="text-2xl font-bold mb-3 text-purple-400">Cost-Effective</h2>
                            <ul className="list-disc list-inside text-gray-300 space-y-2">
                                <li>95% cost reduction</li>
                                <li>No training costs</li>
                                <li>50% ROI in 30 days</li>
                            </ul>
                        </div>
                    </div>

                    {/* Industries */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-6 text-center text-blue-400">
                            Transforming Industries
                        </h2>
                        <div className="grid md:grid-cols-3 gap-4 text-center">
                            {[
                                'Real Estate', 
                                'Healthcare', 
                                'E-commerce', 
                                'Insurance', 
                                'Education', 
                                'Finance'
                            ].map((industry, index) => (
                                <div key={index} className="bg-gray-700 p-4 rounded-lg hover:bg-gray-600 transition-all">
                                    {industry}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Technology Highlights */}
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
                        <h2 className="text-3xl font-bold mb-6 text-center text-green-400">
                            Advanced Technology
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div>
                                <Shield className="w-12 h-12 text-red-500 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-red-400">Security First</h3>
                                <p className="text-gray-300">
                                    Industry-standard security protocols protecting your data integrity.
                                </p>
                            </div>
                            <div>
                                <BarChart2 className="w-12 h-12 text-yellow-500 mb-4" />
                                <h3 className="text-xl font-bold mb-3 text-yellow-400">Smart Analytics</h3>
                                <p className="text-gray-300">
                                    Gain deep insights into customer interactions and behavior.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Call to Action */}
                    <div className="bg-blue-900 p-8 rounded-xl text-center shadow-2xl">
                        <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Communication?</h2>
                        <p className="text-lg mb-6 text-blue-100">
                            Experience the future of customer interaction with our AI Telecalling solution.
                        </p>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105 shadow-lg">
                            Book Your Demo Now
                        </button>
                    </div>

                    {/* Disclaimer */}
                    <div className="text-center text-sm text-gray-500 mt-4">
                        Disclaimer: Results may vary based on specific business requirements and implementation.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog1;