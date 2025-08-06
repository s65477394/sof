
'use client';

import Link from 'next/link';

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://readdy.ai/api/search-image?query=Traditional%20Chinese%20architecture%20with%20modern%20financial%20elements%2C%20ancient%20scrolls%20and%20books%20scattered%20elegantly%2C%20warm%20golden%20lighting%20creating%20sophisticated%20atmosphere%2C%20minimalist%20composition%20with%20clean%20background%2C%20professional%20business%20setting%20merged%20with%20classical%20Chinese%20study%20room%20aesthetic&width=1920&height=1080&seq=hero1&orientation=landscape')`
      }}
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          智慧传承 财富永续
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed">
          融合国学智慧与现代专业，CPA+法考+税务三重认证护航，为高净值家族提供全方位财富传承解决方案
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
            预约专业咨询
          </Link>
          <Link href="/services" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer whitespace-nowrap">
            了解服务详情
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <i className="ri-book-open-line text-3xl text-amber-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">国学智慧</h3>
            <p className="text-gray-200">连山易学精髓，古法今用</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <i className="ri-shield-check-line text-3xl text-amber-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">专业资质</h3>
            <p className="text-gray-200">CPA、法考、税务三重保障</p>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
            <div className="w-12 h-12 flex items-center justify-center mb-4 mx-auto">
              <i className="ri-home-heart-line text-3xl text-amber-400"></i>
            </div>
            <h3 className="text-xl font-semibold mb-2">家庭教育</h3>
            <p className="text-gray-200">传承理念与财富并重</p>
          </div>
        </div>
      </div>
    </section>
  );
}
