import React, { useState, useMemo } from 'react';
import Background from './components/Background';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ToolCard from './components/ToolCard';
import { CATEGORIES } from './constants';
import { ArrowRight, Sparkles, Star, Zap } from 'lucide-react';

const App: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>(CATEGORIES[0].id);

  // Handle scrolling to section
  const scrollToCategory = (categoryId: string) => {
    setActiveCategory(categoryId);
    const element = document.getElementById(categoryId);
    if (element) {
      // Offset for fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // Filter Logic
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;

    const lowerQuery = searchQuery.toLowerCase();
    
    // Deep clone to avoid mutating constants and filter tools
    return CATEGORIES.map(category => ({
      ...category,
      tools: category.tools.filter(tool => 
        tool.name.toLowerCase().includes(lowerQuery) ||
        tool.description.toLowerCase().includes(lowerQuery) ||
        tool.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
      )
    })).filter(category => category.tools.length > 0);
  }, [searchQuery]);

  return (
    <div className="min-h-screen selection:bg-blue-100 selection:text-blue-900">
      <Background />
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <div className="container mx-auto px-4 py-8 flex items-start gap-8">
        {/* Sidebar Navigation (Desktop) */}
        <Sidebar 
            categories={CATEGORIES} 
            activeCategory={activeCategory} 
            onCategoryClick={scrollToCategory} 
        />

        {/* Main Content Area */}
        <main className="flex-1 min-w-0 pb-20">
            {/* Hero Banner (Only show when not searching) */}
            {!searchQuery && (
                <div className="mb-12 relative overflow-hidden rounded-[2.5rem] bg-white shadow-2xl shadow-indigo-200/40 group min-h-[340px] flex flex-col-reverse md:flex-row border border-white/50">
                     {/* Image Background for the Right Side - More Stable URL */}
                     <div className="relative md:absolute md:top-0 md:right-0 w-full md:w-2/3 h-64 md:h-full">
                        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/90 to-transparent z-10"></div>
                        <img 
                          src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=2000&auto=format&fit=crop" 
                          alt="AI Future Campus Library" 
                          className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[3s]"
                        />
                     </div>
                     
                     <div className="relative z-20 p-8 md:p-16 flex flex-col justify-center max-w-2xl">
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-blue-50/90 border border-blue-100 backdrop-blur-md w-fit shadow-sm">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                            </span>
                            <span className="text-[11px] font-bold text-blue-700 tracking-wide uppercase">AI Academic Hub v3.0</span>
                        </div>
                        
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6">
                            杭州萧山技师学院<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">AI 学术专用平台</span>
                        </h2>
                        
                        <p className="text-slate-600 text-base md:text-lg font-medium leading-relaxed max-w-md md:max-w-lg mb-8 backdrop-blur-[1px]">
                            一站式集成 <strong>Kimi</strong>、<strong>即梦</strong>、<strong>秘塔</strong> 等80+款前沿AI工具，
                            <br className="hidden md:block" />
                            赋能全校师生，开启智慧科研与创意教学新时代。
                        </p>
                        
                        <div className="flex items-center gap-4">
                            <button 
                                onClick={() => scrollToCategory('core-models')}
                                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-slate-900 text-white font-bold shadow-xl shadow-blue-900/20 hover:bg-blue-700 hover:shadow-blue-600/30 hover:-translate-y-1 transition-all duration-300"
                            >
                                立即探索
                                <ArrowRight size={18} />
                            </button>
                            <button className="hidden sm:flex items-center gap-2 px-6 py-4 rounded-2xl bg-white border border-slate-200 text-slate-600 font-bold hover:bg-slate-50 transition-all">
                                <Zap size={18} className="fill-slate-400 text-slate-400" />
                                热门榜单
                            </button>
                        </div>
                     </div>
                </div>
            )}

            {/* Categories & Grid */}
            <div className="space-y-20">
                {filteredCategories.length > 0 ? (
                    filteredCategories.map((category) => (
                        <section key={category.id} id={category.id} className="scroll-mt-32">
                            <div className="flex items-center gap-4 mb-8">
                                <div className={`p-3.5 rounded-2xl bg-white shadow-lg shadow-slate-100 border border-slate-100 text-${category.themeColor || 'blue'}-600`}>
                                    <category.icon className="w-7 h-7" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{category.title}</h3>
                                    <div className="flex items-center gap-2 text-sm text-slate-500 mt-1 font-medium">
                                        <span>{category.description}</span>
                                        <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                                        <span className="text-slate-400">{category.tools.length} 款工具</span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Responsive Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
                                {category.tools.map((tool) => (
                                    <div key={tool.id} className="h-full">
                                        <ToolCard 
                                            tool={tool} 
                                            categoryId={category.id}
                                            themeColor={category.themeColor || 'blue'} 
                                            gradient={category.gradient || 'from-blue-400 to-indigo-500'}
                                        />
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))
                ) : (
                    <div className="flex flex-col items-center justify-center py-32 text-center bg-white/50 rounded-3xl border border-white border-dashed">
                        <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-6 shadow-inner">
                            <span className="text-4xl grayscale opacity-50">🔍</span>
                        </div>
                        <h3 className="text-xl text-slate-800 font-bold">未找到相关工具</h3>
                        <p className="text-slate-500 mt-2 max-w-xs mx-auto">试试搜索 "写作"、"视频" 或 "DeepSeek"</p>
                        <button 
                            onClick={() => setSearchQuery('')}
                            className="mt-6 px-6 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:border-blue-400 hover:text-blue-600 transition-all shadow-sm"
                        >
                            清除搜索条件
                        </button>
                    </div>
                )}
            </div>

            <footer className="mt-32 pt-12 pb-8 border-t border-slate-200/60">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-center md:text-left">
                        <h4 className="text-slate-900 font-bold text-base">杭州萧山技师学院</h4>
                        <p className="text-slate-500 text-xs mt-1">© {new Date().getFullYear()} AI学术专用导航 | 赋能教育 智创未来</p>
                    </div>
                    <div className="flex items-center gap-6">
                         {/* Simple social icons or links */}
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm"><Star size={16}/></a>
                            <a href="#" className="hover:text-blue-600 transition-colors bg-white p-2 rounded-full shadow-sm"><Sparkles size={16}/></a>
                        </div>
                    </div>
                </div>
            </footer>
        </main>
      </div>
    </div>
  );
};

export default App;