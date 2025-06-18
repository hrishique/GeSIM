import { Check, Smartphone, CreditCard, Globe, Zap, Shield } from 'lucide-react';
import { FeatureCard } from './FeatureCard';
import { ComparisonCard } from './ComparisonCard';

const ESIMSection = () => {
  const traditionalFeatures = [
    "Physical card to insert",
    "Need multiple SIMs for different countries", 
    "Easily lost or damaged",
    "Limited to one carrier"
  ];

  const esimFeatures = [
    { text: "Digital profile - no physical card", icon: Smartphone },
    { text: "One eSIM works globally", icon: Globe },
    { text: "Instant activation via QR code", icon: Zap },
    { text: "Blockchain-secured connectivity", icon: Shield }
  ];

  return (
    <section className="rounded-md py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl  font-bold text-white mb-8">
            What is <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">GeSIM?</span>
          </h1>
          <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
           GeSIM is a decentralized platform for buying and managing eSIM
                data plans using the power of smart contracts. It connects
                global users to the nearest local telecom networks through
                on-chain identity, enabling flexible switching to better
                operators — all while using tokenized payments with a
                pay-as-you-go model.
          </p>
        </div>

        {/* Comparison Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-3xl font-bold text-white text-center mb-12">
           Physical SIM vs GeSIM 
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Traditional SIM Card */}
            <ComparisonCard
              title="Traditional SIM"
              type="traditional"
              features={traditionalFeatures}
            />

            {/* GeSIM Card */}
            <ComparisonCard
              title="GeSIM"
              type="esim"
              features={esimFeatures}
            />
          </div>
        </div>

        {/* Visual Comparison */}
        {/* <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-slate-300 mb-6">Physical SIM</h3>
            <div className="w-32 h-20 mx-auto bg-slate-600 rounded-lg flex items-center justify-center mb-4">
              <CreditCard className="w-8 h-8 text-slate-400" />
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-slate-600 rounded w-3/4 mx-auto"></div>
              <div className="h-2 bg-slate-600 rounded w-1/2 mx-auto"></div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-purple-800/30 to-blue-800/30 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-8 text-center">
            <h3 className="text-xl font-semibold text-white mb-6">GeSIM</h3>
            <div className="w-32 h-20 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/30 to-pink-400/30"></div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center relative z-10">
                <div className="w-6 h-6 bg-white/40 rounded-full"></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded w-3/4 mx-auto"></div>
              <div className="h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded w-1/2 mx-auto"></div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default ESIMSection;
