import React from 'react';

const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden bg-slate-50">
      {/* Base Gradient - Light and Airy */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50 opacity-100"></div>
      
      {/* Animated Blobs - Slightly more vibrant now to support image heavy content */}
      <div className="absolute top-0 -left-4 w-[600px] h-[600px] bg-blue-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob"></div>
      <div className="absolute top-0 -right-4 w-[600px] h-[600px] bg-purple-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-[600px] h-[600px] bg-indigo-200/30 rounded-full mix-blend-multiply filter blur-[100px] animate-blob animation-delay-4000"></div>
      
      {/* Grid Overlay - Very Subtle */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:60px_60px]"></div>
    </div>
  );
};

export default Background;