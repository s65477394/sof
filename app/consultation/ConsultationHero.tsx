
'use client';

import Link from 'next/link';

export default function ConsultationHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Professional%20consultation%20meeting%20room%20with%20traditional%20Chinese%20elements%2C%20elegant%20conference%20table%20with%20documents%2C%20warm%20lighting%2C%20cultural%20artifacts%20on%20walls%2C%20modern%20business%20environment%20with%20ancient%20wisdom%20touches%2C%20clean%20sophisticated%20atmosphere&width=1920&height=800&seq=consultation-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          专业咨询预约
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          融合国学智慧与现代专业，为您量身定制财富传承解决方案
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="#consultation-form" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            立即预约
          </Link>
          <Link href="/" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            返回首页
          </Link>
        </div>
      </div>
    </section>
  );
}