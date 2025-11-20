import React from 'react';
import { Category } from '../types';
import { BookOpen } from 'lucide-react';

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryClick: (id: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ categories, activeCategory, onCategoryClick }) => {
  return (
    <nav className="hidden lg:block w-72 sticky top-28 h-[calc(100vh-8rem)] pr-6 overflow-y-auto custom-scrollbar">
      <div className="space-y-2">
        <div className="px-4 mb-4">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
              功能分类
            </h3>
        </div>
        {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategory === category.id;
            return (
                <button
                    key={category.id}
                    onClick={() => onCategoryClick(category.id)}
                    className={`w-full flex items-center gap-4 px-4 py-3.5 text-sm font-medium rounded-2xl transition-all duration-300 group relative overflow-hidden
                        ${isActive 
                            ? 'bg-white text-blue-600 shadow-lg shadow-blue-100/50 border border-blue-50' 
                            : 'text-slate-600 hover:bg-white/60 hover:text-slate-900 hover:shadow-sm'
                        }
                    `}
                >
                    <div className={`p-2 rounded-xl transition-colors duration-300 ${isActive ? 'bg-blue-50' : 'bg-slate-100 group-hover:bg-white'}`}>
                        <Icon size={18} className={isActive ? 'text-blue-600' : 'text-slate-500'} />
                    </div>
                    <span className="z-10">{category.title}</span>
                    {isActive && (
                        <div className="absolute right-4 w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                    )}
                </button>
            );
        })}
      </div>
      
      <div className="mt-10 px-2">
        <div className="relative overflow-hidden p-5 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-xl shadow-indigo-200 text-white">
            <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
            <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                    <BookOpen size={16} className="text-indigo-100" />
                    <h4 className="text-sm font-bold">学术资源库</h4>
                </div>
                <p className="text-xs text-indigo-100/90 leading-relaxed mb-3">
                    杭州萧山技师学院图书馆精选资源，助力师生科研。
                </p>
                <button className="w-full py-2 text-xs font-semibold bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl transition-colors">
                    查看指南
                </button>
            </div>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;