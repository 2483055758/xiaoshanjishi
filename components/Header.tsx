import React from 'react';
import { GraduationCap, Search } from 'lucide-react';

interface HeaderProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/70 border-b border-white/50 supports-[backdrop-filter]:bg-white/60 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-4 min-w-fit">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 text-white">
                <GraduationCap className="w-7 h-7" />
            </div>
            <div className="hidden sm:block">
                <h1 className="text-slate-800 font-bold text-xl tracking-tight">杭州萧山技师学院</h1>
                <p className="text-slate-500 text-xs font-medium tracking-widest uppercase mt-0.5">AI 学术专用网站</p>
            </div>
            <div className="sm:hidden">
                <h1 className="text-slate-800 font-bold text-lg">萧山技师AI</h1>
            </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1 max-w-xl relative group">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
            </div>
            <input 
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="搜索 AI 工具、学术资源、论文助手..."
                className="w-full bg-slate-100/50 border border-slate-200 text-slate-700 text-sm rounded-2xl py-3 pl-12 pr-4 
                           focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 focus:bg-white 
                           transition-all duration-300 placeholder-slate-400 shadow-inner"
            />
            <div className="absolute inset-y-0 right-3 flex items-center">
                <div className="px-2 py-1 rounded-md bg-white border border-slate-200 shadow-sm">
                    <span className="text-[10px] font-medium text-slate-400">⌘ K</span>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;