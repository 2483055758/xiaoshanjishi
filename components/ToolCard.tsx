import React, { useState } from 'react';
import { Tool } from '../types';
import { Flame, Sparkles, ArrowUpRight, ImageOff } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
  themeColor: string;
  gradient: string;
  categoryId: string;
}

const ToolCard: React.FC<ToolCardProps> = ({ tool, themeColor, gradient }) => {
  const [imgError, setImgError] = useState(false);

  // Function to get color classes based on theme
  const getThemeClasses = (color: string) => {
    const colors: Record<string, { text: string, bg: string, border: string, fallback: string }> = {
      blue: { text: 'text-blue-600', bg: 'bg-blue-50', border: 'group-hover:border-blue-300', fallback: 'from-blue-100 to-blue-200' },
      indigo: { text: 'text-indigo-600', bg: 'bg-indigo-50', border: 'group-hover:border-indigo-300', fallback: 'from-indigo-100 to-indigo-200' },
      purple: { text: 'text-purple-600', bg: 'bg-purple-50', border: 'group-hover:border-purple-300', fallback: 'from-purple-100 to-purple-200' },
      emerald: { text: 'text-emerald-600', bg: 'bg-emerald-50', border: 'group-hover:border-emerald-300', fallback: 'from-emerald-100 to-emerald-200' },
      orange: { text: 'text-orange-600', bg: 'bg-orange-50', border: 'group-hover:border-orange-300', fallback: 'from-orange-100 to-orange-200' },
      pink: { text: 'text-pink-600', bg: 'bg-pink-50', border: 'group-hover:border-pink-300', fallback: 'from-pink-100 to-pink-200' },
      cyan: { text: 'text-cyan-600', bg: 'bg-cyan-50', border: 'group-hover:border-cyan-300', fallback: 'from-cyan-100 to-cyan-200' },
    };
    return colors[color] || colors.blue;
  };

  const theme = getThemeClasses(themeColor);

  return (
    <a 
      href={tool.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className={`group relative flex h-40 w-full overflow-hidden rounded-[1.5rem]
                 bg-white shadow-[0_2px_12px_-4px_rgba(0,0,0,0.08)] border border-slate-100
                 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)]
                 ${theme.border}`}
    >
      {/* --- Left Content Area (50%) --- */}
      <div className="w-1/2 p-5 flex flex-col relative z-10 bg-white/95 backdrop-blur-sm">
        {/* Header: Icon & Title */}
        <div className="flex items-start justify-between mb-2">
           <div className={`w-10 h-10 rounded-xl ${theme.bg} bg-opacity-50 flex items-center justify-center shrink-0 overflow-hidden group-hover:scale-110 transition-transform duration-300 border border-white shadow-sm`}>
            {tool.icon ? (
              <img 
                src={tool.icon} 
                alt="" 
                className="w-6 h-6 object-contain"
                onError={(e) => {
                    // Fallback for small icons
                    (e.target as HTMLImageElement).style.display = 'none';
                    (e.target as HTMLImageElement).parentElement!.innerHTML = `<span class="font-bold ${theme.text}">${tool.name.charAt(0)}</span>`;
                }} 
              />
            ) : (
              <span className={`text-lg font-bold ${theme.text}`}>{tool.name.charAt(0)}</span>
            )}
          </div>
        </div>
        
        <div className="min-w-0 mb-1">
            <h3 className="font-bold text-[15px] text-slate-800 truncate leading-tight group-hover:text-blue-600 transition-colors">
              {tool.name}
            </h3>
             <div className="flex flex-wrap gap-1.5 mt-1.5">
                {tool.isHot && (
                    <span className="flex items-center text-[9px] font-bold text-orange-600 bg-orange-50 px-1.5 py-0.5 rounded-full border border-orange-100">
                        <Flame size={9} className="mr-0.5 fill-orange-600" /> HOT
                    </span>
                )}
                {tool.isNew && (
                    <span className="flex items-center text-[9px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full border border-emerald-100">
                        <Sparkles size={9} className="mr-0.5 fill-emerald-600" /> NEW
                    </span>
                )}
            </div>
        </div>

        {/* Description */}
        <p className="text-[10px] text-slate-500 line-clamp-2 leading-relaxed mt-auto font-medium">
          {tool.description}
        </p>
      </div>

      {/* --- Right Visual Area (50%) --- */}
      <div className={`relative w-1/2 h-full overflow-hidden ${imgError ? `bg-gradient-to-br ${theme.fallback}` : 'bg-slate-100'}`}>
        
        {!imgError ? (
             <img 
                src={tool.image} 
                alt={tool.name} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                onError={() => setImgError(true)}
            />
        ) : (
            // Fallback Geometric Pattern when image fails
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/30 rounded-full -mr-10 -mt-10 blur-xl"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/30 rounded-full -ml-10 -mb-10 blur-xl"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                     <span className={`text-6xl font-black opacity-10 mix-blend-overlay uppercase`}>
                        {tool.name.slice(0,2)}
                     </span>
                </div>
            </div>
        )}
        
        {/* Soft Gradient Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-white`}></div>
        
        {/* Color Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} mix-blend-overlay opacity-30 group-hover:opacity-50 transition-opacity duration-500`}></div>
        
        {/* Hover Action Button */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[1px] bg-black/5">
            <div className="px-3 py-1.5 bg-white/95 rounded-full shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex items-center gap-1.5 border border-white/50">
                <span className="text-[10px] font-bold text-slate-800">立即使用</span>
                <ArrowUpRight size={12} className="text-slate-800" />
            </div>
        </div>
        
        {/* Tags */}
        <div className="absolute bottom-2 right-2 flex flex-col items-end gap-1 opacity-80 group-hover:opacity-0 transition-opacity duration-200">
             {tool.tags.slice(0, 1).map(tag => (
                 <span key={tag} className="px-1.5 py-0.5 text-[9px] font-bold text-white/90 bg-black/30 backdrop-blur-md rounded border border-white/10 shadow-sm">
                    #{tag}
                 </span>
             ))}
        </div>
      </div>
    </a>
  );
};

export default ToolCard;