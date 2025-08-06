
'use client';

import Link from 'next/link';

export default function CasesHero() {
  return (
    <section 
      className="relative py-32 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Successful%20Chinese%20family%20business%20meeting%2C%20multiple%20generations%20around%20elegant%20conference%20table%2C%20traditional%20Chinese%20art%20on%20walls%2C%20warm%20lighting%2C%20prosperity%20symbols%2C%20professional%20atmosphere%20with%20cultural%20heritage%20elements&width=1920&height=800&seq=cases-hero&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          成功案例展示
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          真实案例见证专业实力，智慧传承成就家族未来
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            咨询服务
          </Link>
          <Link href="#cases-list" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
            查看案例
          </Link>
        </div>
      </div>
    </section>
  );
}
