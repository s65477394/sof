
'use client';

export default function CasesList() {
  const cases = [
    {
      title: '制造业家族企业传承规划',
      industry: '制造业',
      assets: '8亿元',
      challenge: '三代传承，税务负担重',
      solution: '设立家族信托，优化股权架构',
      result: '年节省税费2000万，传承架构清晰',
      image: 'https://readdy.ai/api/search-image?query=Modern%20manufacturing%20factory%20exterior%20with%20Chinese%20architectural%20elements%2C%20clean%20industrial%20building%2C%20traditional%20and%20modern%20fusion%2C%20professional%20business%20photography%2C%20blue%20sky%20background&width=600&height=400&seq=case-manufacturing&orientation=landscape'
    },
    {
      title: '房地产投资家族财富管理',
      industry: '房地产',
      assets: '12亿元',
      challenge: '资产集中，风险较高',
      solution: '多元化投资组合，国际资产配置',
      result: '风险降低40%，收益稳定增长',
      image: 'https://readdy.ai/api/search-image?query=Luxury%20real%20estate%20development%20with%20traditional%20Chinese%20garden%20elements%2C%20modern%20high-rise%20buildings%2C%20elegant%20landscape%20design%2C%20prosperity%20and%20success%20atmosphere&width=600&height=400&seq=case-realestate&orientation=landscape'
    },
    {
      title: '金融投资家族传承架构',
      industry: '金融投资',
      assets: '25亿元',
      challenge: '复杂股权结构，合规要求高',
      solution: '重构治理架构，建立合规体系',
      result: '治理效率提升60%，合规风险消除',
      image: 'https://readdy.ai/api/search-image?query=Modern%20financial%20district%20office%20building%20with%20traditional%20Chinese%20elements%2C%20glass%20facade%20with%20cultural%20patterns%2C%20professional%20business%20environment%2C%20golden%20hour%20lighting&width=600&height=400&seq=case-finance&orientation=landscape'
    },
    {
      title: '科技企业创始人财富规划',
      industry: '科技互联网',
      assets: '6亿元',
      challenge: '股权估值波动，流动性需求',
      solution: '分层持股架构，流动性管理',
      result: '估值波动降低30%，流动性充足',
      image: 'https://readdy.ai/api/search-image?query=High-tech%20office%20building%20with%20innovative%20design%2C%20modern%20glass%20structure%2C%20technology%20elements%2C%20professional%20corporate%20environment%2C%20clean%20architectural%20photography&width=600&height=400&seq=case-tech&orientation=landscape'
    },
    {
      title: '传统商贸家族现代化转型',
      industry: '商贸流通',
      assets: '4亿元',
      challenge: '传统模式转型，代际差异',
      solution: '渐进式转型，家族教育培训',
      result: '成功转型升级，家族和谐传承',
      image: 'https://readdy.ai/api/search-image?query=Traditional%20Chinese%20trading%20company%20building%20with%20modern%20renovations%2C%20blend%20of%20old%20and%20new%20architecture%2C%20commercial%20district%20setting%2C%20professional%20business%20photography&width=600&height=400&seq=case-trade&orientation=landscape'
    },
    {
      title: '医疗健康产业传承规划',
      industry: '医疗健康',
      assets: '3亿元',
      challenge: '行业监管严格，专业要求高',
      solution: '合规性审查，专业人才培养',
      result: '监管风险消除，专业传承成功',
      image: 'https://readdy.ai/api/search-image?query=Modern%20medical%20center%20building%20with%20healing%20garden%2C%20clean%20white%20architecture%2C%20professional%20healthcare%20environment%2C%20peaceful%20and%20trustworthy%20atmosphere&width=600&height=400&seq=case-medical&orientation=landscape'
    }
  ];

  return (
    <section id="cases-list" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">典型案例分析</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            深入了解不同行业家族的传承挑战与解决方案
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((case_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="relative h-48">
                <img 
                  src={case_.image}
                  alt={case_.title}
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {case_.industry}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{case_.title}</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">资产规模</span>
                    <div className="font-semibold text-amber-600">{case_.assets}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">行业领域</span>
                    <div className="font-semibold text-gray-900">{case_.industry}</div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-red-600">挑战：</span>
                    <span className="text-sm text-gray-700 ml-2">{case_.challenge}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-blue-600">方案：</span>
                    <span className="text-sm text-gray-700 ml-2">{case_.solution}</span>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-green-600">成果：</span>
                    <span className="text-sm text-gray-700 ml-2">{case_.result}</span>
                  </div>
                </div>
                
                <button className="w-full bg-amber-100 hover:bg-amber-200 text-amber-700 py-2 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                  了解详情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
