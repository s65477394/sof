
'use client';

import Link from 'next/link';

export default function WealthPlanningPage() {
  const planningSteps = [
    {
      step: '01',
      title: '财务现状评估',
      description: '全面分析客户资产负债情况、收入支出结构、投资组合现状',
      details: ['资产负债表编制', '现金流量分析', '投资收益评估', '风险敞口测算']
    },
    {
      step: '02',
      title: '目标需求分析',
      description: '深入了解客户财富管理目标和家族传承需求',
      details: ['财富传承目标设定', '风险承受能力测评', '流动性需求分析', '税务筹划需求']
    },
    {
      step: '03',
      title: '方案设计制定',
      description: '基于评估结果设计个性化的财富管理方案',
      details: ['资产配置策略', '投资组合优化', '风险管控方案', '传承架构设计']
    },
    {
      step: '04',
      title: '实施跟踪调整',
      description: '协助方案实施并持续跟踪调整优化',
      details: ['方案执行指导', '定期回顾评估', '市场变化调整', '目标达成监控']
    }
  ];

  const serviceFeatures = [
    {
      title: '个性化定制',
      description: '根据每个家族的具体情况量身定制专属方案',
      icon: 'ri-user-settings-line'
    },
    {
      title: '专业团队',
      description: 'CPA、律师、税务师组成的专业团队提供全方位服务',
      icon: 'ri-team-line'
    },
    {
      title: '持续服务',
      description: '提供长期持续的跟踪服务和方案优化调整',
      icon: 'ri-time-line'
    },
    {
      title: '风险控制',
      description: '建立完善的风险识别、评估和控制体系',
      icon: 'ri-shield-check-line'
    }
  ];

  const caseStudies = [
    {
      title: '制造业家族企业传承案例',
      challenge: '第二代接班准备不足，家族资产缺乏有效管理',
      solution: '设立家族信托，制定5年接班培养计划，优化资产配置结构',
      result: '成功实现平稳传承，资产增值15%，税务负担降低30%'
    },
    {
      title: '高净值个人财富管理案例',
      challenge: '资产过度集中，流动性不足，税务负担较重',
      solution: '多元化资产配置，设立海外投资架构，实施税务筹划',
      result: '投资收益率提升8%，流动性问题解决，税务成本优化25%'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://readdy.ai/api/search-image?query=Luxury%20financial%20planning%20office%20with%20traditional%20Chinese%20elements%2C%20elegant%20desk%20with%20financial%20charts%2C%20gold%20accents%2C%20professional%20atmosphere%2C%20wealth%20management%20documents%2C%20sophisticated%20lighting&width=1920&height=800&seq=wealth-planning-hero&orientation=landscape')`
        }}
      >
        <div className="max-w-7xl mx-auto px-6 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              财富规划设计
            </h1>
            <p className="text-xl md:text-2xl mb-8 leading-relaxed">
              融合传统智慧与现代金融理论，为您的家族财富传承提供科学专业的规划方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/consultation" className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                立即咨询
              </Link>
              <Link href="#service-details" className="border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
                了解详情
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section id="service-details" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">专业财富规划服务</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                我们深知每个家族的财富传承需求都是独特的。通过系统性的分析方法和专业的规划工具，
                我们帮助客户建立科学的财富管理体系，实现财富的保值增值和有序传承。
              </p>
              <p className="text-gray-700 leading-relaxed mb-8">
                我们的服务不仅关注财务层面的优化，更注重将传统文化智慧融入现代财富管理理念，
                确保家族文化和价值观的传承延续。
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-2">200+</div>
                  <div className="text-sm text-gray-600">服务家族</div>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-lg">
                  <div className="text-2xl font-bold text-amber-600 mb-2">50亿+</div>
                  <div className="text-sm text-gray-600">管理资产</div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://readdy.ai/api/search-image?query=Professional%20wealth%20management%20consultation%20scene%2C%20Chinese%20family%20discussing%20financial%20planning%20with%20advisor%2C%20traditional%20office%20setting%20with%20modern%20technology%2C%20warm%20lighting%2C%20trust%20and%20professionalism&width=600&height=700&seq=wealth-planning-consultation&orientation=portrait"
                alt="财富规划咨询"
                className="w-full rounded-2xl shadow-lg object-cover object-top"
              />
            </div>
          </div>

          {/* Service Features */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceFeatures.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-b from-amber-50 to-white rounded-xl border border-amber-100">
                <div className="w-16 h-16 bg-amber-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <i className={`${feature.icon} text-2xl text-amber-600`}></i>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">服务流程</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              系统化的四步服务流程，确保每个环节都精准到位
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {planningSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl shadow-lg p-6 h-full">
                  <div className="text-center mb-4">
                    <div className="w-16 h-16 bg-amber-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-3">
                      {step.step}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
                  </div>
                  <p className="text-gray-600 text-center mb-4 text-sm leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center text-gray-700 text-sm">
                        <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {index < planningSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 -right-4 w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <i className="ri-arrow-right-line text-amber-600"></i>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">成功案例</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              真实案例展示我们的专业能力和服务效果
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((case_, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-white rounded-xl p-8 border border-amber-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{case_.title}</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-red-600 mb-2">面临挑战</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{case_.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-600 mb-2">解决方案</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{case_.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600 mb-2">实施效果</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">{case_.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-amber-700">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">开始您的财富传承之旅</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto leading-relaxed">
            让我们的专业团队为您量身定制财富规划方案，实现家族财富的永续传承
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="bg-white text-amber-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              免费咨询
            </Link>
            <Link href="/cases" className="border-2 border-white hover:bg-white hover:text-amber-600 text-white px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer whitespace-nowrap">
              查看更多案例
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
