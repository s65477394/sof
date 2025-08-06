
'use client';

import Link from 'next/link';

export default function TaxPlanningPage() {
  const taxServices = [
    {
      title: '个人所得税筹划',
      description: '针对高收入人群的个税优化方案',
      icon: 'ri-user-line',
      benefits: ['收入结构优化', '专项附加扣除', '税收递延策略', '合规风险控制']
    },
    {
      title: '企业税务优化',
      description: '企业整体税务负担最小化方案',
      icon: 'ri-building-line',
      benefits: ['税务架构设计', '优惠政策运用', '税务风险管理', '跨境税务规划']
    },
    {
      title: '资产重组筹划',
      description: '通过合理重组降低税务成本',
      icon: 'ri-exchange-line',
      benefits: ['股权重组设计', '资产划转优化', '税负影响评估', '时机选择建议']
    },
    {
      title: '国际税务规划',
      description: '跨境投资的税务筹划服务',
      icon: 'ri-global-line',
      benefits: ['双重征税避免', '转让定价规划', 'BEPS合规应对', '税务居民身份']
    }
  ];

  const planningPrinciples = [
    {
      principle: '合法合规',
      description: '严格遵守税法规定，确保所有筹划方案合法有效',
      icon: 'ri-shield-check-line'
    },
    {
      principle: '综合效益',
      description: '不仅关注税务节省，更注重整体经济效益最大化',
      icon: 'ri-line-chart-line'
    },
    {
      principle: '前瞻规划',
      description: '结合税法发展趋势，制定具有前瞻性的筹划方案',
      icon: 'ri-eye-line'
    },
    {
      principle: '风险可控',
      description: '建立完善的风险识别和控制机制，确保筹划安全',
      icon: 'ri-lock-line'
    }
  ];

  const taxSavingCases = [
    {
      client: '科技公司创始人',
      originalTax: '年税负2000万元',
      optimizedTax: '年税负1400万元',
      saving: '节税30%',
      method: '股权激励+递延纳税'
    },
    {
      client: '制造业家族企业',
      originalTax: '年税负800万元',
      optimizedTax: '年税负560万元',
      saving: '节税30%',
      method: '税务架构重组'
    },
    {
      client: '投资机构合伙人',
      originalTax: '年税负1500万元',
      optimizedTax: '年税负900万元',
      saving: '节税40%',
      method: '收入性质转换'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Professional%20tax%20planning%20office%20with%20Chinese%20traditional%20elements%2C%20tax%20documents%20and%20calculators%2C%20legal%20books%2C%20sophisticated%20workspace%2C%20gold%20accents%2C%20professional%20atmosphere&width=1920&height=800&seq=tax-planning-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              税务筹划优化
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              运用专业税务知识和丰富实践经验，为您制定合法合规的税务优化方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                税务咨询
              </Link>
              <Link href="#tax-services" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                服务详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tax Services */}
      <section id="tax-services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">专业税务服务</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              覆盖个人、企业、跨境等各类税务筹划需求
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {taxServices.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 border border-green-100 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-green-500 rounded-xl flex items-center justify-center mr-4">
                    <i className={`${service.icon} text-2xl text-white`}></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-green-600 font-medium">{service.description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  {service.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Principles */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">筹划原则</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              我们始终坚持四大核心原则，确保每一个筹划方案的安全性和有效性
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningPrinciples.map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${item.icon} text-2xl text-green-600`}></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.principle}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">节税成效展示</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              真实案例见证我们的专业实力和服务效果
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {taxSavingCases.map((case_, index) => (
              <div key={index} className="bg-gradient-to-b from-green-50 to-white rounded-xl p-8 border border-green-200 text-center">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">{case_.client}</h3>
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">筹划前</p>
                    <p className="text-red-600 font-semibold">{case_.originalTax}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <i className="ri-arrow-down-line text-2xl text-green-600"></i>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600 mb-1">筹划后</p>
                    <p className="text-green-600 font-semibold">{case_.optimizedTax}</p>
                  </div>
                </div>
                <div className="bg-green-100 rounded-lg p-4 mb-4">
                  <p className="text-green-700 font-bold text-xl">{case_.saving}</p>
                </div>
                <p className="text-gray-600 text-sm">
                  <span className="font-semibold">方案：</span>{case_.method}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 text-sm mb-6">
              *以上为真实案例数据，具体节税效果因个人情况而异
            </p>
            <Link href="/cases" className="inline-flex items-center text-green-600 hover:text-green-700 font-semibold transition-colors cursor-pointer whitespace-nowrap">
              查看更多成功案例
              <i className="ri-arrow-right-line ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">服务流程</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              {step: '01', title: '现状分析', desc: '全面分析当前税务状况'},
              {step: '02', title: '方案设计', desc: '制定个性化筹划方案'},
              {step: '03', title: '风险评估', desc: '评估方案合规风险'},
              {step: '04', title: '实施指导', desc: '协助方案落地实施'},
              {step: '05', title: '后续维护', desc: '持续跟踪优化调整'}
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">开始您的税务优化之旅</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            让税务师资格认证的专业团队为您量身定制税务筹划方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              免费税务诊断
            </Link>
            <Link href="/tools" className="border-2 border-white hover:bg-white hover:text-green-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              税务计算工具
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
