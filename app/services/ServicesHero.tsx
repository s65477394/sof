
'use client';

import Link from 'next/link';

export default function ServicesHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Elegant%20Chinese%20financial%20planning%20office%20with%20traditional%20scroll%20paintings%2C%20modern%20desk%20with%20financial%20documents%2C%20warm%20golden%20lighting%2C%20professional%20atmosphere%20with%20cultural%20elements%2C%20luxury%20business%20environment&width=1920&height=800&seq=services-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          专业服务体系
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          融合传统智慧与现代金融，提供全方位财富传承解决方案
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            立即咨询
          </Link>
          <Link href="#services-list" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            了解服务
          </Link>
        </div>
      </div>
    </section>
  );
}
