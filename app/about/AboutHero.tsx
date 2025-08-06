
'use client';

import Link from 'next/link';

export default function AboutHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Elegant%20Chinese%20study%20room%20with%20traditional%20calligraphy%2C%20books%20on%20financial%20planning%2C%20tea%20ceremony%20setup%2C%20warm%20lighting%2C%20cultural%20artifacts%2C%20professional%20portrait%20setting%20with%20wisdom%20atmosphere&width=1920&height=800&seq=about-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          关于我们
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          融合国学智慧与现代金融，传承家族财富与文化精神
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            预约咨询
          </Link>
          <Link href="#founder-story" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            了解更多
          </Link>
        </div>
      </div>
    </section>
  );
}
