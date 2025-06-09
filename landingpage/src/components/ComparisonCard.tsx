import { Check, X } from 'lucide-react';

interface ComparisonCardProps {
  title: string;
  type: 'traditional' | 'esim';
  features: Array<string | { text: string; icon: any }>;
}

export const ComparisonCard = ({ title, type, features }: ComparisonCardProps) => {
  const isESIM = type === 'esim';
  
  return (
    <div className={`
      relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl
      ${isESIM 
        ? 'bg-gradient-to-br from-purple-800/20 to-pink-800/20 border border-purple-500/30 hover:border-purple-400/50' 
        : 'bg-slate-800/50 border border-slate-700/50 hover:border-slate-600/70'
      }
    `}>
      {isESIM && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Recommended
          </span>
        </div>
      )}
      
      <h3 className={`text-2xl font-bold mb-8 text-center ${isESIM ? 'text-white' : 'text-slate-300'}`}>
        {title}
      </h3>
      
      <ul className="space-y-4">
        {features.map((feature, index) => {
          const isFeatureObject = typeof feature === 'object';
          const text = isFeatureObject ? feature.text : feature;
          const Icon = isFeatureObject ? feature.icon : null;
          
          return (
            <li key={index} className="flex items-start gap-3">
              <div className={`
                flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5
                ${isESIM 
                  ? 'bg-gradient-to-r from-purple-500 to-blue-500' 
                  : 'bg-slate-600'
                }
              `}>
                {isESIM ? (
                  Icon ? <Icon className="w-3 h-3 text-white" /> : <Check className="w-3 h-3 text-white" />
                ) : (
                  <X className="w-3 h-3 text-slate-300" />
                )}
              </div>
              <span className={`${isESIM ? 'text-slate-200' : 'text-slate-400'} leading-relaxed`}>
                {text}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
