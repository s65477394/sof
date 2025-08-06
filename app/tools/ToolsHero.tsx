
'use client';

import Link from 'next/link';

export default function ToolsHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Modern%20financial%20planning%20workspace%20with%20calculators%2C%20charts%2C%20traditional%20Chinese%20abacus%2C%20computer%20screens%20showing%20financial%20data%2C%20professional%20tools%20and%20documents%2C%20warm%20lighting%2C%20organized%20desktop&width=1920&height=800&seq=tools-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          专业工具中心
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          专业计算工具与规划资源，助力您的财富管理决策
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#calculator-grid" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            使用工具
          </Link>
          <Link href="/consultation" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            专业咨询
          </Link>
        </div>
      </div>
    </section>
  );
}
